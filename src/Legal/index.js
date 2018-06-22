import legalTemplate from './index.html';
import refugeTemplate from './refuge.html';
import immigrationTemplate from './immigration.html';


function initLegalLanding() {
  const legal = document.querySelector('.legal');
  legal.innerHTML = legalTemplate;
  const refuge = document.querySelector(".refuge");
  refuge.innerHTML = refugeTemplate;
  const immigration = document.querySelector(".immigration");
  immigration.innerHTML = immigrationTemplate;
}
export default initLegalLanding;
