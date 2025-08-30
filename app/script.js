// app/scripts.js
export function initScrolling() {
    function scrolling() {
        let scrollpos = window.scrollY || document.documentElement.scrollTop;
        let btn = document.querySelector('#scroll');
        let nav = document.querySelector('.header');
        let icon = document.querySelector('.fa-arrow-up');
        if (scrollpos > 300) {
            btn.classList.add('move');
            nav.classList.add('open');
            icon.classList.add('open');
        } else {
            btn.classList.remove('move');
            nav.classList.remove('open');
            icon.classList.remove('open');
        }
    }

    // window.addEventListener('scroll', scrolling);

    // const hamburger = document.getElementById('hamburger');
    // const nav = document.getElementById('nav');

    // hamburger.addEventListener('click', () => {
    //   nav.classList.toggle('active');
    // });
}
