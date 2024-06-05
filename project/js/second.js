const menuBtn = document.getElementById('menu-btn');
const navlinks = document.getElementById('navbar-links');
const menuBtnIcon = menuBtn.querySelector('i');

/*menuBtn.addEventListener('click', (e) => {
    navlinks.classList.toggle('open');

    const isopen = navlinks.classList.contains('open');
    menuBtnIcon.setAttribute('class',isopen?'ri-close-line': 'ri-menu-line');
});

navlinks.addEventListener('click', (e) => {
    navlinks.classList.remove('open');
    menuBtn.setAttribute('class', 'fa-solid fa-bars');
});*/

const scrollrevealoption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000
};

ScrollReveal().reveal('.media-block', {
    ...scrollrevealoption,
    origin: 'left',
});
ScrollReveal().reveal('.title-block h2', { 
    ...scrollrevealoption,
    delay: 1000,
});
ScrollReveal().reveal('.title-block p', { 
    ...scrollrevealoption,
    delay: 1500,
});
ScrollReveal().reveal('.cta-block', {
    ...scrollrevealoption,
    delay:1000,
});
ScrollReveal().reveal('.banner .heading', {
    ...scrollrevealoption,
    delay:900,
});
ScrollReveal().reveal('.row .image', {
    ...scrollrevealoption,
    delay:1500,
});
ScrollReveal().reveal('.row .content', {
    ...scrollrevealoption,
    delay:1500,
});
ScrollReveal().reveal('.header_content p', {
    ...scrollrevealoption,
    delay:1500,
});
ScrollReveal().reveal(' .box-container .result', {
    ...scrollrevealoption,
    delay:1000,
});

ScrollReveal().reveal('.service_card', {
  duration: 1000,
  interval:500
});

ScrollReveal().reveal('.destination_card', {
    ...scrollrevealoption,
    interval:500,
});
ScrollReveal().reveal('.trip_image img', {
    ...scrollrevealoption,
    origin: 'right',
});
ScrollReveal().reveal('.trip_content .section_subheader', {
    ...scrollrevealoption,
    delay: 500,
});
ScrollReveal().reveal('.trip_content .section_header', {
    ...scrollrevealoption,
    delay:1000,
});
ScrollReveal().reveal('.trip_list li', {
    ...scrollrevealoption,
    delay:1500,
    interval: 500
});

ScrollReveal().reveal('.client_content .section_subheader', {
    ...scrollrevealoption,
});
ScrollReveal().reveal('.client_content .section_header', {
    ...scrollrevealoption,
    delay:1000,
});

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
});