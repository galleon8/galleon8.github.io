(function () {
  var storageKey = "g8-blog-theme";
  var themes = ["default", "dark-blue", "light-paper-green", "light-paper-purple"];
  var themeNames = {
    "default": "Dark & Yellow",
    "dark-blue": "Dark & Blue",
    "light-paper-green": "Light & Green",
    "light-paper-purple": "Light & Purple"
  };

  function normalizeTheme(theme) {
    return themes.indexOf(theme) === -1 ? "default" : theme;
  }

  function nextTheme(theme) {
    var currentIndex = themes.indexOf(normalizeTheme(theme));
    return themes[(currentIndex + 1) % themes.length];
  }

  function currentTheme() {
    return normalizeTheme(document.documentElement.getAttribute("data-theme") || "default");
  }

  function savedTheme() {
    try {
      return normalizeTheme(window.localStorage.getItem(storageKey));
    } catch (error) {
      return "default";
    }
  }

  function persistTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Ignore storage failures; the picker still works for the current page view.
    }
  }

  function applyTheme(theme, persist) {
    theme = normalizeTheme(theme);
    var upcomingTheme = nextTheme(theme);
    var currentName = themeNames[theme];
    var nextName = themeNames[upcomingTheme];

    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    if (persist) {
      persistTheme(theme);
    }

    document.querySelectorAll("[data-theme-picker]").forEach(function (button) {
      button.dataset.theme = theme;
      button.setAttribute("aria-label", "Theme: " + currentName + ". Click to switch to " + nextName + ".");
      button.setAttribute("title", currentName);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(savedTheme(), false);

    document.querySelectorAll("[data-theme-picker]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyTheme(nextTheme(currentTheme()), true);
      });
    });
  });
})();
