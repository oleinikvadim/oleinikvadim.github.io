const SCROLL_DURATION = 800;
const HEADER_DOWN_OFFSET = 70;
const SPY_OFFSET = 10;
const THEME_STORAGE_KEY = "theme";

const header = document.querySelector(".JS-header");
const hamburger = document.querySelector(".JS-hamburger");
const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector("#header-navbar");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const themeToggle = document.querySelector(".JS-theme-toggle");
const systemLightTheme = matchMedia("(prefers-color-scheme: light)");

let clickedLink = null;
let scrollAnimationId = null;

document.addEventListener("DOMContentLoaded", function () {
  themeSwitch();
  navMenuToggle();
  navLinksClick();
  scrollSpy();
  headerZeroY();
  parallaxJs();
  aos();
});

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {}
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
}

function themeSwitch() {
  setTheme(document.documentElement.getAttribute("data-theme") || "dark");

  themeToggle.addEventListener("click", function () {
    const theme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    setTheme(theme);
    saveTheme(theme);
  });

  systemLightTheme.addEventListener("change", function (event) {
    if (!getSavedTheme()) {
      setTheme(event.matches ? "light" : "dark");
    }
  });
}

function getHeaderHeight() {
  return header.offsetHeight;
}

function setActiveLink(link) {
  navLinks.forEach(function (item) {
    item.classList.toggle("active", item === link);
  });
}

function setMenuOpen(isOpen) {
  navCollapse.classList.toggle("show", isOpen);
  hamburger.classList.toggle("is-active", isOpen);
  navToggler.setAttribute("aria-expanded", String(isOpen));
}

function navMenuToggle() {
  navToggler.addEventListener("click", function () {
    setMenuOpen(!navCollapse.classList.contains("show"));
  });
}

function navLinksClick() {
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      setMenuOpen(false);

      const target = this.hash && document.querySelector(this.hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      clickedLink = this;
      setActiveLink(this);

      const top = target.getBoundingClientRect().top + window.scrollY;
      scrollToY(top - getHeaderHeight(), function () {
        clickedLink = null;
      });
    });
  });
}

function scrollToY(targetY, onDone) {
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const startY = window.scrollY;
  const startTime = performance.now();

  cancelAnimationFrame(scrollAnimationId);

  function step(now) {
    const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);
    // easeInOutQuad
    const eased =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startY + (endY - startY) * eased);

    if (progress < 1) {
      scrollAnimationId = requestAnimationFrame(step);
    } else {
      onDone();
    }
  }

  scrollAnimationId = requestAnimationFrame(step);
}

function scrollSpy() {
  const items = Array.from(navLinks)
    .map(function (link) {
      return {
        link: link,
        section: link.hash && document.querySelector(link.hash),
      };
    })
    .filter(function (item) {
      return item.section;
    });

  function update() {
    if (clickedLink) {
      return;
    }

    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;
    const line = getHeaderHeight() + SPY_OFFSET;
    let active = items[0];

    items.forEach(function (item) {
      if (isBottom || item.section.getBoundingClientRect().top <= line) {
        active = item;
      }
    });

    setActiveLink(active.link);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function headerZeroY() {
  function update() {
    header.classList.toggle("--down", window.scrollY >= HEADER_DOWN_OFFSET);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function parallaxJs() {
  document
    .querySelectorAll("[data-parent-parallax]")
    .forEach(function (element) {
      new Parallax(element);
    });
}

function aos() {
  AOS.init({
    once: true,
  });
}
