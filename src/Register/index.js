import registerTemplate from './index.html';

function initRegister() {
  const register = document.querySelector('.register');

  register.innerHTML = registerTemplate;
}

export default initRegister;
