// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Language toggle (FI / EN)
const langButtons = document.querySelectorAll("[data-lang-btn]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.dataset.langBtn;
    document.documentElement.lang = lang;
  });
});
