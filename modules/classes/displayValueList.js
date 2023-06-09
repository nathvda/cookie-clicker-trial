import { VALUES } from "../constants/VALUES.js";
import { numberDisplay } from "../numberDisplay.js";

export function displayValueList () {
    console.log("it is working")

        shop.textContent = "";
      
        for (let i = 0; i < VALUES.length; i++) {
          let element = document.createElement("button");
          element.setAttribute("id", `controller-${i}`);
          element.classList.add("controller", "disabled", "hidden");
          element.style.backgroundImage = `url("${VALUES[i].background}")`;
          let elementName = document.createElement("span");
          elementName.classList.add("multname");
          let elementNameText = document.createTextNode(`${VALUES[i].name}`);
          let elementValeur = document.createElement("span");
          elementValeur.classList.add("valeur");
          let elementValeurText = document.createTextNode(`${VALUES[i].multiplier}`);
          let elementCont = document.createElement("span");
          elementCont.classList.add("cont");
          elementCont.setAttribute("id", `cont-${1}`);
          let elementContText = document.createTextNode(`${VALUES[i].amount}`);
          let elementPrice = document.createElement("span");
          elementPrice.classList.add("prix");
          elementPrice.setAttribute("id", `prix-${1}`);
          let woup = numberDisplay(VALUES[i].price);
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
            if (score >= VALUES[i].price) {
              VALUES[i].amount++;
              score -= VALUES[i].price;
              displayScore();
              elementCont.innerText = `${VALUES[i].amount}`;
              VALUES[i].price = VALUES[i].baseprice * priceFactor ** VALUES[i].amount;
              VALUES[i].price = Math.ceil(VALUES[i].price);
              let woup = numberDisplay(VALUES[i].price);
              elementPrice.innerText = `${woup}`;
              localStorage.setItem("valeurs", JSON.stringify(VALUES));
              if (score < VALUES[i].price) {
                element.classList.add("disabled");
              } else {
                element.classList.remove("disabled");
              }
            } else {
              console.log("Can't buy that");
            }
          });
      
          shop.appendChild(element);
        }
      }
