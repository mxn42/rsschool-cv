export default async () => {
  const elements = [...document.querySelectorAll('[data-toc-label]')];
  const ul = document.createElement('ul');
  for (let el of elements) {
    const label = el.dataset.tocLabel;
    const icon = el.dataset.tocIcon;
    const id = label.replace(' ', '');
    el.setAttribute('id', id);
    const li = ul.appendChild(document.createElement('li'));
    const a = li.appendChild(document.createElement('a'));
    a.insertAdjacentHTML('afterbegin', `<i class="bx ${icon}"></i> <span class="name">${label}</span>`);
    a.setAttribute('title', label);
    a.setAttribute('href', `#${id}`);
    a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  }
  return ul;
};
