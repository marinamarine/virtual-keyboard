import Keyboard from './keyboard/models/keyboard.js';
import TextField from './keyboard/models/text-field.js';
import Settings from './settings.js';
import KeyCode from './keyboard/enums/keyCode.enum.js';
import Helpers from './helpers.js';


class App {
  constructor(parent) {
    this.parent = parent;
    this.textField = new TextField();
    this.keyboard = new Keyboard();
    this.domElement = document.createElement('div');
    this.description = document.createElement('p');
  }

  render() {
    this.description.classList.add(Settings.className.description);
    this.description.textContent = Settings.descriptionText;

    this.domElement.classList.add('container');

    this.domElement.insertAdjacentElement('beforeend', this.textField.domElement);
    this.domElement.insertAdjacentElement('beforeend', this.keyboard.domElement);
    this.domElement.insertAdjacentElement('beforeend', this.description);

    this.parent.insertAdjacentElement('beforeend', this.domElement);

    this.textField.focusTextField();

    this.addListeners();
  }

  addListeners() {
    this.domElement.addEventListener('keypush', (event) => {
      if (!Helpers.isSpecialKey(event.detail.keyCode)) {
        switch (event.detail.keyCode) {
          case KeyCode.Backspace:
            this.textField.deleteChar(event.detail.keyValue);
            break;
          case KeyCode.Enter:
            this.textField.inputChar('\n');
            break;
          case KeyCode.Tab:
            this.textField.inputChar('\t');
            break;
          default:
            this.textField.inputChar(event.detail.keyValue);
            break;
        }
      } else if (event.detail.keyCode === KeyCode.CapsLock) {
        this.keyboard.changeCapsLockStatus();
      }
    });
  }
}

export default App;
