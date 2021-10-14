export function calculateFinalGrade(grades, tAA) {
  console.log(grades, tAA);
  const horsepower = calculateHorsepowerAndAutonomy(grades, "horsepower");
  const autonomy = calculateHorsepowerAndAutonomy(grades, "autonomy");


}

function calculateHorsepowerAndAutonomy(grades, topic) {
  return grades.reduce((sum, el) => {
    if (el[topic] === "twoWeek") {
      return sum + 2;
    } else if (el[topic] === "fourWeek") {
      return sum + 3;
    }
    return sum;
  }, 0);
}

function aggegrateSkills(grades, tAA) {
  
}