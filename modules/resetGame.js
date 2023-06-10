import { saveGame } from "./saveGame.js";
import { displayAchievements } from "./displayAchivements.js";
import { displayValueList } from "./displayValueList.js";
import { createUpgrades } from "./createUpgrades.js";
import { displayScore } from "./displayScore.js";
import { Player } from "./classes/Player.js";
import { loadGame } from "./loadGame.js";

export function resetGame(joueur) {
    let reset = confirm("Are you sure you want to reset?");
    if (reset == true) {
      joueur = Player
  
      saveGame(joueur);
      loadGame(joueur);
      displayScore(joueur);
      displayAchievements(joueur);
      displayValueList(joueur);
      createUpgrades(joueur);

    } else {
      console.log("Reset annulé");
    }
  }