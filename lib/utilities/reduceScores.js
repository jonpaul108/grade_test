export function reduceScores(name) {
  const { categoryScores, grades } = this;
  const category = this.prompt[name];
  return category.reduce((scores, el) => {
    if (grades[name][el]) scores[grades[name][el]]++;
    return scores;
  }, categoryScores[name]);
}
