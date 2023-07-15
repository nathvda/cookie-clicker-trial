export function PopIt(message) {
  let element = document.createElement("p");
  let elementText = document.createTextNode(message);
  element.classList.add("popup_achiev");
  element.appendChild(elementText);
  document.body.appendChild(element);
  setTimeout(() => {
    element.remove();
  }, 8000);
}
