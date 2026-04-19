const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > window.innerHeight * 0.85) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const revealTargets = document.querySelectorAll(
  '.product-feature, .intro__text, .intro__meta, .manifesto__text, .manifesto__pillars, .waitlist__title, .waitlist__sub, .waitlist__form, .collection-header__title'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
);

revealTargets.forEach((el) => io.observe(el));
