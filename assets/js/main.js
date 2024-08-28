/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu class navMenu.classList.remove('show-menu')
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/* ==== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrolly >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper(".popular__content", {
  // Optional parameters
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
});
/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll(".choose__faq-item");
// 1. Select each item
faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".choose__faq-header");
  // 2. Select each button click
  faqHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".faq-open");
    toggleItem(item);
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});
// 3. Create function to display the content
const toggleItem = (item) => {
  // 3.1. Select each faq content
  const faqContent = item.querySelector(".choose__faq-content");
  if (item.classList.contains("faq-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faq-open");
  } else {
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faq-open");
  }
};
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollup = document.getElementById("scroll-up");
  // Get the vertical scroll position
  // const scrollY = window.scrollY;
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;  
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
    if (sectionsClass) { // Check if sectionsClass is not null
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link"); 
      }
    }
  });
};
window.addEventListener('scroll', scrollActive);
/*=============== DARK LIGHT THEME ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/
