import { assignGradeClass } from "./assignGradeClass.js";
import { updateSkillGrade } from "./updateSkillGrade .js";

export function handleSkillClick(e) {
  const { className } = e.target;
  if (!className.includes("grade_block")) return;

  const { grades, gradeUpdate } = this;
  const { parentElement } = e.target;
  const { skill } = parentElement.parentElement.dataset;
  const { grade } = e.target.dataset;
  const category =
    parentElement.dataset.category || parentElement.parentElement.dataset.category;
  assignGradeClass(parentElement, grade);
  updateSkillGrade(grades, grade, category, skill);
  gradeUpdate();
  
}
