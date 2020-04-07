import DomElement from './core/dom/domElement.view.js';
import Keyboard from './keyboard/models/keyboard.js';

export default class App {
  constructor(parent) {
    this.parent = parent;
    this.keyboard = new Keyboard();
  }

  render() {
    this.parent.insertAdjacentElement(
      'beforeend',
      new DomElement({
        class: ['container'],
        content: [
          this.keyboard.textarea,
          new DomElement({
            class: ['keyboard'],
            content: [
              new DomElement({
                class: ['keyboard__keys'],
                content: this.keyboard.keys.map((key) => key.domElement),
              }).render(),
            ],
          }).render(),
          new DomElement({
            element: 'p',
            class: ['description'],
            content: 'Shift + Alt to change language',
          }).render(),
        ],
      }).render(),
    );
    this.keyboard.textareaFocus();
  }
}
