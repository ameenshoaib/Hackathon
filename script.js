const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("is-active");
  body.classList.toggle("is-active");
};

menu.addEventListener("click", mobileMenu);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.5,
});

gsap.from(".features-head", {
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.5,
});
