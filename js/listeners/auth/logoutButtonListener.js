import { clearStorage } from '../../utils/storage.js';

export function logoutButtonListener() {
  const logoutButton = document.querySelector('#logoutButton');

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      clearStorage();
      // Resolve redirect so it works when app is served from a subfolder
      const parts = window.location.pathname.split('/').filter(Boolean);
      const base =
        parts.length && !parts[0].includes('.') ? `/${parts[0]}` : '';
      const target = base ? `${base}/login/index.html` : '/login/index.html';
      window.location.href = target.replace(/\/+/g, '/');
    });
  }
}
