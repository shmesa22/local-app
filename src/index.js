import initModal from './Modal/index';

import healthTemplate from './Salud/index.html';
import initHealth from './Salud/index';

const root = document.querySelector('.root');
root.innerHTML = healthTemplate;

initModal();

initHealth();
