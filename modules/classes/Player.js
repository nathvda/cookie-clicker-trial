import { ACHIEVEMENTS } from "../constants/ACHIEVEMENTS.js"
import { VALUES } from "../constants/VALUES.js"
import { UPGRADES } from "../constants/UPGRADES.js"
export class Player {
    constructor(username,boatname,startingDate) {
        this.username = username,
        this.boatname = boatname
        this.startingDate = startingDate
        this.stats = {
            FrequencyBonus: 1,
            CurrentBonus: []
        }
        this.values = VALUES,
        this.upgrades = UPGRADES,
        this.achievements = ACHIEVEMENTS

    }
}