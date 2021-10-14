export function header() {
  const { finalGrade } = this;
  const containerEl = document.createElement("div");
  containerEl.className = "header flex_row";
  const innerHTML = `
    <button id="grade_all_btn" class="btn grade_all_btn">Grade</button>
    <div class="grade_display_container">
      <p id="grade_display" class="grade_display">Grade: ${finalGrade}</p>
    </div>
  `
  containerEl.innerHTML = innerHTML;
  return containerEl;
}