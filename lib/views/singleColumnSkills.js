import { gradeBars } from "./gradeBars.js";

export function singleColumnSkills(skills, sectionTitle, className) {
  const container = document.createElement("div");
  const title = document.createElement("div");
  title.className = "section_title";
  title.innerText = sectionTitle;
  container.className = className;
  container.append(title);

  for (const skill of skills) {
    const currSkill = document.createElement("div");
    const currTitle = document.createElement("span");
    const currBars = gradeBars();

    currTitle.innerText = skill;

    currSkill.setAttribute("data-skill", skill);
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
