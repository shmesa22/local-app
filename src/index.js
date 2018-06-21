import initEmployment from './Employment';
import initLanding from './Landing';
import initHealth from './Health/index';

function initModal() {
  const MODAL_CLASS = 'modal';
  let modal = null;
  const openModalButton = document.querySelector(`.${MODAL_CLASS}--open`);
  const closeModalButton = document.querySelector(`.${MODAL_CLASS}--close`);

  const openCloseModal = ({ target }) => {
    const modalId = target.getAttribute('data-modal');
    modal = document.getElementById(modalId);
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
