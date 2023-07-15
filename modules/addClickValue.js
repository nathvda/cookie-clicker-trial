import { displayScore } from "./displayScore.js";
import { saveGame } from "./saveGame.js";

export function addClickValue(joueur) {
  let clickValue = computeClickValue(joueur);
  joueur.stats.score += joueur.stats.clicvalue;
  joueur.stats.totalScore += joueur.stats.clicvalue;
  saveGame(joueur);
  displayScore(joueur);
}
