export function bonusTime() {
    let BONUSES = ["pirate", "random", "boost"];
  
    let bonusRand = Math.floor(Math.random() * BONUSES.length);
  
    if (BONUSES[bonusRand] == "pirate") {
      alert("Lucky ! Your CpS  is multiplied by 777 for 30 secs");
      addedValue += prodPerSec * 776;
  
      setTimeout(() => {
        addedValue -= prodPerSec * 776;
      }, 30 * 1000 * FrequencyBonus);
    } else if (BONUSES[bonusRand] == "random") {
      let random = Math.floor(Math.random() * VALUES.length);
      console.log(random);
  
      if (VALUES[random].amount === 0) {
        bonusTime();
      } else {
        console.log(VALUES[random].amount);
        let bonus = VALUES[random].amount * 10;
        CurrentBonus += bonus;
        addedValue += (prodPerSec / 100) * (VALUES[random].amount * 10);
        alert(
          `Wow, your ${VALUES[random].name} are in a frenzy, your coins per second are increased by ${bonus}% for 30 seconds`
        );
        console.log("Bonus:" + CurrentBonus);
  
        setTimeout(() => {
          CurrentBonus -= bonus;
        }, 30 * 1000 * FrequencyBonus);
      }
    }
  }