
import KEYS_ENUM from '../enums/key.enum.js';
import Key from './key.js';

class Keyboard {
  constructor() {
    this.keys = [];
    this.lang = localStorage.getItem('lang') || 'en';
    this.textarea = document.createElement('textarea');
    this.init();
  }

  init() {
    Object.entries(KEYS_ENUM).forEach(([code, property]) => {
      const { value, size } = property;
      this.keys.push(new Key({ code, value, sizeClass: size }));
    });
    this.textarea.classList.add('textarea');
    this.textarea.cols = 50;
    this.textarea.rows = 5;

    document.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.altKey && !event.repeat) {
        this.lang = this.lang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', this.lang);
        this.keys.forEach((key) => key.changeContent(this.lang));
      }
    });
    return this;
  }

  textareaFocus() {
    this.textarea.focus();
    this.textarea.addEventListener('blur', () => {
      this.textarea.focus();
    });
    return this;
  }
}

export default Keyboard;
