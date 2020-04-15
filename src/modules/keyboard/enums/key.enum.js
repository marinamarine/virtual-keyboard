import Settings from '../../settings.js';

const KEYS_ENUM = {
  Backquote: {
    value: { en: '`', ru: 'ё' },
    size: Settings.className.key.keySize.small,
  },
  Digit1: {
    value: { allLangsValue: '1' },
    size: Settings.className.key.keySize.small,
  },
  Digit2: {
    value: { allLangsValue: '2' },
    size: Settings.className.key.keySize.small,
  },
  Digit3: {
    value: { allLangsValue: '3' },
    size: Settings.className.key.keySize.small,
  },
  Digit4: {
    value: { allLangsValue: '4' },
    size: Settings.className.key.keySize.small,
  },
  Digit5: {
    value: { allLangsValue: '5' },
    size: Settings.className.key.keySize.small,
  },
  Digit6: {
    value: { allLangsValue: '6' },
    size: Settings.className.key.keySize.small,
  },
  Digit7: {
    value: { allLangsValue: '7' },
    size: Settings.className.key.keySize.small,
  },
  Digit8: {
    value: { allLangsValue: '8' },
    size: Settings.className.key.keySize.small,
  },
  Digit9: {
    value: { allLangsValue: '9' },
    size: Settings.className.key.keySize.small,
  },
  Digit0: {
    value: { allLangsValue: '0' },
    size: Settings.className.key.keySize.small,
  },
  Minus: {
    value: { allLangsValue: '-' },
    size: Settings.className.key.keySize.small,
  },
  Equal: {
    value: { allLangsValue: '=' },
    size: Settings.className.key.keySize.small,
  },
  Backspace: {
    value: { allLangsValue: 'Backspace' },
    size: Settings.className.key.keySize.wide,
  },
  Tab: {
    value: { allLangsValue: 'Tab' },
    size: Settings.className.key.keySize.wide,
  },
  KeyQ: {
    value: { en: 'q', ru: 'й' },
    size: Settings.className.key.keySize.small,
  },
  KeyW: {
    value: { en: 'w', ru: 'ц' },
    size: Settings.className.key.keySize.small,
  },
  KeyE: {
    value: { en: 'e', ru: 'у' },
    size: Settings.className.key.keySize.small,
  },
  KeyR: {
    value: { en: 'r', ru: 'к' },
    size: Settings.className.key.keySize.small,
  },
  KeyT: {
    value: { en: 't', ru: 'е' },
    size: Settings.className.key.keySize.small,
  },
  KeyY: {
    value: { en: 'y', ru: 'н' },
    size: Settings.className.key.keySize.small,
  },
  KeyU: {
    value: { en: 'u', ru: 'г' },
    size: Settings.className.key.keySize.small,
  },
  KeyI: {
    value: { en: 'i', ru: 'ш' },
    size: Settings.className.key.keySize.small,
  },
  KeyO: {
    value: { en: 'o', ru: 'щ' },
    size: Settings.className.key.keySize.small,
  },
  KeyP: {
    value: { en: 'p', ru: 'з' },
    size: Settings.className.key.keySize.small,
  },
  BracketLeft: {
    value: { en: '[', ru: 'х' },
    size: Settings.className.key.keySize.small,
  },
  BracketRight: {
    value: { en: ']', ru: 'ъ' },
    size: Settings.className.key.keySize.small,
  },
  Backslash: {
    value: { allLangsValue: '\\' },
    size: Settings.className.key.keySize.small,
  },
  CapsLock: {
    value: { allLangsValue: 'CapsLock' },
    size: Settings.className.key.keySize.wide,
  },
  KeyA: {
    value: { en: 'a', ru: 'ф' },
    size: Settings.className.key.keySize.small,
  },
  KeyS: {
    value: { en: 's', ru: 'ы' },
    size: Settings.className.key.keySize.small,
  },
  KeyD: {
    value: { en: 'd', ru: 'в' },
    size: Settings.className.key.keySize.small,
  },
  KeyF: {
    value: { en: 'f', ru: 'а' },
    size: Settings.className.key.keySize.small,
  },
  KeyG: {
    value: { en: 'g', ru: 'п' },
    size: Settings.className.key.keySize.small,
  },
  KeyH: {
    value: { en: 'h', ru: 'р' },
    size: Settings.className.key.keySize.small,
  },
  KeyJ: {
    value: { en: 'j', ru: 'о' },
    size: Settings.className.key.keySize.small,
  },
  KeyK: {
    value: { en: 'k', ru: 'л' },
    size: Settings.className.key.keySize.small,
  },
  KeyL: {
    value: { en: 'l', ru: 'д' },
    size: Settings.className.key.keySize.small,
  },
  Semicolon: {
    value: { en: ';', ru: 'ж' },
    size: Settings.className.key.keySize.small,
  },
  Quote: {
    value: { en: '\'', ru: 'э' },
    size: Settings.className.key.keySize.small,
  },
  Enter: {
    value: { allLangsValue: 'Enter' },
    size: Settings.className.key.keySize.wide,
  },
  ShiftLeft: {
    value: { allLangsValue: 'Shift' },
    size: Settings.className.key.keySize.wide,
  },
  KeyZ: {
    value: { en: 'z', ru: 'я' },
    size: Settings.className.key.keySize.small,
  },
  KeyX: {
    value: { en: 'x', ru: 'ч' },
    size: Settings.className.key.keySize.small,
  },
  KeyC: {
    value: { en: 'c', ru: 'с' },
    size: Settings.className.key.keySize.small,
  },
  KeyV: {
    value: { en: 'v', ru: 'м' },
    size: Settings.className.key.keySize.small,
  },
  KeyB: {
    value: { en: 'b', ru: 'и' },
    size: Settings.className.key.keySize.small,
  },
  KeyN: {
    value: { en: 'n', ru: 'т' },
    size: Settings.className.key.keySize.small,
  },
  KeyM: {
    value: { en: 'm', ru: 'ь' },
    size: Settings.className.key.keySize.small,
  },
  Comma: {
    value: { en: ',', ru: 'б' },
    size: Settings.className.key.keySize.small,
  },
  Period: {
    value: { en: '.', ru: 'ю' },
    size: Settings.className.key.keySize.small,
  },
  Slash: {
    value: { en: '/', ru: '.' },
    size: Settings.className.key.keySize.small,
  },
  ArrowUp: {
    value: { allLangsValue: '▲' },
    size: Settings.className.key.keySize.small,
  },
  ShiftRight: {
    value: { allLangsValue: 'Shift' },
    size: Settings.className.key.keySize.wide,
  },
  ControlLeft: {
    value: { allLangsValue: 'Ctrl' },
    size: Settings.className.key.keySize.wide,
  },
  MetaLeft: {
    value: { allLangsValue: 'Win' },
    size: Settings.className.key.keySize.small,
  },
  AltLeft: {
    value: { allLangsValue: 'Alt' },
    size: Settings.className.key.keySize.small,
  },
  Space: {
    value: { allLangsValue: ' ' },
    size: Settings.className.key.keySize.extraWide,
  },
  AltRight: {
    value: { allLangsValue: 'Alt' },
    size: Settings.className.key.keySize.small,
  },
  ControlRight: {
    value: { allLangsValue: 'Ctrl' },
    size: Settings.className.key.keySize.wide,
  },
  ArrowLeft: {
    value: { allLangsValue: '◀' },
    size: Settings.className.key.keySize.small,
  },
  ArrowDown: {
    value: { allLangsValue: '▲' },
    size: Settings.className.key.keySize.small,
  },
  ArrowRight: {
    value: { allLangsValue: '▶' },
    size: Settings.className.key.keySize.small,
  },
};

export default KEYS_ENUM;
