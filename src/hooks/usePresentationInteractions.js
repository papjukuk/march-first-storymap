import { useEffect } from 'react';

export function usePresentationInteractions() {
  useEffect(() => {
    const getSections = () => [...document.querySelectorAll('section[data-section]')];
    const getDots = () => [...document.querySelectorAll('.dot')];

    const updateDots = () => {
      const mid = window.innerHeight / 2;
      getSections().forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom >= mid) {
          const sectionNumber = sec.dataset.section;
          getDots().forEach((dot) => dot.classList.remove('active'));
          document.querySelector(`.dot[data-section="${sectionNumber}"]`)?.classList.add('active');
        }
      });
    };

    const scrollToSection = (sectionNumber) => {
      document.querySelector(`section[data-section="${sectionNumber}"]`)?.scrollIntoView({ behavior: 'smooth' });
    };

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      const bar = document.getElementById('progress-bar');
      if (bar) bar.style.width = `${progress}%`;
      updateDots();
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const handleTimelineClick = (event) => {
      const card = event.target.closest('.tl-card');
      if (!card) return;

      const isOpen = card.classList.contains('open');
      const desc = card.querySelector('.tl-desc');
      const icon = card.querySelector('.tl-toggle-icon');

      card.classList.toggle('open', !isOpen);
      desc?.classList.toggle('visible', !isOpen);
      if (icon) icon.textContent = isOpen ? '+' : '-';
    };

    window.scrollToSection = scrollToSection;
    window.addEventListener('scroll', updateProgress, { passive: true });
    document.addEventListener('click', handleTimelineClick);

    updateProgress();

    return () => {
      delete window.scrollToSection;
      window.removeEventListener('scroll', updateProgress);
      document.removeEventListener('click', handleTimelineClick);
      revealObserver.disconnect();
    };
  }, []);
}
