const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const headerW = document.querySelector(".header__wrapper");
console.log.window;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    headerW.classList.add("open");
  } else {
    headerW.classList.remove("open");
  }
});
