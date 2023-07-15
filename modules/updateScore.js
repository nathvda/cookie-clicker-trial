import { achievementHandler } from "./achievementHandler.js";
import { displayAchievements } from "./displayAchivements.js";
import { displayScore } from "./displayScore.js";
import { numberDisplay } from "./numberDisplay.js";

export function updateScore(joueur) {
  setInterval(() => {
    let perSecond = document.getElementById("perSec");
    joueur.stats.prodPerSec = 0;
    joueur.stats.prodPerSecWithBonus = 0;

    for (let elem of joueur.values.filter((a) => a.type !== "clicker")) {
      joueur.stats.prodPerSec += elem.amount * elem.multiplier;
      joueur.stats.prodPerSecWithBonus =
        joueur.stats.prodPerSec + joueur.stats.addedValue;
      joueur.stats.score += joueur.stats.prodPerSecWithBonus / 1000;
      joueur.stats.totalScore += joueur.stats.prodPerSecWithBonus / 1000;
    }

    let produ = numberDisplay(joueur.stats.prodPerSecWithBonus);
    perSecond.innerText = `${produ.toLocaleString("en-IN", {
      maximumFractionDigits: 3,
    })} pirate coins per second`;

    for (let i = 0; i < joueur.values.length - 1; i++) {
      if (joueur.stats.score < joueur.values[i].price) {
        shop.children[i].classList.add("disabled");
      } else {
        shop.children[i].classList.remove("disabled");
      }
    }

    for (let i = 0; i < joueur.values.length; i++) {
      if (joueur.stats.totalScore >= joueur.values[i].condition) {
        shop.children[i].classList.remove("hidden");
      } else {
      }
    }

    for (let i = 0; i < joueur.upgrades.length; i++) {
      if (
        joueur.values[joueur.upgrades[i].target].amount >=
        joueur.upgrades[i].condition
      ) {
        document.querySelectorAll(".upgrade")[i].style.display = "block";
      }
    }

    displayScore(joueur);
    achievementHandler(joueur);
    displayAchievements(joueur);
  }, 1);
}
