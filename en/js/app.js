const app = {
  title: 'CV Maxim Zorin -- Lead JavaScript Developer',
  content: [
    `<header></header>`,
    `<main>
      <article id="cv"></article>
    <main>`,
    `<footer>
      <figure><img src="assets/rs_school_js.svg" width="100px" alt="RSSchool"></figure>
      <div>
        <a href="https://github.com/mxn42/rsschool-cv">mxn42/rsschool-cv</a> |
        2021 |
        <a href="https://rs.school/js/">JS Course</a>
      </div>
      </a>
    </footer>`
  ]
};

export default {
  async render() {
    document.title = app.title;
    app.content.forEach(x => document.body.insertAdjacentHTML('beforeend', x));
    const md = markdownit({
      html: true,
      linkify: true,
      typographer: true
    });
    const cv = await fetch('cv.md');
    document.querySelector('#cv').innerHTML = md.render(await cv.text());
  }
};
