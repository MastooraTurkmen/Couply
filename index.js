const menuBtn = document.querySelector(".hide-desktop")
const closeBtn = document.querySelector(".close-icon")
const nav = document.querySelector(".nav")


menuBtn.addEventListener('click', () => {
    nav.classList.toggle("close-nav")
})