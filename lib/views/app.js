import { gradeBars } from './gradeBars.js';
import { addTitle } from './addTitle.js';
import { addSubData } from './addSubData.js';
import { essentialSkills } from './essentialSkills.js';
import { singleColumnSkills } from './singleColumnSkills.js';
import { handleSkillClick } from './handleSkillClick.js';
import { calculateEssentialSkills, calculateDebuggingOrProblemSolvingScore } from '../utilities/calculateGrade.js';
import { reduceScores } from '../utilities/reduceScores.js';

export class App {
  constructor(grades, prompt, student) {
    this.grades = grades;
    this.prompt = prompt;
    this.student = student;
    this.currGrades = {};
    this.categoryCount = this.countCategories();
    this.categoryScores = {
      essentialSkills: {
        accept: 0,
        twoWeek: 0,
        fourWeek: 0,
      },
      problemSolving: {
        accept: 0,
        twoWeek: 0,
        fourWeek: 0,
      },
      debugging: {
        accept: 0,
        twoWeek: 0,
        fourWeek: 0,
      },
    };
    

    this.gradeUpdate = this.gradeUpdate.bind(this);
    this.handleSkillClick = handleSkillClick.bind(this);
  }

  gradeUpdate() {
    const { essentialSkills, debugging, problemSolving } = this.categoryCount;
    const essentialCurrScores = reduceScores.call(this, "essentialSkills");
    const problemSolvingCurrScores = reduceScores.call(this, "problemSolving");
    const debuggingCurrScores = reduceScores.call(this, "debugging");
    const essentialGrade = calculateEssentialSkills(essentialCurrScores, essentialSkills);
    const problemSolvingGrade = calculateDebuggingOrProblemSolvingScore(problemSolvingCurrScores, problemSolving);
    const debuggingGrade = calculateDebuggingOrProblemSolvingScore(debuggingCurrScores, debugging);

    
  }

  countCategories = () => {
    const { debugging, problemSolving, essentialSkills} = this.prompt;
    return {
      debugging: debugging.length,
      problemSolving: problemSolving.length,
      essentialSkills: essentialSkills.length,
    } 
  }

  createGradeContainer() {
    const { grades, prompt, student, handleSkillClick, categoryCount } = this;
    const { horsepower, autonomy } = grades;
    const promptEl = document.createElement("div");
    const promptNum = document.createElement("span");
    const grading = document.createElement("span");
    const horsepowerAutonomyContainer = document.createElement("div");
    const horsepowerGradeBars = gradeBars(horsepower);
    const autonomyGradeBars = gradeBars(autonomy);

    promptNum.innerText = `${prompt.promptNum}: ${prompt.promptName}`;

    promptEl.className = "prompt";
    grading.className = "grading";
    promptNum.className = "promptNum";
    horsepowerAutonomyContainer.className = "horsepower_autonomy_container flex-row";
    horsepowerGradeBars.dataset.category = "horsepower";
    autonomyGradeBars.dataset.category = "autonomy";
    
    addTitle(horsepowerGradeBars, "Horsepower");
    addTitle(autonomyGradeBars, "Autonomy");
    addSubData(horsepowerGradeBars, "time", student.time);
    addSubData(autonomyGradeBars, 'requests', student.helpRequests);

    horsepowerAutonomyContainer.append(horsepowerGradeBars);
    horsepowerAutonomyContainer.append(autonomyGradeBars);
    grading.append(horsepowerAutonomyContainer)
    grading.append(essentialSkills(prompt.essentialSkills));
    grading.append(
      singleColumnSkills(
        prompt.debugging,
        "Debugging",
        "debugging_skills_container",
        categoryCount.debugging
      )
    );
    grading.append(
      singleColumnSkills(
        prompt.problemSolving,
        "Problem Solving",
        "problem_solving_skills_container",
        categoryCount.problemSolving
      )
    );
    promptEl.append(promptNum);
    promptEl.append(grading);
    promptEl.addEventListener('click', handleSkillClick);

    return promptEl;
  }
  
}








