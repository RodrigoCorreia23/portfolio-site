const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const backToTopBtn = document.querySelector("[data-back-to-top]");
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    document.body.classList.toggle("nav-open", !isExpanded);
  });

  siteNav.addEventListener("click", event => {
    if (event.target instanceof HTMLElement && event.target.tagName === "A") {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

if (backToTopBtn) {
  const toggleBackToTop = () => {
    const isVisible = window.scrollY > 320;
    backToTopBtn.classList.toggle("is-visible", isVisible);
  };

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
