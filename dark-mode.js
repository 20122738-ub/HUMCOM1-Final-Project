(function () {
	"use strict";
	const storageKey = "techwise-theme";
	const toggle = document.getElementById("themeToggle");
	const body = document.body;

	function applyTheme(theme) {
		const isDark = theme === "dark";
		body.classList.toggle("dark-mode", isDark);
		if (toggle) {
			toggle.setAttribute("aria-pressed", String(isDark));
			toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
			toggle.querySelector(".theme-icon").textContent = isDark ? "☀️" : "🌙";
			toggle.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
		}
	}

	let savedTheme = null;
	try { savedTheme = localStorage.getItem(storageKey); } catch (error) {}
	applyTheme(savedTheme === "dark" ? "dark" : "light");

	if (toggle) {
		toggle.addEventListener("click", function () {
			const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
			applyTheme(nextTheme);
			try { localStorage.setItem(storageKey, nextTheme); } catch (error) {}
		});
	}
})();
