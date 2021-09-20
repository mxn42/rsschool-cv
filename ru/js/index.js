const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
});
fetch('cv.md')
  .then(res => res.text())
  .then(text => document.querySelector('#cv').innerHTML = md.render(text));
