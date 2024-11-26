// Navbar Toggle for Mobile View
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// ScrollReveal Animations
ScrollReveal().reveal('.course, .instructor, .testimonial', {
  origin: 'bottom',
  distance: '50px',
  duration: 1500,
  delay: 200
});

// Swiper for Testimonials
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
