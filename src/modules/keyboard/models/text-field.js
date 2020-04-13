import Settings from '../../settings.js';

class TextField {
  constructor() {
    this.domElement = document.createElement('textarea');
    this.init();
  }

  init() {
    this.domElement.classList.add(Settings.className.textField);
    this.domElement.cols = Settings.textFieldSize.cols;
    this.domElement.rows = Settings.textFieldSize.rows;
  }

  focusTextField() {
    this.domElement.focus();
    this.domElement.addEventListener('focusout', () => {
      this.domElement.focus();
    });
    return this;
  }


  inputChar(char) {
    this.domElement.setRangeText(
      char,
      this.domElement.selectionStart,
      this.domElement.selectionEnd,
      'end',
    );
  }

  deleteChar() {
    const currentPos = this.domElement.selectionStart - 1;
    if (this.domElement.selectionStart !== this.domElement.selectionEnd) {
      document.getSelection().deleteFromDocument();
      this.domElement.setSelectionRange(currentPos, currentPos);
    } else if (this.domElement.selectionStart !== 0) {
      const temp = this.domElement.value.split('');
      temp[currentPos] = '';
      this.domElement.value = temp.join('');
      this.domElement.setSelectionRange(currentPos, currentPos);
    }
  }
}

export default TextField;
