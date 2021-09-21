import tocMenu from './toc-menu.js';

const app = {
  title: 'CV Maxim Zorin -- Lead JavaScript Developer',
  template: `
    <header><nav></nav></header>
    <main></main>
    <footer>
      <figure class="rs-school-logo"><img src="assets/rs_school_js.svg" alt="RSSchool"></figure>
      <div>
        <a href="https://github.com/mxn42/rsschool-cv">mxn42/rsschool-cv</a> |
        2021 |
        <a href="https://rs.school/js/">JS Course</a>
      </div>
      </a>
    </footer>
  `
};

export default {
  async render() {
    document.title = app.title;
    const box = document.body.appendChild(document.createElement('div'));
    box.classList.add('box', 'loading');
    box.insertAdjacentHTML('beforeend', app.template);
    const md = markdownit({
      html: true,
      linkify: true,
      typographer: true
    });
    const cv = await fetch('cv.md');
    box.querySelector('main').innerHTML = md.render(await cv.text());
    box.querySelector('nav').appendChild(await tocMenu());
    const samplejs = document.createElement('script');
    samplejs.textContent = box.querySelector('code').textContent;
    document.body.appendChild(samplejs);
    hljs.highlightAll();
    box.classList.remove('loading');
  }
};
