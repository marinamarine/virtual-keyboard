import KEYS_ENUM from '../enums/key.enum.js';
import Key from './key.js';
import Settings from '../../settings.js';
import Helpers from '../../helpers.js';
import KeyCode from '../enums/keyCode.enum.js';


class Keyboard {
  constructor() {
    this.keys = [];
    this.lang = Helpers.getLanguage();
    this.domElement = document.createElement('div');
    this.isCapsLock = false;

    this.init();
  }

  changeCapsLockStatus() {
    this.isCapsLock = !this.isCapsLock;
    this.keys.forEach((key) => key.switchUppercase(this.isCapsLock));
  }

  init() {
    Object.values(KeyCode).forEach((code) => {
      const { value, size } = KEYS_ENUM[code];
      this.keys.push(new Key({ code, value, sizeClass: size }));
    });

    this.domElement.classList.add(Settings.className.keyboard);
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add(Settings.className.keys);
    this.keys.forEach((key) => keyboardKeys.insertAdjacentElement('beforeend', key.domElement));
    this.domElement.insertAdjacentElement('beforeend', keyboardKeys);

    document.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.altKey && !event.repeat) {
        this.lang = Helpers.switchLanguage();
        this.keys.forEach((key) => key.setLang(this.lang));
      }
    });

    return this;
  }
}

export default Keyboard;
