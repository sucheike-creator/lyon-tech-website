/* =========================================
   LYON TECH — WEBSITE INTERACTIONS
========================================= */

/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu .nav-link");

// Close the mobile navigation menu.
function closeNavigation() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.remove("open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Open and close the mobile navigation menu.
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // Close the menu when a navigation link is clicked.
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNavigation();

      // Update the active navigation link.
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  // Close the menu when the Escape key is pressed.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });

  // Close the menu when someone clicks outside it.
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeNavigation();
    }
  });
}

/* =========================================
   2. AUTOMATIC FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   3. ABOUT SECTION — LEARN MORE
========================================= */

const aboutToggle = document.getElementById("about-toggle");
const aboutExtra = document.getElementById("about-extra");

if (aboutToggle && aboutExtra) {
  // Start with the additional information hidden.
  aboutExtra.hidden = true;

  aboutToggle.setAttribute("aria-expanded", "false");
  aboutToggle.textContent = "Learn more";

  // Show or hide the additional About information.
  aboutToggle.addEventListener("click", function () {
    const isExpanded = aboutToggle.getAttribute("aria-expanded") === "true";

    // Toggle the additional information.
    aboutExtra.hidden = isExpanded;

    // Update the accessibility state.
    aboutToggle.setAttribute("aria-expanded", String(!isExpanded));

    // Update the button text.
    aboutToggle.textContent = isExpanded ? "Learn more" : "Show less";
  });
}

/* =========================================
   END OF LYON TECH WEBSITE INTERACTIONS
========================================= */
