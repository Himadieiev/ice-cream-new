(() => {
<<<<<<< Updated upstream
    const refs = {
      openModalBtn1: document.querySelector('[data-modal-by-now-open1]'),
      closeModalBtn: document.querySelector('[data-modal-by-now-close]'),
      modal: document.querySelector('[data-modal-by-now]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
=======
  const refs = {
    openModalBtn: document.querySelector("[buy-now-modal-open]"),
    closeModalBtn: document.querySelector("[buy-now-modal-close]"),
    modal: document.querySelector("[buy-now-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
>>>>>>> Stashed changes
