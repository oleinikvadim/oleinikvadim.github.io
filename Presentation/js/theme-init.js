(function () {
  var theme;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {}
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
