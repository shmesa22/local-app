import landingTemplate from './index.html';

function Landing() {
  const landing = document.querySelector('.landing');

  landing.innerHTML = landingTemplate;
}

export default Landing;
