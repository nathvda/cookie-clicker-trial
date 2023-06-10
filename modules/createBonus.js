import { bonusTime } from "./bonusTimes.js";
import { Player } from "./classes/Player.js";

export function createBonus() {
    setInterval(() => {
      let bonus = document.createElement("button");
      bonus.classList.add("bonusButton");
      bonus.width = 300;
      bonus.height = 200;
      bonus.style.left = `${Math.random() * window.innerWidth}px`;
      bonus.style.top = `${Math.random() * window.innerHeight}px`;
      document.body.appendChild(bonus);
  
      bonus.addEventListener("click", () => {
        bonus.remove();
        bonusTime();
      });
  
      setTimeout(() => {
        bonus.remove();
      }, 8000 * Player.FrequencyBonus);
    }, (60 * 1000) / Player.FrequencyBonus);
  }