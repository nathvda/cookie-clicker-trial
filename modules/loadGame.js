import { displayScore } from "./displayScore.js";
import { displayValueList } from "./displayValueList.js";
import { displayAchievements } from "./displayAchivements.js";
import { createUpgrades } from "./createUpgrades.js";
import { Player } from "./classes/Player.js";
import { saveGame } from "./saveGame.js";

export function loadGame() {
    let save = localStorage.getItem("gamesave");
    let stored = JSON.parse(save);
    console.log(stored);

    if (!stored) {
        displayScore(Player);
        displayAchievements(Player);
        displayValueList(Player);
        createUpgrades(Player);
        saveGame(Player)
        return Player
    } else {
        displayScore(stored);
        displayAchievements(stored);
        displayValueList(stored);
        createUpgrades(stored);
        saveGame(Player)
        return stored
    }
        
   

    return stored;
  

  }