import semanticStat from "./semantic-stat.js";

export default async () => {
  let score = 0, max = 0;

  // HTML validate
  // https://jigsaw.w3.org/css-validator/api.html

  // Semantic
  const semantic = semanticStat();
  score += Math.min(20, 2 * semantic.unique);
  if (document.querySelectorAll('h1').length > 1)
    console.warn(`[Semantic] There are ${document.querySelectorAll('h1').length} times of H1 tag.`);
  max += 20;

  console.log(`Score: ${score} / ${max}`);
};
