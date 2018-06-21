import legalTemplate from "./index.html"

function initLegalLanding() {
  const legal = document.querySelector(".legal");
  legal.innerHTML = legalTemplate;
}
export default initLegalLanding
