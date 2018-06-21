import healthTemplate from './index.html';

function initHealth() {
  const health = document.querySelector('.health');
  health.innerHTML = healthTemplate;
}

export default initHealth;
