export function getHorsepowerAutonomyGrades(student, acceptTimeLimit, twoWeekTimeLimit) {
  const { time, helpRequests } = student;
    const horsepower = time <= acceptTimeLimit
      ? "accept"
      : time <= twoWeekTimeLimit
        ? "twoWeek"
        : "fourWeek";
    const autonomy = student.helpRequests <= 1
      ? "accept" :
      helpRequests <= 2
        ? "twoWeek"
        : "fourWeek";
    return {
      horsepower,
      autonomy
    }
}
  
export function delineateGrades(studentData, tAAData, grades) {
  const { prompts } = tAAData;
  studentData.forEach((el, i) => {
    const { essentialSkills, debugging, problemSolving, acceptTimeLimit, twoWeekTimeLimit } = prompts[i];
    const autonomyHorsepower = getHorsepowerAutonomyGrades(el, acceptTimeLimit, twoWeekTimeLimit);
    const g = { ...autonomyHorsepower, essentialSkills: {}, problemSolving: {}, debugging: {} };
    essentialSkills.forEach(el => g['essentialSkills'][el] = "");
    debugging.forEach(el => g['debugging'][el] = "");
    problemSolving.forEach(el => g['problemSolving'][el] = "");
    g["essentialGrade"] = "";
    g["debuggingGrade"] = "";
    g["problemSolvingGrade"] = "";
    g["promptGrade"] = "";
    grades.push(g);
  })
}
