// Toggle class active on click
const nav = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};

// Close the menu when clicking outside
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
});
