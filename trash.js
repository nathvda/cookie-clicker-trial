
/** let VALUES;
let UPGRADES;
let ACHIEVEMENTS;
let SETTINGS;

let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let shop = document.getElementById("shop");
let achivBox = document.getElementById("achievements");
let scoreBox = document.getElementById("score");
let perSecond = document.getElementById("perSec");
let achievButton = document.getElementById("seeachievements");

let clicvalue = 1;
let score = 0;
let prodPerSec = 0;
let totalScore = 0;
let priceFactor = 1.15;
let CurrentBonus = 0;
let FrequencyBonus = 1;
let prodPerSecWithBonus = 0;
let addedValue = 0; */

function setDefault() {
  
    console.log(VALUES)
    console.log(UPGRADES)
  
   /** SETTINGS = {
      boatname: "Destiny",
    };
    */
  }
  
  setDefault()
  /**
  setDefault();
  setInterval(saveGame, 1000);
  setInterval(() => {
    let titleinfo = numberDisplay(score);
    document.title =
      titleinfo.toLocaleString("en-IN", { maximumFractionDigits: 3 }) +
      " pirate coins - Pirate Coins Clicker";
  }, 2000);
  setInterval(displayScore, 100);
  
  window.addEventListener("load", loadGame);
  achievButton.addEventListener("click", () => {
    document.getElementById("achievements").classList.toggle("invisible");
  });
  mainClicker.addEventListener("click", updateScore);
  
  function saveGame() {
    localStorage.setItem("score", score);
    localStorage.setItem("totalscore", totalScore);
    localStorage.setItem("valeurs", JSON.stringify(VALUES));
    localStorage.setItem("upgrades", JSON.stringify(UPGRADES));
    localStorage.setItem("achievements", JSON.stringify(ACHIEVEMENTS));
    console.log("partie sauvegardée");
  }
  
  function loadGame() {
    let valeurs = localStorage.getItem("valeurs");
    let stored = JSON.parse(valeurs);
    if (stored !== null) {
      VALUES = stored;
    }
  
    let amelio = localStorage.getItem("upgrades");
    let storedAme = JSON.parse(amelio);
    if (storedAme !== null) {
      UPGRADES = storedAme;
    }
  
    let achiv = localStorage.getItem("achievements");
    let storedachiv = JSON.parse(achiv);
    if (storedachiv !== null) {
      ACHIEVEMENTS = storedachiv;
    }
  
    let saved = localStorage.getItem("score");
    let totalsaved = localStorage.getItem("totalscore");
    score = Number(saved);
    totalScore = Number(totalsaved);
  
    displayScore();
    displayAchievements();
    createButtons();
    createUpgrades();
  }
  
  function createUpgrades() {
    upgrades.textContent = "";
  
    for (let i = 0; i < UPGRADES.length; i++) {
      let upButton = document.createElement("button");
      upButton.setAttribute("id", `upgrade-${i}`);
      upButton.classList.add("upgrade");
  
      let upButtonText = document.createTextNode(
        `UNLOCK ${UPGRADES[i].name} FOR ${UPGRADES[i].price}`
      );
      upButton.appendChild(upButtonText);
  
      let upDescription = document.createElement("div");
      upDescription.classList.add("description");
  
      let upDescriptionText = document.createTextNode(
        `${UPGRADES[i].description}`
      );
      upDescription.appendChild(upDescriptionText);
      upButton.appendChild(upDescription);
  
      upgrades.appendChild(upButton);
  
      if (UPGRADES[i].purchased == true) {
        upButton.classList.add("unlocked");
        upButton.style.display = "block";
      } else if (UPGRADES[i].condition == true) {
        upButton.classList.add("unavailable");
        upButton.style.display = "block";
      } else {
        upButton.classList.add("locked");
        upButton.style.display = "none";
      }
  
      upButton.addEventListener("click", () => {
        if (UPGRADES[i].price >= score) {
          console.log("too expensive");
        } else if (UPGRADES[i].purchased === true) {
          console.log("déja achetée");
        } else {
          score -= UPGRADES[i].price;
  
          UPGRADES[i].purchased = true;
  
          if (UPGRADES[i].type === "building") {
            VALUES[`${UPGRADES[i].target}`].multiplier =
              VALUES[`${UPGRADES[i].target}`].multiplier * UPGRADES[i].effect;
            VALUES[`${UPGRADES[i].target}`].multiplier = parseFloat(
              VALUES[`${UPGRADES[i].target}`].multiplier
            );
          } else if (UPGRADES[i].type === "clickers") {
            clicvalue += UPGRADES[i].effect;
          }
  
          upButton.classList.remove("locked");
          upButton.classList.add("unlocked");
  
          createButtons();
        }
      });
    }
  }
  
  
  
  function updateScore() {
    score += clicvalue;
    totalScore += clicvalue;
  
    displayScore();
  }
  
  setInterval(() => {
    prodPerSec = 0;
  
    for (let elem of VALUES) {
      prodPerSec += elem.amount * elem.multiplier;
      prodPerSecWithBonus = prodPerSec + addedValue;
      score += prodPerSecWithBonus / 1000;
      totalScore += prodPerSecWithBonus / 1000;
    }
  
    let produ = numberDisplay(prodPerSecWithBonus);
    perSecond.innerText = `${produ.toLocaleString("en-IN", {
      maximumFractionDigits: 3,
    })} pirate coins per second`;
  
    for (let i = 0; i < VALUES.length; i++) {
      if (score < VALUES[i].price) {
        shop.children[i].classList.add("disabled");
      } else {
        shop.children[i].classList.remove("disabled");
      }
    }
  
    for (let i = 0; i < VALUES.length; i++) {
      if (totalScore >= VALUES[i].condition) {
        shop.children[i].classList.remove("hidden");
      } else {
      }
    }
  
    for (let i = 0; i < UPGRADES.length; i++) {
      if (VALUES[UPGRADES[i].target].amount >= UPGRADES[i].condition) {
        document.querySelectorAll(".upgrade")[i].style.display = "block";
      }
    }
  
    achievementHandler();
    displayAchievements();
  }, 1);
  
  function displayScore() {
    let woops = numberDisplay(score);
    scoreBox.innerText = `${woops} pirate coins`;
  
    document.getElementById(
      "valeurclic"
    ).innerHTML = `valeur de clic ${clicvalue}`;
    document.getElementById(
      "valeurbonus"
    ).innerHTML = `valeur de bonus ${CurrentBonus}`;
  }
  
  function displayAchievements() {
    achivBox.innerHTML = "";
  
    for (elem of ACHIEVEMENTS) {
      let duh = document.createElement("div");
      duh.classList.add("achievementItem");
      let achivImg = document.createElement("img");
      achivImg.classList.add("achievementimg");
  
      if (elem.announced === true) {
        achivImg.src = elem.url;
      } else {
        achivImg.src = "./assets/Gumlins.png";
      }
  
      let achiDescription = document.createElement("div");
      achiDescription.classList.add("description");
  
      let achiDescriptionText = document.createTextNode(`${elem.description}`);
      achiDescription.appendChild(achiDescriptionText);
      duh.appendChild(achiDescription);
  
      duh.appendChild(achivImg);
      achivBox.appendChild(duh);
    }
  }
  
  
  
  function achievementHandler() {
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      if (ACHIEVEMENTS[i].type == "totalscore") {
        if (
          totalScore >= ACHIEVEMENTS[i].condition &&
          ACHIEVEMENTS[i].announced === false
        ) {
          alert(ACHIEVEMENTS[i].description);
          ACHIEVEMENTS[i].announced = true;
        } else {
          //
        }
      }
    }
  }
  
  displayAchievements();
  achievementHandler();
  spawnBonus();
  
  function spawnBonus() {
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
      }, 8000 * FrequencyBonus);
    }, (60 * 1000) / FrequencyBonus);
  }
  
  function bonusTime() {
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
  }*/
  
  