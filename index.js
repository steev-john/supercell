const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-link")

hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})
