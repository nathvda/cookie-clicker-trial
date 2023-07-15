import { Player } from "./classes/Player.js";
import { createUpgrades } from "./createUpgrades.js";
import { displayAchievements } from "./displayAchivements.js";
import { displayScore } from "./displayScore.js";
import { displayValueList } from "./displayValueList.js";
import { saveGame } from "./saveGame.js";

export function loadGame() {
  let save = localStorage.getItem("gamesave");
  let stored = JSON.parse(save);

  if (!stored) {
    displayScore(Player);
    displayAchievements(Player);
    displayValueList(Player);
    createUpgrades(Player);
    saveGame(Player);
    return Player;
  } else {
    displayScore(stored);
    displayAchievements(stored);
    displayValueList(stored);
    createUpgrades(stored);
    saveGame(stored);
    return stored;
  }

  return stored;
}
