import { UPGRADES } from "./constants/UPGRADES.js";
import { VALUES } from "./constants/VALUES.js";
import { displayValueList } from "./displayValueList.js";

export function createUpgrades() {
    let upgrades = document.getElementById("upgrades");
    upgrades.textContent = "";
  
    for (let i = 0; i < UPGRADES.length; i++) {
      let upButton = document.createElement("button");
      upButton.setAttribute("id", `upgrade-${i}`);
      upButton.classList.add("upgrade");
  
      let upButtonText = document.createTextNode(
        `UNLOCK ${UPGRADES[i].name} FOR ${UPGRADES[i].price}`
      );
      upButton.appendChild(upButtonText);
  
      let upDescription = document.createElement("div");
      upDescription.classList.add("description");
  
      let upDescriptionText = document.createTextNode(
        `${UPGRADES[i].description}`
      );
      upDescription.appendChild(upDescriptionText);
      upButton.appendChild(upDescription);
  
      upgrades.appendChild(upButton);
  
      if (UPGRADES[i].purchased == true) {
        upButton.classList.add("unlocked");
        upButton.style.display = "block";
      } else if (UPGRADES[i].condition == true) {
        upButton.classList.add("unavailable");
        upButton.style.display = "block";
      } else {
        upButton.classList.add("locked");
        upButton.style.display = "none";
      }
  
      upButton.addEventListener("click", () => {
        if (UPGRADES[i].price >= score) {
          console.log("too expensive");
        } else if (UPGRADES[i].purchased === true) {
          console.log("déja achetée");
        } else {
          score -= UPGRADES[i].price;
  
          UPGRADES[i].purchased = true;
  
          if (UPGRADES[i].type === "building") {
            VALUES[`${UPGRADES[i].target}`].multiplier =
              VALUES[`${UPGRADES[i].target}`].multiplier * UPGRADES[i].effect;
            VALUES[`${UPGRADES[i].target}`].multiplier = parseFloat(
              VALUES[`${UPGRADES[i].target}`].multiplier
            );
          } else if (UPGRADES[i].type === "clickers") {
            clicvalue += UPGRADES[i].effect;
          }
  
          upButton.classList.remove("locked");
          upButton.classList.add("unlocked");
  
          displayValueList();
        }
      });
    }
  }