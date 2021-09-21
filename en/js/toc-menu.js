class TocMenu {
  constructor() {
    const elements = [...document.querySelectorAll('[data-toc-label]')];
    const ul = this.ul = document.createElement('ul');
    for (let el of elements) {
      const label = el.getAttribute('data-toc-label');
      el.setAttribute('id', label);
      const li = ul.appendChild(document.createElement('li'));
      const a = li.appendChild(document.createElement('a'));
      a.textContent = label;
      a.setAttribute('href', `#${label}`);
      a.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(label).scrollIntoView({behavior: 'smooth', block: 'start'});
      });
    }
  }

  async render() {
    return this.ul;
  }
}

export default TocMenu;
