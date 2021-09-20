const invalidChecks = [
  'Warning: The type attribute is unnecessary for JavaScript resources.',    // fails in case  <script type="module" ...
];

export default async html => {
  const response = await fetch('https://validator.w3.org/nu/', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'text/html; charset=utf-8'},
    body: html,
  });
  var parser = new DOMParser();
  var doc = parser.parseFromString(await response.text(), 'text/html');
  const results = doc.querySelector('#results');

  console.groupCollapsed('Validate by https://validator.w3.org/');
  const duration = results.querySelector('.stats')?.textContent || '';
  if (duration) console.log(duration);
  const issues = [...results.querySelectorAll('ol>li')]
    .map(x => x.querySelector('p')?.textContent || '')
    .filter(x => !invalidChecks.includes(x))
  if (!issues.length)
    console.log('%cDocument checking completed. No errors or warnings.', 'color: #cfc');
  else {
    console.log(results.querySelector('.failure')?.textContent || 'There were errors.');
    issues.forEach((x, i) => console.log(`${i + 1}. ${x}`));
  }
  console.groupEnd();
  return issues;
};
