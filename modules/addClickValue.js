import { computeClickValue } from "./computeClickValue.js";
import { displayScore } from "./displayScore.js";
import { saveGame } from "./saveGame.js";

export function addClickValue(joueur) {
  let clickValue = computeClickValue(joueur);
  joueur.stats.score += clickValue;
  joueur.stats.totalScore += clickValue;
  saveGame(joueur);
  displayScore(joueur);
}
