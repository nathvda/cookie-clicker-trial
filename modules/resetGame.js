import { setDefault } from "./setDefault.js";
import { saveGame } from "./saveGame.js";
import { displayAchievements } from "./displayAchivements.js";
import { displayValueList } from "./displayValueList.js";
import { createUpgrades } from "./createUpgrades.js";

export function resetGame() {
    let reset = confirm("Are you sure you want to reset?");
    if (reset == true) {
      let score = 0;
      let totalScore = 0;
  
      setDefault();
      saveGame();
      displayAchievements();
      displayValueList();
      createUpgrades();
    } else {
      console.log("Reset annulé");
    }
  }