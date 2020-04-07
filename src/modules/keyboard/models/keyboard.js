
import KEYS_ENUM from '../enums/key.enum.js';
import Key from './key.js';

class Keyboard {
  constructor() {
    this.keys = [];
    this.lang = localStorage.getItem('lang') || 'en';

    this.init();
  }

  init() {
    Object.entries(KEYS_ENUM).forEach(([code, property]) => {
      const { value, size } = property;
      this.keys.push(new Key({ code, value, sizeClass: size }));
    });
    return this;
  }
}

export default Keyboard;
