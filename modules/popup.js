export function PopIt(message, title) {
  let element = document.createElement("p");
  let elementText = document.createTextNode(message);
  let elementTitle = document.createElement("h3");
  let elementTitleText = document.createTextNode(title);
  element.classList.add("popup_achiev");
  elementTitle.appendChild(elementTitleText);
  element.appendChild(elementTitle);
  element.appendChild(elementText);
  document.body.appendChild(element);
  setTimeout(() => {
    element.remove();
  }, 8000);
  element.addEventListener("click", (e) => {
    element.remove();
  });
}
