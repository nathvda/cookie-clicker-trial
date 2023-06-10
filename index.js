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
import { saveGame } from "./modules/saveGame.js";
import { updateScore } from "./modules/updateScore.js";
import { loadGame } from "./modules/loadGame.js";
import { numberDisplay } from "./modules/numberDisplay.js";

let score = 0;
let prodPerSec = 0;
let totalScore = 0;
let priceFactor = 1.15;
let CurrentBonus = 0;
let prodPerSecWithBonus = 0;
let addedValue = 0;

let shop = document.getElementById("shop");
let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let achievButton = document.getElementById("seeachievements");

upgradeStack()
const idk = new BonusGenerator("coucou","bye")
console.log(idk)

const complicated = new UpdateScoreController()
console.log(complicated.getScore())

achievementHandler()
displayAchievements()
displayScore()

document.getElementById('reset').addEventListener('click', resetGame)

const newPlayer = new Player('Captain Clarke', 'Dilly Wally', new Date())

displayValueList(newPlayer)

saveGame(newPlayer)
updateScore()
setInterval(saveGame, 10000);

achievButton.addEventListener("click", () => {
  document.getElementById("achievements").classList.toggle("invisible");
});

mainClicker.addEventListener("click", updateScore);

window.addEventListener("load", loadGame);

setInterval(() => {
  let titleinfo = numberDisplay(score);
  document.title =
    titleinfo.toLocaleString("en-IN", { maximumFractionDigits: 3 }) +
    " pirate coins - Pirate Coins Clicker";
}, 2000);
setInterval(displayScore, 100);
