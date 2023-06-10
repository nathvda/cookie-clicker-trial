import { VALUES } from "./constants/VALUES.js";
import { displayScore } from "./displayScore.js";
import { numberDisplay } from "./numberDisplay.js";
import { UPGRADES } from "./constants/UPGRADES.js";
import { achievementHandler } from "./achievementHandler.js";
import { displayAchievements } from "./displayAchivements.js";

let totalScore = 1;

export function updateScore() {
    let clicvalue= 1;
    let addedValue = 1;
    score += clicvalue;
    totalScore += clicvalue;
    displayScore();
  
    let prodPerSec = 1;
    let prodPerSecWithBonus = 1
  
  setInterval(() => {

    let perSecond = document.getElementById("perSec");

    for (let elem of VALUES) {
      prodPerSec += elem.amount * elem.multiplier;
      prodPerSecWithBonus = prodPerSec + addedValue;
      score += prodPerSecWithBonus / 1000;
      totalScore += prodPerSecWithBonus / 1000;
    }
  
    let produ = numberDisplay(prodPerSecWithBonus);
    perSecond.innerText = `${produ.toLocaleString("en-IN", {
      maximumFractionDigits: 3,
    })} pirate coins per second`;
  
    for (let i = 0; i < VALUES.length; i++) {
      if (score < VALUES[i].price) {
        shop.children[i].classList.add("disabled");
      } else {
        shop.children[i].classList.remove("disabled");
      }
    }
  
    for (let i = 0; i < VALUES.length; i++) {
      if (totalScore >= VALUES[i].condition) {
        shop.children[i].classList.remove("hidden");
      } else {
      }
    }
  
    for (let i = 0; i < UPGRADES.length; i++) {
      if (VALUES[UPGRADES[i].target].amount >= UPGRADES[i].condition) {
        document.querySelectorAll(".upgrade")[i].style.display = "block";
      }
    }
  
    achievementHandler();
    displayAchievements();
  }, 1);
}