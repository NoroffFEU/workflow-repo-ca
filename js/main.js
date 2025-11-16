import { createMenu } from '../js/ui/common/createMenu.js';
import { registerFormListener } from '../js/listeners/auth/registerFormListener.js';
import { loginFormListener } from '../js/listeners/auth/loginFormListener.js';
import { logoutButtonListener } from './listeners/auth/logoutButtonListener.js';
import { displayVenueList } from './listeners/venues/displayVenueList.js';
import { displayVenue } from './listeners/venues/displayVenue.js';

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;
  console.log(path);

  // Use includes so pages work when the project is served from a subfolder
  if (path.includes('/login')) {
    loginFormListener();
  } else if (path.includes('/register')) {
    registerFormListener();
  } else if (path.includes('/venue/')) {
    displayVenue();
  } else {
    // Default to venue list on any other page (including root)
    displayVenueList();
  }
}

initializeApp();
