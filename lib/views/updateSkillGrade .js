export function updateSkillGrade(grades, grade, category, skill) {

  if (category === "autonomy" || category === "horsepower") {
    grades[category] = grade;
    return;
  }
  grades[category][skill] = grade;
}