import { assignGradeClass } from "./assignGradeClass.js";

export function handleSkillClick(e) {
  const { className } = e.target;
  console.log("click")
  if (className.includes("grade_block")) {
    const { parentElement } = e.target;
    const { grade } = e.target.dataset;
    assignGradeClass(parentElement, grade);
  }
}
