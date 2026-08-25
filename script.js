const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// === MOBILE HEADER HEIGHT V3 ===

(() => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const updateMobileHeaderHeight = () => {
    const isMobile = window.matchMedia(
      "(max-width: 600px)"
    ).matches;

    const height = isMobile
      ? Math.ceil(header.getBoundingClientRect().height)
      : 0;

    document.documentElement.style.setProperty(
      "--mobile-header-height",
      `${height}px`
    );
  };

  updateMobileHeaderHeight();

  window.addEventListener(
    "load",
    updateMobileHeaderHeight
  );

  window.addEventListener(
    "resize",
    updateMobileHeaderHeight
  );

  if ("ResizeObserver" in window) {
    const headerObserver = new ResizeObserver(
      updateMobileHeaderHeight
    );

    headerObserver.observe(header);
  }
})();
