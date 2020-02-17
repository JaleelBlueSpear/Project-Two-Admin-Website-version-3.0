const hamburgerMenu = document.querySelector(".header-title-hamburger-menu");
const sideBarLinks = document.querySelector(".nav");
let menuOpen = false;

hamburgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    menuOpen ? sideBarLinks.style.display = "none" : sideBarLinks.style.display = "flex";
    menuOpen = !menuOpen;
})