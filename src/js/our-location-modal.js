(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
    openMapLink: document.querySelector('.location-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  if (refs.openMapLink) {
    refs.openMapLink.addEventListener('click', () => {
      refs.modal.classList.add('is-hidden');
    });
  }

  window.onclick = function (event) {
    if (event.target == refs.modal) {
      if (refs.modal) {
        refs.modal.classList.add('is-hidden');
      }
    }
  };
})();
