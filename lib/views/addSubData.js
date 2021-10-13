export function addSubData(element, title, data) {
  const p = document.createElement("p");
  p.className = "sub_data";
  p.innerText = `${title}: ${data}`;
  element.append(p);
}
