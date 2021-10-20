//Breakdown of skills by TAA and TAA prompt

export const weatherData = {
  TAA: "Weather",
  TAANum: 1,
  prompts: [
    {
      promptNum: 4,
      promptName: "Share Your Thinking",
      essentialSkills: ["Code Comprehension"],
      debugging: [],
      problemSolving: [],
      acceptTimeLimit: 300,
      twoWeekTimeLimit: 420,
    },
    {
      promptNum: 5,
      promptName: "Assertion Tests",
      essentialSkills: ["Function Knowledge"],
      debugging: [],
      problemSolving: [],
      acceptTimeLimit: 300,
      twoWeekTimeLimit: 420,
    },
    {
      promptNum: 7,
      promptName: "Filtering Temperatures - Debug",
      essentialSkills: ["Array Knowledge", "For Loops"],
      debugging: [
        "Intentional Console.logging",
        "Interpreting Error Messages",
        "Understands Bugs Before Making Changes",
        "Detailed Walkthrough",
      ],
      problemSolving: ["Prompt Comprehension"],
      acceptTimeLimit: 1000,
      twoWeekTimeLimit: 1180,
    },
    {
      promptNum: 9,
      promptName: "Get Temperature Data",
      essentialSkills: [
        "Dot versus Bracket Notation",
        "Object Knowledge",
        "Objects Versus Arrays",
        "Nested Structures Traversal",
        "Concatenation and Reassignment",
        "Data Types",
        "Execution Flow - variable assignment",
        "Execution Flow - conditionals assignment",
        "Execution Flow - return statements",

      ],
      debugging: [
        "Intentional Console.logging",
        "Interpreting Error Messages",
        "Understands Bugs Before Making Changes",
        "Detailed Walkthrough",
      ],
      problemSolving: [
        "Input Versus Output",
        "Pseudocode",
        "This time ",
        "Prompt Comprehension",
      ],
      acceptTimeLimit: 1500,
      twoWeekTimeLimit: 2000,
    },
  ],
};


//breakdown of description of skills

export const skillData = {
  "Code Comprehension": {
    description:
      "Ability to accurately read code, evaluating expressions as the interpreter, and describing high level purpose of code.",
    accept:
      "Recalls basic interpreter knowledge, especially that related to Execution Flow.Demonstrates by accurate explanation of code purpose (high level) and functionality.Requires demonstration of high level understanding of code.",
    twoWeek:
      "Recalls basic interpreter knowledge, especially that related to Execution Flow. Demonstrates by accurate explanation of code purpose (high level) and functionality. Requires demonstration of high level understanding of code",
      "four/six-week": "Wildly incorrect explanation of code execution.",
  },
};