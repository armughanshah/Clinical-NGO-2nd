// Toggle navigation for mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
