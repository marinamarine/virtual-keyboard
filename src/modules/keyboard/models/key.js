class Key {
  constructor(properties = {
    code: 'KeyQ',
    value: { en: 'q', ru: 'й' },
    sizeClass: 'small',
  }) {
    this.code = properties.code;
    this.value = properties.value;
    this.sizeClass = properties.sizeClass;
    this.lang = 'en';
    this.domElement = document.createElement('button');
    this.initDOMElement();
  }

  initDOMElement() {
    this.domElement.classList.add(
      'keyboard__key',
      `keyboard__key_${this.sizeClass}`,
    );
    this.domElement.type = 'button';
    this.addContent('en');
  }

  addContent(lang) {
    this.lang = lang;
    this.domElement.innerHTML = this.value.all ? this.value.all : this.value[this.lang];
  }
}

export default Key;
