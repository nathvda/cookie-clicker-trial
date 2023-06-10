import { numberDisplay } from "./numberDisplay.js";

export function displayScore(joueur) {
    let woops = numberDisplay(Number(joueur.stats.score));
    let scoreBox = document.getElementById("score");
    scoreBox.innerText = `${woops} pirate coins`;
    document.getElementById(
      "valeurclic"
    ).innerHTML = `valeur de clic ${joueur.stats.clicvalue}`;
    document.getElementById(
      "valeurbonus"
    ).innerHTML = `valeur de bonus ${joueur.stats.currentBonus}`;
  }