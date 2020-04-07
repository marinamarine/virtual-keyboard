export default class DomElement {
  constructor(property = {
    element: 'div', class: [], content: '', type: null,
  }) {
    this.element = property.element || 'div';
    this.class = property.class;
    this.content = property.content;
    this.type = property.type;
  }

  render() {
    const item = document.createElement(this.element);
    this.class.forEach((className) => item.classList.add(className));
    if (this.content) {
      if (typeof this.content === 'string') {
        item.innerHTML = this.content;
      } else {
        this.content.forEach((child) => item.insertAdjacentElement('beforeend', child));
      }
    }
    if (this.type) {
      item.type = this.type;
    }
    return item;
  }
}
