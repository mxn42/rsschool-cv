import semanticStat from "./tests/semantic-stat.js";
import w3validate from "./tests/w3validate.js";

export default async () => {
  let score = 0, max = 0;

  // HTML validate
  max += 10;
  const w3issues = await w3validate(new XMLSerializer().serializeToString(document));
  if (w3issues.length === 0)
    score += 10;
  else
    console.log(`[w3 validate] There are ${w3issues.length} errors or warnings.`);


  // https://jigsaw.w3.org/css-validator/api.html

  // Semantic
  max += 20;
  const semantic = semanticStat();
  score += Math.min(20, 2 * semantic.unique);
  const h1count = document.querySelectorAll('h1').length;
  if (h1count > 1) {
    console.warn(`[Semantic] There are ${h1count} times of H1 tag.`);
    score -= 10;
  }

  console.log(`%cRSSchool Self-score %c${score}%c / ${max}`, 'font-size: 120%', 'font-size:120%; color: #badaba', 'font-size: 75%; color: grey');
};
