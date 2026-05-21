(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-ingredients]'),
    form: document.querySelector('.products-modal__form'),
  };

  for (var i = 0; i < refs.openModalBtn.length; i++) {
    refs.openModalBtn[i].addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  if (refs.form) {
    refs.form.addEventListener('submit', event => {
      event.preventDefault();
      refs.modal.classList.add('is-hidden');
      refs.form.reset();
    });
  }
})();
