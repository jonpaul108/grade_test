const problemBar = document.getElementById("grading_bar_container");

import { delineateGrades } from "./utilities/getGrades.js";
import { App } from "./views/app.js";
import { weatherData as tAAData } from "../data/tAAData.js";
import { studentData } from "../data/studentData.js";
import { calculateGrade } from "./utilities/calculateGrade.js";

const state = {
  grades: [],
  totalHelpRequests: 0,
  grade: "",
};

(function () {
  const { prompts } = tAAData;
  const { grades } = state;

  delineateGrades(studentData, tAAData, grades);
  grades.forEach((el, i) => {
    const app = new App(el, prompts[i], studentData[i]);
    problemBar.append(app.createGradeContainer());
  });

  calculateGrade();
})();



