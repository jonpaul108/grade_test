import { assignGradeClass } from "./assignGradeClass.js";
import { updateSkillGrade } from "./updateSkillGrade .js";

export function handleSkillClick(e) {
  const { className } = e.target;
  if (!className.includes("grade_block")) return;

  const { grades, gradeUpdate } = this;
  const { parentElement } = e.target;
  const { skill } = parentElement.parentElement.dataset;
  let { grade } = e.target.dataset;
  console.log("grade:", grade, parentElement.dataset.type, grades);
  if (grade === parentElement.dataset.type) {
    grade = "";
  }
  const category =
  parentElement.dataset.category || parentElement.parentElement.dataset.category;
  assignGradeClass(parentElement, grade);
  updateSkillGrade(grades, grade, category, skill);
  gradeUpdate();
  
}
