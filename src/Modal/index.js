function initModal() {
  const MODAL_CLASS = 'modal';
  const modal = document.querySelector(`.${MODAL_CLASS}`);
  const openModalButton = document.querySelector(`.${MODAL_CLASS}--open`);
  const closeModalButton = document.querySelector(`.${MODAL_CLASS}--close`);

  const openCloseModal = () => {
    modal.classList.toggle(`${MODAL_CLASS}--active`);
  };

  openModalButton.addEventListener('click', openCloseModal);
  closeModalButton.addEventListener('click', openCloseModal);
} 

export default initModal;