export function addTitle(element, title) {
  const p = document.createElement("p");
  p.className = "skill_title";
  p.innerText = title;
  element.append(p);
}
