(() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-modal-by-now-open1]'),
      openModalBtn2: document.querySelector('[data-modal-by-now-open2]'),
      closeModalBtn: document.querySelector('[data-modal-by-now-close]'),
      modal: document.querySelector('[data-modal-by-now]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();