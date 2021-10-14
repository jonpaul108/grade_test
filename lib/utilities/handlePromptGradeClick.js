export function handlePromptGradeClick(e) {
  const { grades, promptEl } = this;
  const promptGradeEl = promptEl.querySelector(".prompt_grade");
  console.log(promptGradeEl, promptEl);
  const arr = (({ autonomy, horsepower, essentialGrade, debuggingGrade, problemSolvingGrade }) => [autonomy, horsepower, essentialGrade, debuggingGrade, problemSolvingGrade])(grades);
  let skillCount = 0;
  const currGrades = arr.reduce((obj, el) => {
    if (el !== "N/A" && el) {
      obj[el] = !obj[el] ? 1 : obj[el] + 1;
      skillCount++;
    }
    return obj;
  }, {})
  
  const { "accept": accept, "twoWeek": twoWeek, "fourWeek": fourWeek } = currGrades;

  let base = (skillCount < 4) ? 3 : skillCount - 1;

  
  if (!fourWeek && accept >= base) {
    promptGradeEl.innerText = "Accept";
    promptGradeEl.className = "prompt_grade green-text";
    return "Accept";
  } else if (!fourWeek || fourWeek <= 1) {
     promptGradeEl.innerText = "Two Week";
     promptGradeEl.className = "prompt_grade yellow-text";
    return "Two Week";
  } else {
     promptGradeEl.innerText = "Four Week";
     promptGradeEl.className = "prompt_grade red-text";
    return "Four Week";
  }
}