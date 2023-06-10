export function PopIt() {
  let element = document.createElement("p");
  let elementText = document.createTextNode("Youhou");
  element.classList.add('popup_achiev');
  element.appendChild(elementText);
  document.body.appendChild(element);
  setTimeout(() => {
    element.remove()
  },3000)
}
