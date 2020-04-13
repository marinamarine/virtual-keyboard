import App from './src/modules/app.js';

window.onload = () => {
  window.app = new App(document.body);
  window.app.render();
};
