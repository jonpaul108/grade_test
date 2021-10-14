import { gradeBars } from "./gradeBars.js";

export function singleColumnSkills(skills, sectionTitle, className, count) {
  const container = document.createElement("div");
  const title = document.createElement("div");
  title.className = "section_title";
  title.innerText = sectionTitle;
  container.className = className;
  container.append(title);

  let category;
  
  if (sectionTitle === "Debugging") {
    category = sectionTitle.toLowerCase();
  } else {
    const splitSection = sectionTitle.toLowerCase().split(" ");
    category =
      splitSection[0] +
      splitSection[1][0].toUpperCase() +
      splitSection[1].slice(1);
  }

  if (count === 0) {
    const nA = document.createElement("p");
    nA.innerText = "N/A";
    nA.className = "n_a";
    container.append(nA);
    return container;
  }

  for (const skill of skills) {
    const currSkill = document.createElement("div");
    const currTitle = document.createElement("span");
    const currBars = gradeBars();
    
    currTitle.innerText = skill;

    currSkill.setAttribute("data-skill", skill);
    currSkill.setAttribute("data-category", category);
    currSkill.classList.add("skill");
    currSkill.classList.add("flex_column");
    currTitle.classList.add("essential_skill_title");
    currBars.classList.add("skill_bars");

    currSkill.append(currTitle);
    currSkill.append(currBars);
    container.append(currSkill);
  }

  return container;
}
