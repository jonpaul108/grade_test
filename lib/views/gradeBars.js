import { assignGradeClass } from "./assignGradeClass.js";

export function gradeBars(grade) {
  const gradeBarContainer = document.createElement("div");
  gradeBarContainer.className = "grade_container";
  const gradeTypes = [
    "four-week",
    "two-week",
    "accept"
  ];
  for (let i = 0; i < gradeTypes.length; i++) {
    const currEl = document.createElement("span");
    currEl.setAttribute("data-grade", gradeTypes[i]);
    currEl.classList.add('grade_block');
    gradeBarContainer.append(currEl);
  }

  assignGradeClass(gradeBarContainer, grade);
  return gradeBarContainer;
 }
  
