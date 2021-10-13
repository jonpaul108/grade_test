const problemBar = document.getElementById("grading_bar_container");

const studentData = [
  {
    prompt: 4,
    title: "code Reading",
    selection1:
      "Student described the high level functionality of a palidrome detection algorithym.",
    selection2:
      "Student accurately explained majority of the line by line expression functionality.",
    selection3:
      "Student inaccurately explained majority of line by line expression functionality. ",
    time: 100,
    timeLimit: 300,
    helpRequestNumber: 0,
  },
  {
    prompt: 5,
    title: "Basic Functions",
    selection1: "Student quickly implemented ",
    selection2:
      "Student accurately explained majority of the line by line expression functionality.",
    selection3:
      "Student inaccurately explained majority of line by line expression functionality. ",
    time: 310,
    timeLimit: 300,
    helpRequestNumber: 1,
  },
  {
    prompt: 7,
    title: "Basic Functions",
    selection1: "Student quickly implemented ",
    selection2:
      "Student accurately explained majority of the line by line expression functionality.",
    selection3:
      "Student inaccurately explained majority of line by line expression functionality. ",
    time: 1300,
    timeLimit: 1400,
    helpRequestNumber: 1,
  },
  {
    prompt: 9,
    title: "Basic Functions",
    selection1: "Student quickly implemented ",
    selection2:
      "Student accurately explained majority of the line by line expression functionality.",
    selection3:
      "Student inaccurately explained majority of line by line expression functionality. ",
    time: 1500,
    timeLimit: 2000,
    helpRequestNumber: 3,
  },
];

function init() {
  loadProblems();
}

//loads initial display of grades adn titles

function loadProblems() {
  let helpRequestCount = 0;
  for (let prompt of studentData) {
    const promptEl = document.createElement("div");
    const promptNum = document.createElement("span");
    const grading = document.createElement("span");

    promptEl.className = "prompt";
    grading.className = "grading";
    promptNum.className = "promptNum";

    promptNum.innerText = `${prompt.prompt}: ${prompt.title}`;

    const twoWeekTime = prompt.timeLimit + prompt.timeLimit * 0.3;
    const horsepowerGrade =
      prompt.time <= prompt.timeLimit
        ? "Accept"
        : prompt.time <= twoWeekTime
        ? "Two-week"
        : "Four-week";
    const currHelp = prompt.helpRequestNumber;
    const autonomyGrade =
      currHelp <= 1 ? "Accept" : currHelp <= 2 ? "Two-Week" : "Four-week";
    helpRequestCount += currHelp;

    loadInitialGrades(grading, horsepowerGrade, "Horsepower");
    loadInitialGrades(grading, autonomyGrade, "Autonomy");

    promptEl.append(promptNum);
    promptEl.append(grading);
    problemBar.append(promptEl);
  }
}

//handles Text and grade bars for horsepower and autonomy

function loadInitialGrades(element, grade, title) {
  const gradeContainer = document.createElement("div");
  const gradeTitle = document.createElement("span");
  gradeContainer.className = "grade_container";
  gradeTitle.className = "gradeTitle";
  gradeTitle.innerText = title + ":";
  gradeContainer.append(gradeTitle);

  const classes = [
    "four-week grade_block",
    "two-week grade_block",
    "accept grade_block",
    "grade_type result",
  ];

  for (let i = 0; i < 4; i++) {
    const currEl = document.createElement("span");
    currEl.className = classes[i];
    gradeContainer.append(currEl);
  }

  if (grade === "Accept") {
    gradeContainer.children[4].classList.toggle("green-text");
  }

  if (grade === "Two-week") {
    gradeContainer.children[4].classList.toggle("yellow-text");
    gradeContainer.children[3].classList.toggle("accept");
  }

  if (grade === "Four-week") {
    gradeContainer.children[4].classList.toggle("red-text");
    gradeContainer.children[3].classList.toggle("accept");
    gradeContainer.children[2].classList.toggle("two-week");
  }

  gradeContainer.lastChild.innerText = grade;
  element.append(gradeContainer);
}

function loadAutonomy(element, data) {}

init();
