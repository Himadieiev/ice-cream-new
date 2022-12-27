(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-ingredients]'),
  };
  console.log(refs.openModalBtn);
  for (var i = 0; i < refs.openModalBtn.length; i++) {
    refs.openModalBtn[i].addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();