class TocMenu {
  constructor() {
    const elements = [...document.querySelectorAll('[data-toc-label]')];
    const ul = this.ul = document.createElement('ul');
    let i = 0;
    for (let el of elements) {
      const tocId = `toc${++i}`;
      el.setAttribute('id', tocId);
      ul.insertAdjacentHTML('beforeend', `<li><a href="#${tocId}">${el.getAttribute('data-toc-label')}</a></li>`);
    }
  }

  async render() {
    return this.ul;
  }
}

export default TocMenu;
