function isActivePath(currentPath, href) {
    if (currentPath === href) return true;
    if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
    if (currentPath.includes(href)) return true;
    return false;
  }

  function getUserName() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user ? user.name : null
  }
  
  