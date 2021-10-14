export function assignGradeClass(gradeBarContainer, grade = '') {
  if (grade === "accept") {
    gradeBarContainer.dataset.type = "accept";
    gradeBarContainer.children[2].className = "grade_block accept";
    gradeBarContainer.children[1].className = "grade_block accept";
    gradeBarContainer.children[0].className = "grade_block accept";
  } else if (grade === "twoWeek") {
    gradeBarContainer.dataset.type = "twoWeek";
    gradeBarContainer.children[2].className = "grade_block";
    gradeBarContainer.children[1].className = "grade_block two-week";
    gradeBarContainer.children[0].className = "grade_block two-week";
  } else if (grade === "fourWeek") {
    gradeBarContainer.dataset.type = "fourWeek";
    gradeBarContainer.children[2].className = "grade_block";
    gradeBarContainer.children[1].className = "grade_block";
    gradeBarContainer.children[0].className = "grade_block four-week";
  }
};