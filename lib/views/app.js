import { gradeBars } from './gradeBars.js';
import { addTitle } from './addTitle.js';
import { addSubData } from './addSubData.js';
import { essentialSkills } from './essentialSkills.js';
import { singleColumnSkills } from './singleColumnSkills.js';
import { handleSkillClick } from './handleGradeBarClick.js';

export function app(grades, prompt, student) {

  const { horsepower, autonomy } = grades;
  const promptEl = document.createElement("div");
  const promptNum = document.createElement("span");
  const grading = document.createElement("span");
  const horsepowerAutonomyContainer = document.createElement("div");

  promptEl.className = "prompt";
  grading.className = "grading";
  promptNum.className = "promptNum";
  horsepowerAutonomyContainer.className = "horsepower_autonomy_container flex-row";
  promptNum.innerText = `${prompt.promptNum}: ${prompt.promptName}`;
  
  const horsepowerGradeBars = gradeBars(horsepower);
  const autonomyGradeBars = gradeBars(autonomy);
  
  addTitle(horsepowerGradeBars, "Horsepower");
  addTitle(autonomyGradeBars, "Autonomy");
  addSubData(horsepowerGradeBars, "time", student.time);
  addSubData(autonomyGradeBars, 'requests', student.helpRequests);

  horsepowerAutonomyContainer.append(horsepowerGradeBars);
  horsepowerAutonomyContainer.append(autonomyGradeBars);
  grading.append(horsepowerAutonomyContainer)
  grading.append(essentialSkills(prompt.essentialSkills));
  grading.append(singleColumnSkills(prompt.debugging, "Debugging", "skills_container"));
  grading.append(singleColumnSkills(prompt.problemSolving, "Problem Solving", "skills_container"))
  promptEl.append(promptNum);
  promptEl.append(grading);

  promptEl.addEventListener('click', handleSkillClick);

  return promptEl;
  
}






