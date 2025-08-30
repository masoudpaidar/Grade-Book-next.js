export function headerScrolling() {
  function scrolling() {
    let scrollpos = window.scrollY || document.documentElement.scrollTop;
    let btn = document.querySelector('#scroll');
    let nav = document.querySelector('.header');
    let icon = document.querySelector('.fa-arrow-up');

    if (scrollpos > 100) {
      btn?.classList.add('move');
      nav?.classList.add('open');
      icon?.classList.add('open');
    } else {
      btn?.classList.remove('move');
      nav?.classList.remove('open');
      icon?.classList.remove('open');
    }
  }

  window.addEventListener('scroll', scrolling);

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const toggleMenu = () => nav?.classList.toggle('active');

  hamburger?.addEventListener('click', toggleMenu);

  return () => {
    window.removeEventListener('scroll', scrolling);
    hamburger?.removeEventListener('click', toggleMenu);
  }
}
