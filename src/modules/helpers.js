import Settings from './settings.js';
import KeyCode from './keyboard/enums/keyCode.enum.js';

class Helpers {
  static getLanguage() {
    const lang = localStorage.getItem('lang') || Settings.lang.en;
    return lang;
  }

  static setLanguage(langValue) {
    localStorage.setItem('lang', langValue);
  }

  static switchLanguage() {
    let currentLang;
    switch (this.getLanguage()) {
      case Settings.lang.en:
        currentLang = Settings.lang.ru;
        break;
      case Settings.lang.ru:
      default:
        currentLang = Settings.lang.en;
        break;
    }
    this.setLanguage(currentLang);
    return currentLang;
  }

  static isSpecialKey(code) {
    switch (code) {
      case KeyCode.ShiftLeft:
      case KeyCode.ShiftRight:
      case KeyCode.AltLeft:
      case KeyCode.AltRight:
      case KeyCode.ControlLeft:
      case KeyCode.ControlRight:
      case KeyCode.CapsLock:
      case KeyCode.MetaLeft:
        return true;
      default:
        return false;
    }
  }
}

export default Helpers;
