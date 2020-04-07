class Key {
  constructor(properties = {
    code: 'KeyQ',
    value: { en: 'q', ru: 'й' },
    sizeClass: 'small',
  }) {
    this.code = properties.code;
    this.value = properties.value;
    this.sizeClass = properties.sizeClass;
    this.lang = localStorage.getItem('lang') || 'en';
    this.isShift = false;
    this.domElement = document.createElement('button');
    this.initDOMElement();
    this.addListeners();
  }

  initDOMElement() {
    this.domElement.classList.add(
      'keyboard__key',
      `keyboard__key_${this.sizeClass}`,
    );
    this.domElement.type = 'button';
    this.changeContent(this.lang);
  }

  changeContent(lang) {
    this.lang = lang;
    this.domElement.innerHTML = this.value.all
      ? this.value.all
      : this.value[this.lang];
  }

  addListeners() {
    document.addEventListener('keydown', (event) => {
      if (event.code === this.code) {
        this.domElement.classList.add('pressed');
      }
      switch (event.key) {
        case 'Shift':
          this.isShift = true;

          break;
        default:
          break;
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === this.code) {
        this.domElement.classList.remove('pressed');
      }
      if (event.key === 'Shift') {
        this.isShift = false;
      }
    });
    this.domElement.addEventListener('click', () => {

    });
  }
}

export default Key;
