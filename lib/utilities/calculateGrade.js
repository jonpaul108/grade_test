export function calculateGrade() {


}


export function calculateEssentialSkills(categoryScores, total) {
  const { accept, twoWeek, fourWeek } = categoryScores;
  const base = Math.floor(total / 2) || 1;
  if (!fourWeek && accept >= base) {
    return "Accept";
  } else if (!fourWeek <= 1 && (accept + twoWeek) >= base) {
    return "Two-Week"
  } else {
    return "Four-Week";
  }
}

export function calculateDebuggingOrProblemSolvingScore(categoryScores, total) {
  if (total === 0) return "N/A";
  const { accept, twoWeek} = categoryScores;
  if (accept >= 1) {
    return accept;
  } else if (twoWeek >= 1) {
    return "Two Week";
  } else {
    return "Four Week";
  }
}
