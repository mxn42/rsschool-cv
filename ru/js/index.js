const app = {
  title: 'CV Maxim Zorin -- Lead JavaScript Developer',
  content: [
    this.header = `<header></header>`,
    this.cv = `<article id="cv"></article>`,
    this.footer = `<footer>
      <img src="assets/rs_school_js.svg" width="100px">
      <div>
        <a href="https://github.com/mxn42/rsschool-cv">mxn42/rsschool-cv</a> |
        2021 |
        <a href="https://rs.school/js/">JS Course</a>
      </div>
      </a>
    </footer>`
  ]
}
document.title = app.title;
app.content.forEach(x => document.body.insertAdjacentHTML('beforeend', x));
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
});
fetch('cv.md')
  .then(res => res.text())
  .then(text => document.querySelector('#cv').innerHTML = md.render(text));
