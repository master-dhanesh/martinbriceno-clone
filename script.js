const navmenu = document.querySelector(".nav-menu");
const navclose = document.querySelector(".nav-close");
const overlay = document.querySelector(".overlay");
navmenu.addEventListener("click", function (event) {
    overlay.style.transform = "translateX(0)";
});

navclose.addEventListener("click", function (event) {
    overlay.style.transform = "translateX(-100%)";
});
