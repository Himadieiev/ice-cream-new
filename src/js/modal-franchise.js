(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts__modal-open-fr]'),
    closeModalBtn: document.querySelector('[data-contacts__modal-close-fr]'),
    modal: document.querySelector('[data-contacts__modal-fr]'),
    form: document.querySelector('.modal__form'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

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
