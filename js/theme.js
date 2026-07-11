/* ==========================================================
   Cybersecurity Portfolio
   theme.js
   ========================================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// ===========================
// Load Saved Theme
// ===========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
} else {
    if (themeToggle) {
        themeToggle.textContent = "🌙";
    }
}

// ===========================
// Toggle Theme
// ===========================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";

        }

    });

}

console.log("Theme manager loaded.");
