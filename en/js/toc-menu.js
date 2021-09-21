class TocMenu {
  constructor() {
    const elements = [...document.querySelectorAll('[data-toc-label]')];
    const ul = this.ul = document.createElement('ul');
    for (let el of elements) {
      const label = el.getAttribute('data-toc-label');
      el.setAttribute('id', label);
      ul.insertAdjacentHTML('beforeend', `<li><a href="#${label}">${label}</a></li>`);
    }
  }

  async render() {
    return this.ul;
  }
}

export default TocMenu;
