import { achievementHandler } from "./modules/achievementHandler.js";
import { addClickValue } from "./modules/addClickValue.js";
import { displayAchievements } from "./modules/displayAchivements.js";
import { displayScore } from "./modules/displayScore.js";
import { loadGame } from "./modules/loadGame.js";
import { numberDisplay } from "./modules/numberDisplay.js";
import { resetGame } from "./modules/resetGame.js";
import { saveGame } from "./modules/saveGame.js";
import { updateScore } from "./modules/updateScore.js";

let Joueur = loadGame();

let mainClicker = document.getElementById("mainClicker");
let achievButton = document.getElementById("seeachievements");

achievementHandler(Joueur);
displayAchievements(Joueur);
updateScore(Joueur);
displayScore(Joueur);

setInterval(() => {
  createBonus(Joueur);
}, 1000 * Joueur.stats.frequencyBonus);

document.getElementById("reset").addEventListener("click", () => {
  resetGame(Joueur);
});

setInterval(() => {
  saveGame(Joueur);
}, 10000);

achievButton.addEventListener("click", () => {
  document.getElementById("achievements").classList.toggle("invisible");
});

mainClicker.addEventListener("click", () => {
  addClickValue(Joueur);
});

setInterval(() => {
  let titleinfo = numberDisplay(Joueur.stats.score);
  document.title =
    titleinfo.toLocaleString("en-IN", { maximumFractionDigits: 3 }) +
    " pirate coins - Pirate Coins Clicker";
}, 2000);
setInterval(displayScore(Joueur), 100);
