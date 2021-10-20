////not using - was meant to show a wider range of data upon grading

export function calculateFinalGrade(grades, tAA) {
 
  
  // const horsepower = calculateHorsepowerAndAutonomy(grades, "horsepower");
  // const autonomy = calculateHorsepowerAndAutonomy(grades, "autonomy");
  // const essential = aggregateSkills(grades, tAA, "essentialSkills");
  // const problemSolving = aggregateSkills(grades, tAA, "problemSolving");
  // const debugging = aggregateSkills(grades, tAA, "debugging");
  // console.log(essential, problemSolving, debugging)

 
}

// function calculateHorsepowerAndAutonomy(grades, topic) {
//   return grades.reduce((sum, el) => {
//     if (el[topic] === "twoWeek") {
//       return sum + 2;
//     } else if (el[topic] === "fourWeek") {
//       return sum + 3;
//     }
//     return sum;
//   }, 0);
// }

// function aggregateSkills(grades, tAA, skill) {
//   const { prompts } = tAA;
//   let arr = [];
//   prompts.forEach((el, i) => {
//     arr = [...arr,...el[skill].map((s) => {
//       return {
//         skill: s,
//         grade: grades[i][skill][s]
//       }
//     })];
//   })
//   return arr;
// }

