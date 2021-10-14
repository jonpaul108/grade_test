import { delineateGrades } from "./utilities/getGrades.js";
import { PromptGrades } from "./views/promptGrades.js";
import { weatherData as tAAData } from "../data/tAAData.js";
import { studentData } from "../data/studentData.js";
import { calculateGrade } from "./utilities/calculateGrade.js";
import { handlePromptGradeClick } from "./utilities/handlePromptGradeClick.js";
import { header } from "./views/header.js";


export class App {
  constructor() {
    this.state = {
      grades: [],
      totalHelpRequests: 0,
      grade: "",
    };
    this.header= header.bind(this);
  }

  getTAAData() {
    //to retrieve TAA data
  }

  getStudentData() {
    //to retrieve student data
  }

  view() {
    const { prompts } = tAAData;
    const { grades } = this.state;
    const { header } = this;
    const appContainer = document.createElement("div");
    appContainer.className = "app_container";

    delineateGrades(studentData, tAAData, grades);

    appContainer.append(header());

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

    console.log(grades);
    return appContainer;
  }
}
