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

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError('Cannot call a class as a function');
//   }
// }

// const LocalStorage = function LocalStorage() {
//   _classCallCheck(this, LocalStorage);

//   if (instance) {
//     return instance;
//   }

//   this.lang = Settings.lang.ru;
//   this.instance = this;
//   this.getLanguage = function () {
//     return this.lang;
//   };
//   this.setLanguage = function (langValue) {
//     localStorage.setItem('lang', langValue);
//     this.lang = langValue;
//   };
//   this.switchLanguage = function () {
//     let currentLang;
//     switch (this.getLanguage()) {
//       case Settings.lang.en:
//         currentLang = Settings.lang.ru;
//         break;
//       case Settings.lang.ru:
//       default:
//         currentLang = Settings.lang.en;
//         break;
//     }
//     this.setLanguage(currentLang);
//     return currentLang;
//   };


// };

// export default LocalStorage;


// const LocalStorage;
// (function () {
//   let instance = null;

//   LocalStorage = function LocalStorages() {
//     if (instance) {
//       return instance;
//     }
//     instance = this;
//     this.lang = Settings.lang.en;

//     this.getLanguage = function () {
//       return this.lang;
//     };
//     this.setLanguage = function (langValue) {
//       localStorage.setItem('lang', langValue);
//       this.lang = langValue;
//     };
//     this.switchLanguage = function () {
//       let currentLang;
//       switch (this.getLanguage()) {
//         case Settings.lang.en:
//           currentLang = Settings.lang.ru;
//           break;
//         case Settings.lang.ru:
//         default:
//           currentLang = Settings.lang.en;
//           break;
//       }
//       this.setLanguage(currentLang);
//       return currentLang;
//     };
//     return instance;
//   };
//   // const createInstance = function () {
//   //   return {
//   //     getLanguage,
//   //     setLanguage,
//   //     switchLanguage,
//   //   };
//   // };

//   // return {
//   //   getInstance() {
//   //     instance = instance || createInstance();
//   //     return instance;
//   //   },
//   // };
// }());

// export default LocalStorage;
