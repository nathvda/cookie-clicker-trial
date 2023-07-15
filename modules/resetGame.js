import { Player } from "./classes/Player.js";
import { createUpgrades } from "./createUpgrades.js";
import { displayAchievements } from "./displayAchivements.js";
import { displayScore } from "./displayScore.js";
import { displayValueList } from "./displayValueList.js";
import { loadGame } from "./loadGame.js";
import { saveGame } from "./saveGame.js";

export function resetGame(joueur) {
  let reset = confirm("Are you sure you want to reset?");
  if (reset == true) {
    joueur = Player;
    localStorage.removeItem("gamesave");

    saveGame(joueur);
    loadGame(joueur);
    displayScore(joueur);
    displayAchievements(joueur);
    displayValueList(joueur);
    createUpgrades(joueur);
    window.location.reload();
  } else {
    console.log("Reset annulé");
  }
}
