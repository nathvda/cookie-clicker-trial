import { ACHIEVEMENTS } from "../constants/ACHIEVEMENTS.js"
import { VALUES } from "../constants/VALUES.js"
import { UPGRADES } from "../constants/UPGRADES.js"

export let Player = {
        username: "Jack Sparrow",
        boatname: "Tiger Lily",
        startingDate: new Date(),
        stats: {
            frequencyBonus: 1,
            currentBonus: [],
            score: 0,
            totalScore: 0,
            prodPerSec: 0,
            clicvalue: 1,
            priceFactor:1.15,
            currentBonus:0,
            prodPerSecWithBonus:0,
            addedValue:0,
        },
        values: VALUES,
        upgrades: UPGRADES,
        achievements: ACHIEVEMENTS
    }
