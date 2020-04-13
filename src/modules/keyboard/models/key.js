import Settings from '../../settings.js';
import Helpers from '../../helpers.js';
import KeyCode from '../enums/keyCode.enum.js';

class Key {
  constructor(properties = Settings.key) {
    this.code = properties.code;
    this.value = properties.value;
    this.sizeClass = properties.sizeClass;
    this.lang = Helpers.getLanguage();
    this.isShift = false;
    this.isCaps = false;
    this.domElement = document.createElement('button');
    this.initDOMElement();
    this.addListeners();
  }

  initDOMElement() {
    this.domElement.classList.add(
      Settings.className.key.default,
      this.sizeClass,
    );
    this.setLang(this.lang);
  }

  setLang(lang) {
    this.lang = lang;
    this.changeContent();
  }

  switchUppercase(isUpper) {
    this.isCaps = isUpper;
    this.changeContent();
  }

  changeContent() {
    this.domElement.innerHTML = this.getCurrentChar();
  }

  getCurrentChar() {
    let currentValue;
    if (this.value.allLangsValue) {
      currentValue = this.value.allLangsValue;
    } else if (this.isCaps) {
      currentValue = this.value[this.lang].toUpperCase();
    } else {
      currentValue = this.value[this.lang];
    }
    return currentValue;
  }

  keyPushTrigger() {
    window.app.domElement.dispatchEvent(
      new CustomEvent('keypush', {
        isTrusted: true,
        detail: {
          keyCode: this.code,
          keyValue: this.getCurrentChar(),
        },
      }),
    );
  }

  addListeners() {
    document.addEventListener('keydown', (event) => {
      if (event.code === this.code) {
        event.preventDefault();
        if (event.code === KeyCode.CapsLock) {
          this.domElement.classList.toggle(Settings.className.key.active);
        } else {
          this.domElement.classList.add(Settings.className.key.active);
        }
        this.keyPushTrigger();
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.code === this.code) {
        event.preventDefault();
        if (event.code !== KeyCode.CapsLock) {
          this.domElement.classList.remove(Settings.className.key.active);
        }
      }
    });


    this.domElement.addEventListener('mousedown', () => {
      if (this.code === KeyCode.CapsLock) {
        this.domElement.classList.toggle(Settings.className.key.active);
      } else {
        this.domElement.classList.add(Settings.className.key.active);
      }
      this.keyPushTrigger();
    });

    this.domElement.addEventListener('mouseup', () => {
      if (this.code !== KeyCode.CapsLock) {
        this.domElement.classList.remove(Settings.className.key.active);
      }
    });
  }
}

export default Key;
