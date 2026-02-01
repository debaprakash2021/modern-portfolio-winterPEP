// scripts/main.js
// Intersection Observer for on-scroll reveal; respects prefers-reduced-motion
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  if(!reveals.length) return;

  if(prefersReduced){
    reveals.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        // use dataset.delay (ms) if present, otherwise fallback to index-based stagger
        const delay = Number(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('in-view'), delay);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el, i) => {
    // default small stagger if author did not set explicit data-delay
    if(!el.dataset.delay) el.dataset.delay = String(i * 80);
    observer.observe(el);
  });
})();
