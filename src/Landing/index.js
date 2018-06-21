import landingTemplate from './index.html';

function initLanding() {
  const landing = document.querySelector('.landing');

  landing.innerHTML = landingTemplate;
}

export default initLanding;
