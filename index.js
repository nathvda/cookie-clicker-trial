import upgradeStack from "./modules/upgrades.js";
import { BonusGenerator } from "./modules/classes/bonusGenerator.js";
import { VALUES } from "./modules/constants/VALUES.js";
import { UPGRADES } from "./modules/constants/UPGRADES.js";
import { ACHIEVEMENTS } from "./modules/constants/ACHIEVEMENTS.js";
import { UpdateScoreController } from "./modules/controller/updateScoreController.js";
import { displayValueList } from "./modules/classes/displayValueList.js";
import { resetGame } from "./modules/resetGame.js";

upgradeStack()
const idk = new BonusGenerator("coucou","bye")
console.log(idk)

const complicated = new UpdateScoreController()
console.log(complicated.getScore())

displayValueList()

document.getElementById('reset').addEventListener('click', resetGame)