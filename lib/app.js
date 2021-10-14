import { delineateGrades } from "./utilities/getGrades.js";
import { PromptGrades } from "./views/promptGrades.js";
import { weatherData as tAAData } from "../data/tAAData.js";
import { studentData } from "../data/studentData.js";
import { handlePromptGradeClick } from "./utilities/handlePromptGradeClick.js";
import { header } from "./views/header.js";
import { calculateFinalGrade } from "./utilities/calculateFinalGrade.js";


export class App {
  constructor() {
    this.state = {
      grades: [],
      totalHelpRequests: 0,
      finalGrade: "",
    };
    this.header = header.bind(this);
    this.handleFinalGrade = this.handleFinalGrade.bind(this);
  }

  getTAAData() {
    //to retrieve TAA data
  }

  getStudentData() {
    //to retrieve student data
  }

  handleFinalGrade(e) {
    console.log("final Grade");
    const { grades } = this.state;
    const grade = calculateFinalGrade(grades, tAAData);
    this.finalGrade = this.state;
    this.changeFinalGrade(this.state.finalGrade);
  }

  changeFinalGrade(grade = "") {
    const gradeSpan = document.getElementById("final_grade");
    const lowerCase = grade.toLowerCase();
    const textClass = lowerCase === "accept" ? "green-text" : lowerCase === "two-week" ? "yellow-text" : "red-text";
    gradeSpan.innerText = grade;
    gradeSpan.className = textClass;
  }

  view() {
    const { prompts } = tAAData;
    const { grades } = this.state;
    const { header } = this;
    const appContainer = document.createElement("div");
    const headerBar = header();
    delineateGrades(studentData, tAAData, grades);

    appContainer.className = "app_container";
    appContainer.append(headerBar);

    grades.forEach((el, i) => {
      const promptGrades = new PromptGrades(el, prompts[i], studentData[i]);
      const prompt = promptGrades.createGradeContainer();
      const gradeSectionButton = document.createElement("button");
      const handlePromptButton = handlePromptGradeClick.bind(promptGrades);
      gradeSectionButton.className = "btn prompt_grade_btn";
      gradeSectionButton.innerText = "Grade Prompt";
      gradeSectionButton.addEventListener("click", handlePromptButton);
      prompt.append(gradeSectionButton);
      appContainer.append(prompt);
    });

    return appContainer;
  }
}
