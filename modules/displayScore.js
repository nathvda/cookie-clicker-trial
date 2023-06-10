import { numberDisplay } from "./numberDisplay.js";

let clicvalue = 1;


export function displayScore() {
    let CurrentBonus = 0;
    let woops = numberDisplay(score);
    let scoreBox = document.getElementById("score");
    scoreBox.innerText = `${woops} pirate coins`;
  
    document.getElementById(
      "valeurclic"
    ).innerHTML = `valeur de clic ${clicvalue}`;
    document.getElementById(
      "valeurbonus"
    ).innerHTML = `valeur de bonus ${CurrentBonus}`;
  }