export function assignGradeClass(gradeBarContainer, grade = '') {
  grade = grade.toLowerCase();
    if (grade === "accept") {
      gradeBarContainer.children[2].className = "grade_block accept";
      gradeBarContainer.children[1].className = "grade_block accept";
      gradeBarContainer.children[0].className = "grade_block accept";
    } else if (grade === "two-week") {
      gradeBarContainer.children[2].className = "grade_block";
      gradeBarContainer.children[1].className = "grade_block two-week";
      gradeBarContainer.children[0].className = "grade_block two-week";
    } else if (grade === "four-week") {
      gradeBarContainer.children[2].className = "grade_block";
      gradeBarContainer.children[1].className = "grade_block";
      gradeBarContainer.children[0].className = "grade_block four-week";
  }
};