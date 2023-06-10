import { displayScore } from "./displayScore.js";
import { displayValueList } from "./displayValueList.js";
import { displayAchievements } from "./displayAchivements.js";
import { createUpgrades } from "./createUpgrades.js";

let totalScore = 0;

export function loadGame() {
    let save = localStorage.getItem("gamesave");
    let stored = JSON.parse(save);
    console.log(stored)
    if (stored !== null) {
      let VALUES = stored.VALUES;
    }
  
    let amelio = localStorage.getItem("upgrades");
    let storedAme = JSON.parse(amelio);
    if (storedAme !== null) {
      UPGRADES = storedAme;
    }
  
    let achiv = localStorage.getItem("achievements");
    let storedachiv = JSON.parse(achiv);
    if (storedachiv !== null) {
      ACHIEVEMENTS = storedachiv;
    }
  
    let saved = localStorage.getItem("score");
    let totalsaved = localStorage.getItem("totalscore");
    score = Number(saved);
    totalScore = Number(totalsaved);
  
    displayScore();
    displayAchievements();
    displayValueList();
    createUpgrades();
  }