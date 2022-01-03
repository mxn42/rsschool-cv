(async () => {
  const w3issues = await w3validate();
  const tags = symanticTags();
  let stat = { score: 0, max: 0, totalMax: 120 };

  console.group(`%cRSSchool Check`, 'color: indigo');

  let okColor = 'green', warnColor = 'golden', failColor = 'red';
  function check({ description, score, max }) {
    stat.max += max;
    stat.score += score;
    const rate = score / max;
    console.log(`${description} %c+${+score.toFixed(2)}`, `color: ${rate >= 1 ? okColor : score > 0 ? warnColor : failColor}`);    
  }

  check({max: 10, description: 'Link to gh-pages',
    score: 10,
  });

  check({max: 10, description: 'W3C valid',
    score: 10 * (w3issues.length === 0),
  });

  console.group(`Semantic`);
  const count = tag => tags.table.find(x => x.tag === tag)?.count || 0;
  const queryCount = selector => document.querySelectorAll(selector).length;

  check({max: 5, description: 'header, main, footer',
    score: 5 * (count('header') && count('main') && count('footer')),
  });
  check({max: 5, description: 'nav',
    score: 5 * (count('nav') > 0),
  });
  check({max: 5, description: 'h1',
    score: 5 * (count('h1') === 1),
  });
  check({max: 5, description: 'h2',
    score: 5 * (count('h2') > 1),
  });
  check({max: 10, description: 'footer: gh, year, logo',
    score: 10,
  });
  check({max: 10, description: 'css',
    score: 10 * (queryCount('head>link[rel=stylesheet]') > 0),
  });
  check({max: 10, description: 'scale',
    score: 10,
  });
  check({max: 10, description: 'photo, alt',
    score: 10 * (queryCount('img.photo[alt]') > 0),
  });
  check({max: 10, description: 'ul > li > a',
    score: 10 * ((queryCount('ul > li > a') + queryCount('ul > ol > a')) > 4),
  });

  console.groupEnd();

  console.group(`Content`);

  check({max: 5, description: 'about',
    score: 5,
  });
  check({max: 5, description: 'contacts',
    score: 5,
  });
  check({max: 5, description: 'skills',
    score: 5,
  });
  check({max: 5, description: 'code sample',
    score: 5,
  });
  check({max: 5, description: 'projects',
    score: 5,
  });
  check({max: 5, description: 'english level',
    score: 5,
  });
  check({max: 10, description: 'cv in english',
    score: 10,
  });

  console.groupEnd();

  console.log(`Score: ${stat.score}`);
  stat.score = Math.min(stat.totalMax, stat.score);
  console.log(`%cRSSchool Self-Score: %c${stat.score}%c / ${stat.max}`, 'font-size: 150%', `font-size: 150%; color: ${okColor}`, 'color: grey');

  console.groupEnd();
})();

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

async function w3validate() {
  const html = new XMLSerializer().serializeToString(document);
  const results = await validate(html);

  const excludeWarnings = [
    'Warning: The type attribute is unnecessary for JavaScript resources.',    // fails in case  <script type="module" ...
  ];  
  const issues = [...results.querySelectorAll('ol>li')]
    .map(x => x.querySelector('p')?.textContent || '')
    .filter(x => !excludeWarnings.includes(x));

  console.groupCollapsed(`https://validator.w3.org: ${issues.length ? 'There are ' + issues.length + ' errors or warnings.' : 'OK'}`);

  const duration = results.querySelector('.stats')?.textContent || '';
  if (duration) console.log(duration);

  if (!issues.length)
    console.log('%cDocument checking completed. No errors or warnings.', 'color: #cfc');
  else {
    console.log(results.querySelector('.failure')?.textContent || 'There were errors.');
    issues.forEach((x, i) => console.log(`${i + 1}. ${x}`));
  }
  console.groupEnd();
  return issues;
};

function symanticTags() {
  const selectors = 'article aside details figcaption figure footer header main mark nav section summary time h1 h2 h3 h4 h5 h6'.split` `.sort();
  let [table, total, unique] = selectors.reduce(([table, total, unique], tag) => {
    const count = document.querySelectorAll(tag).length;
    return [[...table, {tag, count}], total + count, unique + (count > 0)];
  }, [[], 0, 0]);
  console.groupCollapsed(`Semantic tags: total ${total}, unique: ${unique}`);
  console.table(table, ['tag', 'count']);
  const h1count = document.querySelectorAll('h1').length;
  if (h1count < 1)
    console.log(`[Semantic] There is no H1 tag`);
  else if (h1count > 1)
    console.warn(`[Semantic] There are too ${h1count} times of H1 tag`);
  console.groupEnd();
  return {table, total, unique};
}
