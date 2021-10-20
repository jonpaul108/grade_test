import { gradeBars } from "./gradeBars.js";

export function essentialSkills(skills) {
  const container = document.createElement("div");
  const title = document.createElement("div");

  container.className = 'essential_skill-container';
  title.className = "section_title";
  title.innerText = "Essential Skills";

    container.append(title);
  
  for (const skill of skills) {
    const currSkill = document.createElement("div");
    const currTitle = document.createElement("span");
    const currBars = gradeBars();

    currTitle.innerText = skill;

    currSkill.setAttribute("data-skill", skill);
    currSkill.setAttribute("data-category", "essentialSkills");
    currSkill.classList.add("skill")
    currSkill.classList.add("flex_column");
    currTitle.classList.add("essential_skill_title");
    currBars.classList.add('skill_bars');
  
    currSkill.append(currTitle);
    currSkill.append(currBars);
    container.append(currSkill);
  }


  return container;
}


