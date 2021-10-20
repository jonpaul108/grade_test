import { PromptGrades } from "./views/promptGrades.js";
import { delineateGrades } from "./utilities/getGrades.js";
import { weatherData as tAAData } from "../data/tAAData.js";
import { studentData } from "../data/studentData.js";
import { handlePromptGradeClick } from "./utilities/handlePromptGradeClick.js";
import { header } from "./views/header.js";



export class App {
  constructor() {
    this.state = {
      grades: [],
      totalHelpRequests: 0,
      finalGrade: "",
    };
    this.header = header.bind(this);
    this.handleFinalGrade = this.handleFinalGrade.bind(this);
    this.calculateFinalGrade = this.calculateFinalGrade.bind(this);
    this.changeFinalGrade = this.changeFinalGrade.bind(this);
  }

  getTAAData() {
    //to retrieve TAA data
  }

  getStudentData() {
    //to retrieve student data
  }

  handleFinalGrade(e) {
    const { calculateFinalGrade } = this;
    const { grades } = this.state;
    calculateFinalGrade();
    console.log("final", this.state.finalGrade);
    this.changeFinalGrade(this.state.finalGrade);
  }

  calculateFinalGrade() {
    const { grades } = this.state;
    const tAA = tAAData;
    const scores = grades.reduce((score, el) => {
      const { promptGrade } = el;
      score[promptGrade] = score[promptGrade] ? score[promptGrade] + 1 : 1;
      return score;
    }, {});
    console.log(scores);
    const {
      "Four Week": fourWeek,
      "Two Week": twoWeek,
      Accept: accept,
    } = scores;
    console.log(fourWeek, twoWeek, accept, scores);
    if (!fourWeek && accept >= 3) {
      this.state.finalGrade = "Accept";
    } else if (!fourWeek && twoWeek) {
      this.state.finalGrade = "Two Week";
    } else if (fourWeek) {
      this.state.finalGrade = "Four Week";
    } else {
      this.state.finalGrade = "N/A";
    }
  }
  changeFinalGrade(grade = "") {
    const gradeSpan = document.getElementById("final_grade");
    const lowerCase = grade.toLowerCase();
    const textClass = lowerCase === "accept" ? "green-text" : lowerCase === "two week" ? "yellow-text" : "red-text";
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
