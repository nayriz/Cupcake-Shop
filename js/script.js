const navbarNav = document.querySelector(".navbar-nav");
// jika Menu-cup di Klik
document.querySelector("#menu-cup").onclick = () => {
  navbarNav.classList.toggle("active");
};

// unutk menghilangkan nav
const MenuCup = document.querySelector("#menu-cup");

document.addEventListener("click", function (e) {
  if (!MenuCup.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
