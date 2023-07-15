import { PopIt } from "./popup.js";

export function achievementHandler(joueur) {
  for (let i = 0; i < joueur.achievements.length; i++) {
    if (joueur.achievements[i].type == "totalscore") {
      if (
        joueur.stats.totalScore >= joueur.achievements[i].condition &&
        joueur.achievements[i].announced === false
      ) {
        joueur.achievements[i].announced = true;
        PopIt(joueur.achievements[i].description);
      } else {
        //
      }
    }
  }
}
