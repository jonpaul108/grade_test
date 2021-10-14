export function header() {
  const { finalGrade } = this.state;
  const { handleFinalGrade } = this;
  const containerEl = document.createElement("div");
  const buttonEl = document.createElement("button");

  buttonEl.id = "grade_all_btn";
  buttonEl.className = "btn grade_all_btn";
  buttonEl.innerText = "Grade";
  containerEl.className = "header flex_row";

  buttonEl.addEventListener("click", handleFinalGrade);
  const innerHTML = `
    <div class="grade_display_container">
      <span>Grade:</span><span id="final_grade">${finalGrade || ''}</span>
    </div>
  `
  containerEl.innerHTML = innerHTML;
  containerEl.append(buttonEl);
  
  return containerEl;
}