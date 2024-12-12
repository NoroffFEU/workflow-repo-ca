import { createMenu } from "../js/ui/common/createMenu.js";
import { registerFormListener } from "../js/listeners/auth/registerFormListener.js";
import { loginFormListener } from "../js/listeners/auth/loginFormListener.js";
import { logoutButtonListener } from "./listeners/auth/logoutButtonListener.js";
import { displayVenueList } from "./listeners/venues/displayVenueList.js";
import { displayVenue } from "./listeners/venues/displayVenue.js";

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;
  console.log(path);

  if (path === "/" || path === "/index.html") {
    displayVenueList();
  } else if (path.startsWith("/login")) {
    loadPage();
  } else if (path.startsWith("/register")) {
    loadPage();
  } else if (path.startsWith("/venue/")) {
    displayVenue();
  }
}

async function loadPage() {
  const pageContent = document.querySelector("main");
  const path = window.location.pathname;

  try {
    let response;

    if (path === "/login") {
      response = await fetch("./login/index.html");
      if (response.ok) {
        const loginHTML = await response.text();
        pageContent.innerHTML = loginHTML;
        loginFormListener();
      }
    } else if (path === "/register") {
      response = await fetch("./register/index.html");
      if (response.ok) {
        const registerHTML = await response.text();
        pageContent.innerHTML = registerHTML;
        registerFormListener();
      }
    } else {
      console.error("Failed to load login page:", response.statusText);
      pageContent.innerHTML = "<p>Error loading login page.</p>";
    }
  } catch (error) {
    console.error("Error fetching page content:", error);
    pageContent.innerHTML = "<p>Unexpected error occurred.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});
