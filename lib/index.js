const problemBar = document.getElementById("grading_bar_container");

import { delineateGrades } from "./utilities/getGrades.js";
import { app } from "./views/app.js";
import { weatherData as tAAData } from "../data/tAAData.js";
import { studentData } from "../data/studentData.js";

const state = {
  grades: [],
};
  
(function () {
  const { prompts } = tAAData;
  const { grades } = state;

  delineateGrades(studentData, tAAData, grades);

  grades.forEach((el, i) => {
    problemBar.append(app(el, prompts[i], studentData[i]));
  });
})();



