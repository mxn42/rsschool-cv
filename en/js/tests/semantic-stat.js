// A list of monitored semantic tags.
// [These are some of the roughly 100 semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)
export default () => {
  const selectors = 'article aside details figcaption figure footer header main mark nav section summary time h1 h2 h3 h4 h5 h6'.split` `.sort();
  let [table, total, unique] = selectors.reduce(([table, total, unique], tag) => {
    const count = document.querySelectorAll(tag).length;
    return [[...table, {tag, count}], total + count, unique + (count > 0)];
  }, [[], 0, 0]);
  console.groupCollapsed(`Semantic: total ${total}, unique: ${unique}`);
  console.table(table, ['tag', 'count']);
  console.groupEnd();
  return {total, unique};
};
