const menuBtn = document.querySelector(".open-icon")
const closeBtn = document.querySelector(".close-icon")
const nav = document.querySelector(".nav-bar")


menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle("menu-icon")
})


closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle("menu-icon")
})