import { getUsername } from '../../utils/storage.js';
import { isActivePath } from '../../utils/userInterface.js';
import { CONFIG } from '../../config.js';

export function createMenu() {
  const container = document.querySelector('#menu-container');
  const currentPath = window.location.pathname;
  const username = getUsername();

  // Determine project base: prefer explicit config, otherwise derive from loaded script or pathname
  let base = CONFIG.basePath || '';
  if (!base) {
    try {
      const script = Array.from(document.scripts).find(
        (s) => s.src && s.src.includes('/js/main.js'),
      );
      if (script && script.src) {
        const url = new URL(script.src, window.location.origin);
        const scriptPath = url.pathname.replace(/\/js\/main\.js$/, '');
        if (scriptPath && scriptPath !== '/') base = scriptPath;
      }
    } catch {
      // ignore and fallback
    }
  }

  if (!base) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    base =
      pathParts.length && !pathParts[0].includes('.') ? `/${pathParts[0]}` : '';
  }

  const resolveHref = (href) => {
    // Make root links point explicitly to index.html so clicks always land on the project's index page
    if (href === '/') return base ? `${base}/index.html` : '/index.html';
    const clean = href.replace(/^\/+|\/+$/g, '');
    // If href already includes index.html, keep it; otherwise append index.html
    const target = clean.endsWith('index.html') ? clean : `${clean}/index.html`;
    return `${base}/${target}`.replace(/\/+/g, '/');
  };

  const createNavLink = (href, text) => {
    const isActive = isActivePath(href, currentPath) && text !== 'Logo';
    const activeClass = isActive
      ? 'text-blue-300'
      : 'text-white hover:text-blue-200';
    const resolved = resolveHref(href);
    return `<a href="${resolved}" class="${activeClass} py-2 px-3 font-medium transition-colors duration-200 ${
      isActive ? 'font-bold' : ''
    }">${text}</a>`;
  };

  // Login should take user to the project's index page
  let authLink = createNavLink('/', 'Login');

  if (username) {
    authLink = `
      <span class="text-white mr-4">Hi ${username}</span>
      <button id="logoutButton" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
        Logout
      </button>
    `;
  }

  container.innerHTML = `
    <nav class="flex justify-between items-center p-4 bg-green-800">
      <div class="flex items-center space-x-4">
        ${createNavLink('/', 'Logo')}

      </div>
      <div class="flex items-center space-x-4">
      ${createNavLink('/', 'Home')}
        ${authLink}
  ${username ? '' : createNavLink('/register', 'Register')}
      </div>
    </nav>
  `;
}
