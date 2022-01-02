async function validate(html) {
  const response = await fetch('https://validator.w3.org/nu/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: html,
  });
  var parser = new DOMParser();
  var doc = parser.parseFromString(await response.text(), 'text/html');
  return doc.querySelector('#results');
}

const excludeWarnings = [
  'Warning: The type attribute is unnecessary for JavaScript resources.',    // fails in case  <script type="module" ...
];

async function w3validate() {
  const html = new XMLSerializer().serializeToString(document);
  const results = await validate(html);

  const issues = [...results.querySelectorAll('ol>li')]
    .map(x => x.querySelector('p')?.textContent || '')
    .filter(x => !excludeWarnings.includes(x));

  console.groupCollapsed(`W3C validate: ${issues.length ? 'There are ' + issues.length + ' errors or warnings.' : 'OK'}`);

  const duration = results.querySelector('.stats')?.textContent || '';
  if (duration) console.log(duration);

  if (!issues.length)
    console.log('%cDocument checking completed. No errors or warnings.', 'color: #cfc');
  else {
    console.log(results.querySelector('.failure')?.textContent || 'There were errors.');
    issues.forEach((x, i) => console.log(`${i + 1}. ${x}`));
  }
  console.groupEnd();
};

function symanticTags() {
  const selectors = 'article aside details figcaption figure footer header main mark nav section summary time h1 h2 h3 h4 h5 h6'.split` `.sort();
  let [table, total, unique] = selectors.reduce(([table, total, unique], tag) => {
    const count = document.querySelectorAll(tag).length;
    return [[...table, {tag, count}], total + count, unique + (count > 0)];
  }, [[], 0, 0]);
  console.groupCollapsed(`[Semantic] total ${total}, unique: ${unique}`);
  console.table(table, ['tag', 'count']);
  const h1count = document.querySelectorAll('h1').length;
  if (h1count < 1)
    console.log(`[Semantic] There is no H1 tag`);
  else if (h1count > 1)
    console.warn(`[Semantic] There are too ${h1count} times of H1 tag`);
  console.groupEnd();
  return {total, unique};
}

(async () => {
  await w3validate();
  symanticTags();
})();
