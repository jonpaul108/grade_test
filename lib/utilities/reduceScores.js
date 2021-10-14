export function reduceScores(name) {
  const { categoryScores, grades } = this;
  const category = this.prompt[name];
  console.log(category, 'cagegort');
  return category.reduce((scores, el) => {
    if (grades[name][el]) scores[grades[name][el]]++;
    console.log(grades, el, grades[name][el]);
    return scores;
  }, categoryScores[name]);
}
