import { VALUES } from "./constants/VALUES.js";
import { displayValueList } from "./displayValueList.js";

export function createUpgrades(joueur) {
    let upgrades = document.getElementById("upgrades");
    upgrades.textContent = "";
  
    for (let i = 0; i < joueur.upgrades.length; i++) {
      let upButton = document.createElement("button");
      upButton.setAttribute("id", `upgrade-${i}`);
      upButton.classList.add("upgrade");
  
      let upButtonText = document.createTextNode(
        `UNLOCK ${joueur.upgrades[i].name} FOR ${joueur.upgrades[i].price}`
      );
      upButton.appendChild(upButtonText);
  
      let upDescription = document.createElement("div");
      upDescription.classList.add("description");
  
      let upDescriptionText = document.createTextNode(
        `${joueur.upgrades[i].description}`
      );
      upDescription.appendChild(upDescriptionText);
      upButton.appendChild(upDescription);
  
      upgrades.appendChild(upButton);
  
      if (joueur.upgrades[i].purchased == true) {
        upButton.classList.add("unlocked");
        upButton.style.display = "block";
      } else if (joueur.upgrades[i].condition == true) {
        upButton.classList.add("unavailable");
        upButton.style.display = "block";
      } else {
        upButton.classList.add("locked");
        upButton.style.display = "none";
      }
  
      upButton.addEventListener("click", () => {
        if (joueur.upgrades[i].price >= joueur.stats.score) {
          console.log("too expensive");
        } else if (joueur.upgrades[i].purchased === true) {
          console.log("déja achetée");
        } else {
          joueur.stats.score -= joueur.upgrades[i].price;
  
          joueur.upgrades[i].purchased = true;
  
          if (joueur.upgrades[i].type === "building") {
            VALUES[`${joueur.upgrades[i].target}`].multiplier =
              VALUES[`${joueur.upgrades[i].target}`].multiplier * joueur.upgrades[i].effect;
            VALUES[`${joueur.upgrades[i].target}`].multiplier = parseFloat(
              VALUES[`${joueur.upgrades[i].target}`].multiplier
            );
          } else if (joueur.upgrades[i].type === "clickers") {
            clicvalue += joueur.upgrades[i].effect;
          }
  
          upButton.classList.remove("locked");
          upButton.classList.add("unlocked");
  
          displayValueList(joueur);
        }
      });
    }
  }