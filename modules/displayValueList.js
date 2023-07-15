import { displayScore } from "./displayScore.js";
import { numberDisplay } from "./numberDisplay.js";
import { saveGame } from "./saveGame.js";

export function displayValueList(joueur) {
  shop.textContent = "";

  console.log(joueur.stats.score);

  for (let i = 0; i < joueur.values.length; i++) {
    let element = document.createElement("button");
    element.setAttribute("id", `controller-${i}`);
    element.classList.add("controller", "disabled", "hidden");
    element.style.backgroundImage = `url("${joueur.values[i].background}")`;
    let elementName = document.createElement("span");
    elementName.classList.add("multname");
    let elementNameText = document.createTextNode(`${joueur.values[i].name}`);
    let elementValeur = document.createElement("span");
    elementValeur.classList.add("valeur");
    let elementValeurText = document.createTextNode(
      `${joueur.values[i].multiplier}`
    );
    let elementCont = document.createElement("span");
    elementCont.classList.add("cont");
    elementCont.setAttribute("id", `cont-${1}`);
    let elementContText = document.createTextNode(`${joueur.values[i].amount}`);
    let elementPrice = document.createElement("span");
    elementPrice.classList.add("prix");
    elementPrice.setAttribute("id", `prix-${i}`);
    let woup = numberDisplay(joueur.values[i].price);
    let elementPriceText = document.createTextNode(`${woup}`);

    elementName.appendChild(elementNameText);
    elementValeur.appendChild(elementValeurText);
    elementCont.appendChild(elementContText);
    elementPrice.appendChild(elementPriceText);
    element.appendChild(elementName);
    element.appendChild(elementValeur);
    element.appendChild(elementCont);
    element.appendChild(elementPrice);

    element.addEventListener("click", () => {
      if (joueur.stats.score >= joueur.values[i].price) {
        joueur.values[i].amount += 1;
        joueur.stats.score -= joueur.values[i].price;
        elementCont.innerText = `${joueur.values[i].amount}`;
        joueur.values[i].price =
          joueur.values[i].baseprice *
          joueur.stats.priceFactor ** joueur.values[i].amount;
        joueur.values[i].price = Math.ceil(joueur.values[i].price);
        let woup = numberDisplay(joueur.values[i].price);
        elementPrice.innerText = `${woup}`;
        saveGame(joueur);

        if (joueur.stats.score < joueur.values[i].price) {
          element.classList.add("disabled");
        } else {
          element.classList.remove("disabled");
        }
        displayScore(joueur);
        console.log(joueur.values);
      } else {
        console.log("Can't buy that");
        console.log(joueur.stats.score);
      }
    });

    shop.appendChild(element);
  }
}
