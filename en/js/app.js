import tocMenu from './toc-menu.js';

const app = {
  title: 'CV Maxim Zorin -- Lead JavaScript Developer',
  template: `
    <header><nav></nav></header>
    <main></main>
    <footer>
      <figure style="width: 150px;">
        <a href="https://rs.school/js/" target="_blank">
          <img src="assets/rs_school_js.svg" alt="RSSchool">
        </a>
      </figure>
      <figure>
        <a href="https://github.com/mxn42/rsschool-cv" target="_blank">
          <img src="assets/github.png" alt="https://github.com/mxn42/rsschool-cv">
        </a>
      </figure>
    </footer>
  `
};

export default {
  async render() {
    document.title = app.title;
    const box = document.body.appendChild(document.createElement`div`);
    box.classList.add('box', 'loading');
    box.insertAdjacentHTML('beforeend', app.template);
    const cv = await fetch`cv.md`;
    const md = markdownit({html: true, linkify: true, typographer: true});
    box.querySelector`main`.innerHTML = md.render(await cv.text());
    box.querySelector`nav`.appendChild(await tocMenu());
    const samplejs = document.createElement`script`;
    samplejs.textContent = box.querySelector`code`.textContent;
    document.body.appendChild(samplejs).remove();
    hljs.highlightAll();
    box.classList.remove`loading`;
  }
};
