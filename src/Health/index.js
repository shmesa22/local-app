import healthTemplate from './index.html';

function initHealth() {
  const root = document.querySelector('.health');
  root.innerHTML = healthTemplate;
}

export default initHealth;
