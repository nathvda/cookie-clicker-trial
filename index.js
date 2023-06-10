import upgradeStack from "./modules/upgrades.js";
import { BonusGenerator } from "./modules/classes/bonusGenerator.js";
import { VALUES } from "./modules/constants/VALUES.js";
import { UPGRADES } from "./modules/constants/UPGRADES.js";
import { ACHIEVEMENTS } from "./modules/constants/ACHIEVEMENTS.js";
import { UpdateScoreController } from "./modules/controller/updateScoreController.js";
import { displayValueList } from "./modules/displayValueList.js";
import { resetGame } from "./modules/resetGame.js";
import { Player } from "./modules/classes/Player.js";
import { createBonus } from "./modules/createBonus.js";
import { achievementHandler } from "./modules/achievementHandler.js";
import { displayAchievements } from "./modules/displayAchivements.js";
import { displayScore } from "./modules/displayScore.js";

let shop = document.getElementById("shop");
 
upgradeStack()
const idk = new BonusGenerator("coucou","bye")
console.log(idk)

const complicated = new UpdateScoreController()
console.log(complicated.getScore())

achievementHandler()
displayAchievements()
displayValueList()
createBonus()
displayScore()

document.getElementById('reset').addEventListener('click', resetGame)

const newPlayer = new Player('Captain Clarke', 'Dilly Wally', new Date())

