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

  const accordionButtons = document.querySelectorAll('.accordion__button');

  function toggleAccordion(el) {
    el.addEventListener('click', function() {
      this.classList.toggle('accordion__panel-active');

      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }

  accordionButtons.forEach(toggleAccordion);
})();
