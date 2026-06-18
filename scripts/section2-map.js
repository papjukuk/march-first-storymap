// Section 2 scrollytelling map renderer.
// Reads ordered matching data from scripts/section2-card.js.
window.Section2ScrollytellingMap = (() => {
  const timelineData = window.Section2Card?.cards || [];
  const SMART_SEOUL_MAP_URL = "https://map.seoul.go.kr/smgis2/short/6PLgj";
  const POPUP_CLOSE_DELAY = 160;
  const LOCAL_IMAGE_BY_FEATURE_ID = {
    "8": "./assets/images/place-8.jpg",
    "20": "./assets/images/place-20.jpg",
    "24": "./assets/images/place-24.jpg",
    "37": "./assets/images/place-37.jpg",
    "40": "./assets/images/place-40.jpg",
    "42": "./assets/images/place-42.jpg",
    "43": "./assets/images/place-43.jpg",
    "78": "./assets/images/place-78.jpg"
  };
  const state = {
    allMarkersById: new Map(),
    markerLabelsById: new Map(),
    markersById: new Map(),
    matchedTimeline: [],
    map: null,
    routeActiveLine: null,
    routeVisitedLine: null
  };

  // 화면 단위: 초기화와 데이터
  // 기능: 섹션 초기화
  function init(geojson) {
    const features = geojson?.features || [];
    matchTimeline(features);
    renderSteps();

    if (!initMap(features)) return;
    initStepObserver();
    activate(0);
  }

  // 기능: GeoJSON 매칭
  function matchTimeline(features) {
    const featuresById = new Map(features.map((feature) => [String(feature.id), feature]));
    const failures = [];

    state.matchedTimeline = timelineData.map((item) => {
      const matchedPlaces = [];
      const missingPlaces = [];

      item.contentsIds.forEach((contentsId) => {
        const feature = featuresById.get(String(contentsId));
        if (!feature) {
          missingPlaces.push(contentsId);
          failures.push({ order: item.order, event: item.title, featureId: contentsId });
          return;
        }

        matchedPlaces.push({
          requestedId: contentsId,
          feature
        });
      });

      return { ...item, matchedPlaces, missingPlaces };
    });

    state.markerLabelsById.clear();
    state.matchedTimeline.forEach((item) => {
      item.matchedPlaces.forEach((place) => {
        state.markerLabelsById.set(String(place.feature.id), String(item.order));
      });
    });

    console.group("Section2 GeoJSON matching");
    console.table(state.matchedTimeline.flatMap((item) => item.matchedPlaces.map((place) => ({
      order: item.order,
      event: item.title,
      requestedId: place.requestedId,
      featureId: place.feature.id,
      matchedFeature: place.feature.properties.CONTENTS_NAME,
      subId: place.feature.properties.SUB_ID,
      contentsId: place.feature.properties.CONTENTS_ID,
      coordData: place.feature.properties.COORD_DATA
    }))));
    console.table(failures);
    console.groupEnd();
  }

  // 화면 단위: 카드와 패널

  // 기능: 카드 렌더링
  function renderSteps() {
    const container = document.getElementById("section2-story-steps");
    if (!container) return;

    container.innerHTML = state.matchedTimeline
      .map((item, index) => `
        <article class="story-step${index === 0 ? " active" : ""}" data-step-index="${index}">
          <p class="step-date">${item.date}</p>
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
          ${renderStepPanel(item)}
        </article>
      `)
      .join("");
  }

  // 기능: 패널 렌더링
  function renderStepPanel(item) {
    const panels = item.matchedPlaces
      .map((place) => {
        const props = place.feature.properties || {};
        const title = escapeHtml(props.CONTENTS_NAME || `Feature ${place.feature.id}`);
        const address = escapeHtml(props.ADDR_NEW || props.ADDR_OLD || "");
        const coordinates = formatCoordinates(getFeatureLngLat(place.feature));
        const imageUrl = getPanelImageUrl(place.feature);
        const description = escapeHtml(getLongDescription(props));

        return `
          <aside class="step-info-panel" aria-label="${title}">
            <p class="panel-kicker">장소 정보</p>
            <h3>${title}</h3>
            ${imageUrl ? `
              <figure class="panel-media">
                <img src="${escapeHtml(imageUrl)}" alt="${title}">
              </figure>
            ` : ""}
            <p class="panel-address"><span>주소 :</span> ${address}</p>
            ${description ? `<p class="panel-long-description">${description}</p>` : ""}
          </aside>
        `;
      })
      .join("");

    const missing = item.missingPlaces
      .map((featureId) => `
        <aside class="step-info-panel">
          <p class="panel-kicker">Missing</p>
          <h3>Feature ${featureId}</h3>
          <dl class="panel-meta">
            <div>
              <dt>상태</dt>
              <dd>GeoJSON 매칭 실패</dd>
            </div>
          </dl>
        </aside>
      `)
      .join("");

    if (!panels && !missing) return "";
    return `<div class="step-panel-stack">${panels}${missing}</div>`;
  }

  // 기능: 스크롤 감지
  function initStepObserver() {
    const steps = [...document.querySelectorAll(".story-step")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

      if (!visible) return;
      activate(Number(visible.target.dataset.stepIndex));
    }, {
      root: null,
      rootMargin: "-42% 0px -42% 0px",
      threshold: 0
    });

    steps.forEach((step) => observer.observe(step));
  }

  // 기능: 활성 카드 전환
  function activate(index) {
    const item = state.matchedTimeline[index];
    if (!item || !state.map) return;

    document.querySelectorAll(".story-step").forEach((step) => {
      step.classList.toggle("active", Number(step.dataset.stepIndex) === index);
    });

    syncVisibleMarkers(index);
    setActiveMarkers(item);

    if (state.routeVisitedLine && state.routeActiveLine) {
      state.routeVisitedLine.setLatLngs(getRoutePointsThrough(index - 1));
      state.routeActiveLine.setLatLngs(getRoutePointsForCurrentStep(index));
    }

    const progress = ((index + 1) / state.matchedTimeline.length) * 100;
    const routeProgress = document.getElementById("route-progress-fill");
    if (routeProgress) routeProgress.style.width = `${progress}%`;
  }

  // 화면 단위: 지도와 마커

  // 기능: 지도 초기화
  function initMap(features) {
    const mapElement = document.getElementById("timeline-map");
    if (!mapElement || !window.L) {
      setPanelError("지도 라이브러리를 불러오지 못했습니다. 네트워크 연결 또는 Leaflet CDN 로드를 확인하세요.");
      return false;
    }

    state.map = L.map(mapElement, {
      center: [37.574, 126.984],
      zoom: 19,
      scrollWheelZoom: false,
      attributionControl: false
    });

    // 배경지도: CARTO Dark Matter
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19
    }).addTo(state.map);

    features.forEach((feature) => {
      const latLng = getFeatureLatLng(feature);
      if (!latLng || !feature.id) return;

      const marker = L.marker(latLng, {
        icon: createMarkerIcon(false, state.markerLabelsById.get(String(feature.id)))
      });

      marker.bindPopup(createSmartSeoulPopup(feature), {
        closeButton: false,
        offset: [0, -18],
        autoPan: true
      });

      bindHoverPopup(marker);

      state.allMarkersById.set(String(feature.id), marker);
    });

    state.routeVisitedLine = L.polyline([], {
      className: "story-route story-route-visited",
      color: "#c8c3bb",
      dashArray: "4 12",
      lineCap: "round",
      weight: 4,
      opacity: 0.26
    }).addTo(state.map);

    state.routeActiveLine = L.polyline([], {
      className: "story-route story-route-active",
      color: "#d94336",
      dashArray: "4 11",
      lineCap: "round",
      weight: 6,
      opacity: 0.98
    }).addTo(state.map);

    fitMapToStoryRoute();
    return true;
  }

  // 기능: 마커 표시 동기화
  function syncVisibleMarkers(index) {
    const visibleIds = new Set();

    state.matchedTimeline.slice(0, index + 1).forEach((item) => {
      item.matchedPlaces.forEach((place) => {
        visibleIds.add(String(place.feature.id));
      });
    });

    state.allMarkersById.forEach((marker, id) => {
      const shouldShow = visibleIds.has(id);
      const isShown = state.markersById.has(id);

      if (shouldShow && !isShown) {
        marker.addTo(state.map);
        state.markersById.set(id, marker);
      }

      if (!shouldShow && isShown) {
        marker.remove();
        state.markersById.delete(id);
      }
    });
  }

  // 기능: 활성 마커 표시
  function setActiveMarkers(item) {
    const activeIds = new Set(item.matchedPlaces.map((place) => String(place.feature.id)));

    state.markersById.forEach((marker, id) => {
      marker.setIcon(createMarkerIcon(activeIds.has(id), state.markerLabelsById.get(id)));
    });
  }

  // 기능: 경로 좌표 생성
  function getRoutePointsThrough(index) {
    const points = [];

    state.matchedTimeline.slice(0, index + 1).forEach((item) => {
      item.matchedPlaces.forEach((place) => {
        const latLng = getFeatureLatLng(place.feature);
        if (!latLng) return;
        const prev = points[points.length - 1];
        if (!prev || prev[0] !== latLng[0] || prev[1] !== latLng[1]) points.push(latLng);
      });
    });

    return points;
  }

  // 기능: 현재 카드의 경로 구간 생성
  function getRoutePointsForCurrentStep(index) {
    const points = [];
    const previousPoints = getRoutePointsThrough(index - 1);
    const previousPoint = previousPoints[previousPoints.length - 1];

    if (previousPoint) points.push(previousPoint);

    const item = state.matchedTimeline[index];
    if (!item) return points;

    item.matchedPlaces.forEach((place) => {
      const latLng = getFeatureLatLng(place.feature);
      if (!latLng) return;
      const prev = points[points.length - 1];
      if (!prev || prev[0] !== latLng[0] || prev[1] !== latLng[1]) points.push(latLng);
    });

    return points;
  }

  // 기능: 지도 범위 맞춤
  function fitMapToStoryRoute() {
    const routePoints = getRoutePointsThrough(state.matchedTimeline.length - 1);
    if (!routePoints.length) return;

    const bounds = L.latLngBounds(routePoints);
    const isMobile = window.innerWidth < 900;
    state.map.fitBounds(bounds, {
      paddingTopLeft: isMobile ? [36, 36] : [420, 80],
      paddingBottomRight: isMobile ? [36, 120] : [80, 120],
      maxZoom: 19
    });
  }

  // 기능: 마커 아이콘 생성
  function createMarkerIcon(active = false, label = "") {
    return L.divIcon({
      className: "",
      html: `<div class="story-marker${active ? " active" : ""}"><span>${escapeHtml(label)}</span></div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
  }

  // 기능: 스마트서울맵 연결 팝업 생성
  function createSmartSeoulPopup(feature) {
    const title = escapeHtml(feature?.properties?.CONTENTS_NAME || "장소 정보");

    return `
      <div class="smart-map-popup">
        <p class="smart-map-popup-kicker">외부 지도</p>
        <strong>${title}</strong>
        <p>스마트서울맵에서 주변 위치를 더 자세히 볼 수 있어요.</p>
        <a href="${SMART_SEOUL_MAP_URL}" target="_blank" rel="noopener noreferrer">스마트서울맵 열기</a>
      </div>
    `;
  }

  // 기능: 마커 호버 중에만 스마트서울맵 팝업 표시
  function bindHoverPopup(marker) {
    let closeTimer = null;

    const cancelClose = () => {
      if (!closeTimer) return;
      clearTimeout(closeTimer);
      closeTimer = null;
    };

    const scheduleClose = () => {
      cancelClose();
      closeTimer = setTimeout(() => marker.closePopup(), POPUP_CLOSE_DELAY);
    };

    marker.on("mouseover", () => {
      cancelClose();
      marker.openPopup();
    });

    marker.on("mouseout", scheduleClose);

    marker.on("popupopen", (event) => {
      const popupElement = event.popup.getElement();
      if (!popupElement) return;

      popupElement.addEventListener("mouseenter", cancelClose);
      popupElement.addEventListener("mouseleave", scheduleClose);
    });
  }

  // 화면 단위: 공통 유틸

  // 기능: Leaflet 좌표 변환
  function getFeatureLatLng(feature) {
    const coordinates = getFeatureLngLat(feature);
    return coordinates ? [coordinates[1], coordinates[0]] : null;
  }

  // 기능: Point 좌표 추출
  function getFeatureLngLat(feature) {
    const point = feature?.geometry?.geometries?.find((geometry) => geometry.type === "Point");
    return point?.coordinates || null;
  }

  // 기능: 배포 환경에서 차단되지 않는 로컬 이미지 선택
  function getPanelImageUrl(feature) {
    return LOCAL_IMAGE_BY_FEATURE_ID[String(feature?.id)] || feature?.properties?.IMG_MAIN_URL || "";
  }

  // 기능: 상세 설명 선택
  function getLongDescription(props) {
    return cleanText(props.CONTENTS_DETAIL || props.VALUE_03 || props.VALUE_04 || props.VALUE_01 || "");
  }

  // 기능: 텍스트 정리
  function cleanText(value) {
    return String(value || "")
      .replace(/\r/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  // 기능: HTML 문자 이스케이프
  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 기능: 좌표 포맷
  function formatCoordinates(coordinates) {
    if (!coordinates) return "";
    return `${Number(coordinates[0]).toFixed(6)}, ${Number(coordinates[1]).toFixed(6)}`;
  }

  // 기능: 오류 표시
  function setPanelError(message) {
    const container = document.getElementById("section2-story-steps");
    if (!container) return;

    container.innerHTML = `
      <article class="story-step active">
        <p class="step-date">Error</p>
        <h2>지도 로딩 오류</h2>
        <p>${message}</p>
      </article>
    `;
  }

  return { init, setError: setPanelError };
})();
