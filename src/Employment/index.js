import employmentTemplate from './index.html';

function initEmployment() {
  const employment = document.querySelector('.employment');

  employment.innerHTML = employmentTemplate;
}

export default initEmployment;
