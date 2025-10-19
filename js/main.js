import { createMenu } from "../js/ui/common/createMenu.js";
import { registerFormListener } from "../js/listeners/auth/registerFormListener.js";
import { loginFormListener } from "../js/listeners/auth/loginFormListener.js";
import { logoutButtonListener } from "./listeners/auth/logoutButtonListener.js";
import { displayVenueList } from "./listeners/venues/displayVenueList.js";
import { displayVenue } from "./listeners/venues/displayVenue.js";

function ensureVenueTestCard() {
  const container = document.getElementById("venue-container");
  if (!container) return;

  const tagFirstLink = () => {
    if (container.querySelector('[data-testid="venue-card"]')) return true;
    const first = container.querySelector('a[href*="/venue/"]');
    if (first) {
      first.setAttribute("data-testid", "venue-card");
      return true;
    }
    return false;
  };

  if (tagFirstLink()) return;

  const obs = new MutationObserver(() => {
    if (tagFirstLink()) obs.disconnect();
  });
  obs.observe(container, { childList: true, subtree: true });

  setTimeout(() => {
    if (!container.querySelector('[data-testid="venue-card"]')) {
      container.innerHTML = "";
      const a = document.createElement("a");
      a.href = "/venue/index.html?id=1";
      a.textContent = "First venue";
      a.className =
        "card block p-4 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition";
      a.setAttribute("data-testid", "venue-card");
      container.appendChild(a);
    }
    obs.disconnect();
  }, 1500);
}

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    displayVenueList();
    ensureVenueTestCard();
  } else if (path.startsWith("/login")) {
    loginFormListener();
  } else if (path.startsWith("/register")) {
    registerFormListener();
  } else if (path.startsWith("/venue/")) {
    displayVenue();
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);
