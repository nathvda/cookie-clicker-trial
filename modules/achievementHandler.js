import { ACHIEVEMENTS } from "./constants/ACHIEVEMENTS.js";

export function achievementHandler() {
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      if (ACHIEVEMENTS[i].type == "totalscore") {
        if (
          totalScore >= ACHIEVEMENTS[i].condition &&
          ACHIEVEMENTS[i].announced === false
        ) {
          alert(ACHIEVEMENTS[i].description);
          ACHIEVEMENTS[i].announced = true;
        } else {
          //
        }
      }
    }
  }