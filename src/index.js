import initEmployment from './Employment';
import initLanding from './Landing';
import initHealth from './Health/index';

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

(function App() {
  initEmployment();
  initLanding();
  initHealth();
  initModal();
})();
