const Settings = {
  descriptionText: 'Shift + Alt to change language',
  key: {
    code: 'KeyQ',
    value: { en: 'q', ru: 'й' },
    sizeClass: 'keyboard__key_small',
  },
  textFieldSize: {
    cols: 50,
    rows: 10,
  },
  lang: {
    ru: 'ru',
    en: 'en',
  },
  domElement: {
    element: 'div',
    class: [],
    content: '',
    type: null,
  },
  className: {
    app: 'container',
    textField: 'textarea',
    description: 'description',
    keyboard: 'keyboard',
    keys: 'keyboard__keys',
    key: {
      default: 'keyboard__key',
      active: 'pressed',
      keySize: {
        small: 'keyboard__key_small',
        wide: 'keyboard__key_wide',
        extraWide: 'keyboard__key_extra-wide',
      },
    },
  },

};
export default Settings;
