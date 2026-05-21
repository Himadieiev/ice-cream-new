(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.menu-link');
  const buyNowButtons = document.querySelectorAll(
    '[data-modal-by-now-open1], [data-modal-by-now-open2], [data-modal-by-now-open3]'
  );

  if (!menuButton || !menu) return;

  function closeMenu() {
    menuButton.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  }

  function openMenu() {
    menuButton.classList.add('is-open');
    menu.classList.add('is-open');
    body.classList.add('no-scroll');
  }

  menuButton.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeMenu();
    });
  });
})();
