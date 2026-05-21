(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-by-now-open1]'),
    openModalBtn2: document.querySelector('[data-modal-by-now-open2]'),
    openModalBtn3: document.querySelector('[data-modal-by-now-open3]'),
    closeModalBtn: document.querySelector('[data-modal-by-now-close]'),
    modal: document.querySelector('[data-modal-by-now]'),
    form: document.querySelector('.modal-form form'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
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
