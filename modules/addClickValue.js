import { displayScore } from "./displayScore.js";
import { saveGame } from "./saveGame.js";

export function addClickValue(joueur){
        joueur.stats.score += joueur.stats.clicvalue;
        joueur.stats.totalScore += joueur.stats.clicvalue;
        saveGame(joueur);
        displayScore(joueur);
}