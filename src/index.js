import initEmployment from './Employment';
import initLanding from './Landing';
import initModal from './Modal/index';
import initHealth from './Health/index';

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
