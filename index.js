let VALUES;
let UPGRADES;
let ACHIEVEMENTS;

let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let shop = document.getElementById("shop");
let achivBox = document.getElementById("achievements");
let scoreBox = document.getElementById("score");
let perSecond = document.getElementById("perSec");

let clicvalue = 1;
let score = 0;
let prodPerSec = 0;
let totalScore = 0;
let priceFactor = 1.15;
let CurrentBonus = 0;
let FrequencyBonus = 1;

function setDefault() {

  VALUES = [
    {
      name: "San",
      amount: 0,
      condition: 0,
      multiplier: 0.1,
      baseprice: 15,
      price: 15,
      background: "./assets2/Gumlins.png",
      description: "San's capacity to dance forever.",
    },
    {
      name: "Hongjoong",
      amount: 0,
      condition: 0,
      multiplier: 1,
      baseprice: 100,
      price: 100,
      background: "./assets2/SuperGumlins.png",
    },
    {
      name: "Jongho",
      amount: 0,
      condition: 1100,
      multiplier: 8,
      baseprice: 1100,
      price: 1100,
      background: "./assets2/HyperGumlins.png",
    },
    {
      name: "Yeosang",
      amount: 0,
      condition: 12000,
      multiplier: 47,
      baseprice: 12000,
      price: 12000,
      background: "./assets2/MetaGumlins.png",
    },
    {
      name: "Yunho",
      amount: 0,
      condition: 130000,
      multiplier: 260,
      baseprice: 130000,
      price: 130000,
      background: "./assets2/TetaGumlins.png",
    },
    {
      name: "Seonghwa",
      amount: 0,
      condition: 1400000,
      multiplier: 1400,
      baseprice: 1400000,
      price: 1400000,
      background: "./assets2/GigaGumlins.png",
    },
    {
      name: "Mingi",
      amount: 0,
      condition: 20000000,
      multiplier: 44000,
      baseprice: 20000000,
      price: 20000000,
      background: "./assets2/SupraGumlins.png",
    },
    {
      name: "Wooyoung",
      amount: 0,
      condition: 330000000,
      multiplier: 260000,
      baseprice: 330000000,
      price: 330000000,
      background: "./assets2/UltimateGumlins.png",
    },
    {
      name: "Chromer",
      amount: 0,
      condition: 5100000000,
      multiplier: 1.6 * 10 ** 6,
      baseprice: 5100000000,
      price: 5100000000,
      background: "./assets2/Chromer.png",
    },
    {
      name: "Hala San",
      amount: 0,
      condition: 75000000000,
      multiplier: 10 * 10 ** 6,
      baseprice: 75000000000,
      price: 75000000000,
      background: "./assets2/HalaSan.png",
    },
    {
      name: "Hala Hongjoong",
      amount: 0,
      condition: 1000000000000,
      multiplier: 65 * 10 ** 6,
      baseprice: 1000000000000,
      price: 1000000000000,
      background: "./assets2/HalaHongjoong.png",
    },
    {
      name: "Hala Jongho",
      amount: 0,
      condition: 14000000000000,
      multiplier: 430 * 10 ** 6,
      baseprice: 14000000000000,
      price: 14000000000000,
      background: "./assets2/HalaJongho.png",
    },
    {
      name: "Hala Yeosang",
      amount: 0,
      condition: 170000000000000,
      multiplier: 2.9 * 10 ** 9,
      baseprice: 170000000000000,
      price: 170000000000000,
      background: "./assets2/HalaYeosang.png",
    },
    {
      name: "Hala Yunho",
      amount: 0,
      condition: 2.1 * 10 ** 15,
      multiplier: 21 * 10 ** 9,
      baseprice: 170000000000000,
      price: 2.1 * 10 ** 15,
      background: "./assets2/HalaYunho.png",
    },
    {
      name: "Hala Seonghwa",
      amount: 0,
      condition: 2.6 * 10 ** 15,
      multiplier: 150 * 10 ** 9,
      baseprice: 2.6 * 10 ** 15,
      price: 2.6 * 10 ** 15,
      background: "./assets2/HalaSeonghwa.png",
    },
    {
      name: "Hala Mingi",
      amount: 0,
      condition: 310 * 10 ** 15,
      multiplier: 1.1 * 10 ** 12,
      baseprice: 310 * 10 ** 15,
      price: 310 * 10 ** 15,
      background: "./assets2/HalaMingi.png",
    },
    {
      name: "Hala Wooyoung",
      amount: 0,
      condition: 71 * 10 ** 18,
      multiplier: 8.3 * 10 ** 12,
      baseprice: 71 * 10 ** 18,
      price: 71 * 10 ** 18,
      background: "./assets2/HalaWooyoung.png",
    },
  ];

  UPGRADES = [
    {
      name: "SAN'S CHAOTIC MOVES",
      type: "building",
      description:
        "San's hability to dance improves every San's CpS by two percents",
      condition: 10,
      target: 0,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "HONGJOONG'S CAPTAIN POWER",
      type: "building",
      description:
        "Hongjoong's leadership talent improves every Hongjoong's CpS by two percents",
      condition: 10,
      target: 1,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Jongho's Apple breaking Combo",
      type: "building",
      condition: 10,
      target: 2,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Yeosang's Hehetmon Cuteness",
      type: "building",
      condition: 10,
      target: 3,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Yunho's Unrivaled Twerk",
      type: "building",
      condition: 10,
      target: 4,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Seonghwas's Baby Sharking",
      type: "building",
      condition: 10,
      target: 5,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Mingi's Unequaled Styling",
      type: "building",
      condition: 10,
      target: 6,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Wooyoung's Infinite Yelling",
      condition: 10,
      target: 7,
      purchased: false,
      price: 100,
      effect: 1.2,
    },
    {
      name: "Amicus ad Aras",
      type: "building",
      condition: 30,
      target: 0,
      purchased: false,
      price: 1000,
      effect: 1.6,
    },
    {
      name: "Hehet!",
      type: "building",
      condition: 30,
      target: 4,
      purchased: false,
      price: 1000,
      effect: 1.6,
    },
    {
      name: "HalaHala!",
      type: "clickers",
      condition: 30,
      target: 0,
      purchased: false,
      price: 1000,
      effect: 2,
    },
  ];

  ACHIEVEMENTS = [
  {
    nom: "Welcome on board",
    description: "Congrats ! You found your first pirate coin",
    type: "totalscore",
    condition: 1,
    url : "./assets2/Gumlins.png",
    announced : false
  },
  {
    nom: "Welcome on board",
    description: "Congrats You found 1000 coins!",
    type: "totalscore",
    condition: 1000,
    url : "./assets2/SuperGumlins.png",
    announced : false
  },
  {
    nom: "Welcome on board",
    description: "Congrats You found 100,000 coins!",
    type: "totalscore",
    condition: 100000,
    url : "./assets2/HyperGumlins.png",
    announced : false
  },
  {
    nom: "Welcome on board",
    description: "Congrats You found 100,000 coins!",
    type: "totalscore",
    condition: 100000000,
    url : "./assets2/HyperGumlins.png",
    announced : false
  },
  {
    nom: "Welcome on board",
    description: "Congrats You found 100,000 coins!",
    type: "totalscore",
    condition: 100000000000,
    url : "./assets2/HyperGumlins.png",
    announced : false
  }
];

}

VALUES = setDefault();
UPGRADES = setDefault();

function createUpgrades() {
  upgrades.innerHTML = "";

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
      upButton.classList.add("locked");
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
          clicvalue *= UPGRADES[i].effect;
        }

        upButton.classList.remove("locked");
        upButton.classList.add("unlocked");

        createButtons();
      }
    });
  }
}

window.addEventListener("load", loadGame);

function saveGame() {
  localStorage.setItem("score", score);
  localStorage.setItem("totalscore", totalScore);
  localStorage.setItem("valeurs", JSON.stringify(VALUES));
  localStorage.setItem("upgrades", JSON.stringify(UPGRADES));
  localStorage.setItem("achievements", JSON.stringify(ACHIEVEMENTS));
  console.log("partie sauvegardée");
}

setInterval(saveGame, 1000);

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

setInterval(() => {
  let titleinfo = numberDisplay(score);
  document.title = titleinfo.toLocaleString("en-IN", {maximumFractionDigits: 3}) + " pirate coins - Pirate Coins Dealer";
}, 2000);

function createButtons() {
  shop.innerHTML = "";

  for (let i = 0; i < VALUES.length; i++) {
    let element = document.createElement("button");
    element.setAttribute("id", `controller-${i}`);
    element.classList.add("controller", "disabled", "hidden");
    element.style.backgroundImage = `url("${VALUES[i].background}")`;
    let elementName = document.createElement("span");
    elementName.classList.add("multname");
    let elementNameText = document.createTextNode(`${VALUES[i].name}`);
    let elementValeur = document.createElement("span");
    elementValeur.classList.add("valeur");
    let elementValeurText = document.createTextNode(`${VALUES[i].multiplier}`);
    let elementCont = document.createElement("span");
    elementCont.classList.add("cont");
    elementCont.setAttribute("id", `cont-${1}`);
    let elementContText = document.createTextNode(`${VALUES[i].amount}`);
    let elementPrice = document.createElement("span");
    elementPrice.classList.add("prix");
    elementPrice.setAttribute("id", `prix-${1}`);
    let woup = numberDisplay(VALUES[i].price);
    let elementPriceText = document.createTextNode(`${woup}`);

    elementName.appendChild(elementNameText);
    elementValeur.appendChild(elementValeurText);
    elementCont.appendChild(elementContText);
    elementPrice.appendChild(elementPriceText);
    element.appendChild(elementName);
    element.appendChild(elementValeur);
    element.appendChild(elementCont);
    element.appendChild(elementPrice);

    element.addEventListener("click", () => {
      if (score >= VALUES[i].price) {
        VALUES[i].amount++;
        score -= VALUES[i].price;
        displayScore();
        elementCont.innerText = `${VALUES[i].amount}`;
        VALUES[i].price = VALUES[i].baseprice * (priceFactor ** VALUES[i].amount);
        VALUES[i].price = Math.ceil(VALUES[i].price);
        let woup = numberDisplay(VALUES[i].price);
        elementPrice.innerText = `${woup}`;
        localStorage.setItem("valeurs", JSON.stringify(VALUES));
        if (score < VALUES[i].price) {
          element.classList.add("disabled");
        } else {
          element.classList.remove("disabled");
        }
      } else {
        console.log("Can't buy that");
      }
    });

    shop.appendChild(element);
  }
}
function updateScore() {
  score += clicvalue;
  totalScore += clicvalue;

  displayScore();
}

mainClicker.addEventListener("click", updateScore);

setInterval(() => {
  prodPerSec = 0;

  for (let elem of VALUES) {
    prodPerSec += elem.amount * elem.multiplier + (((elem.amount * elem.multiplier)/100) * CurrentBonus);
    score += prodPerSec / 1000;
    totalScore += prodPerSec / 1000;
  }

  let produ = numberDisplay(prodPerSec);
  perSecond.innerText = `${produ.toLocaleString("en-IN", {maximumFractionDigits: 3})} pirate coins per second`;

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
}

setInterval(displayScore, 100);

function resetGame() {
  let reset = confirm("Are you sure you want to reset?");
  if (reset == true) {
    score = 0;
    totalScore = 0;

    setDefault();
    saveGame();
    displayAchievements();
    createButtons();
    createUpgrades();
  } else {
    console.log("Reset annulé");
  }
}

function displayAchievements(){

  achivBox.innerHTML = "";

  for (elem of ACHIEVEMENTS){
  let duh = document.createElement("div");
  duh.classList.add("achievementItem");
  let achivImg = document.createElement("img");
  achivImg.classList.add("achievementimg");

  if (elem.announced === true){
  achivImg.src= elem.url;
  } else {
  achivImg.src= "./assets/Gumlins.png";
  }


  duh.appendChild(achivImg);
  achivBox.appendChild(duh);
  
}
}

displayAchievements();

function spawnBonus() {
  setInterval(() => {
    let bonus = document.createElement("button");
    let bonusTxt = document.createTextNode("Bonus");
    bonus.appendChild(bonusTxt);
    bonus.classList.add("bonusButton");
    bonus.style.left = `${Math.random() * window.innerWidth}px`;
    bonus.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(bonus);

    bonus.addEventListener("click", () => {
      bonus.remove();
      bonusTime();
    });

    setTimeout(() => {
      bonus.remove();
    }, (8000 * FrequencyBonus));
   }, ((60 * 1000)/FrequencyBonus));
}

function achievementHandler() {
  for (let i = 0; i < ACHIEVEMENTS.length; i++ ){
  if(ACHIEVEMENTS[i].type == "totalscore"){
    if ((totalScore >= ACHIEVEMENTS[i].condition) && (ACHIEVEMENTS[i].announced === false)){
     alert(ACHIEVEMENTS[i].description);
     ACHIEVEMENTS[i].announced = true;
    } else { 
    //
    }
  }
  }
};

achievementHandler();
spawnBonus();

function bonusTime() {
  let random = Math.floor(Math.random() * VALUES.length);
  console.log(random);

  if (VALUES[random].amount === 0){
    bonusTime();
  } else {
  console.log(VALUES[random].amount);
  let bonus = VALUES[random].amount * 100;
  CurrentBonus += bonus;
  alert(`Wow, your ${VALUES[random].name} are in a frenzy, your coins per second are increased by ${bonus}% for 30 seconds`)
  console.log("Bonus:" + CurrentBonus);

  setTimeout(() => {
    CurrentBonus -= bonus;
  }, ((30 * 1000)*FrequencyBonus));
}
}

function numberDisplay(number) {
  if (number < 999) {
    return `${number.toLocaleString("en-IN", { maximumFractionDigits: 1})}`;
  } else if (number < 10 ** 6) {
    return `${(number/1000).toLocaleString("en-IN", {maximumFractionDigits:3})} thousands`;
  } else if (number < 10 ** 9) {
    return `${(number / 10 ** 6).toLocaleString("en-IN", {maximumFractionDigits:3})} millions`;
  } else if (number < 10 ** 12) {
    return `${(number / 10 ** 9).toLocaleString("en-IN", {maximumFractionDigits:3})} billions`;
  } else if (number < 10 ** 15) {
    return `${(number / 10 ** 12).toLocaleString("en-IN", {maximumFractionDigits:3})} trillions`;
  } else if (number < 10 ** 18) {
    return `${(number / 10 ** 15).toLocaleString("en-IN", {maximumFractionDigits:3})} quadrillions`;
  } else if (number < 10 ** 21) {
    return `${(number / 10 ** 18).toLocaleString("en-IN", {maximumFractionDigits:3})} quintillions`;
  } else if (number < 10 ** 24) {
    return `${(number / 10 ** 21).toLocaleString("en-IN", {maximumFractionDigits:3})} sextillions`;
  } else if (number < 10 ** 27) {
    return `${(number / 10 ** 24).toLocaleString("en-IN", {maximumFractionDigits:3})} septillions`;
  } else if (number < 10 ** 30) {
    return `${(number / 10 ** 27).toLocaleString("en-IN", {maximumFractionDigits:3})} octillions`;
  } else if (number < 10 ** 33) {
    return `${(number / 10 ** 30).toLocaleString("en-IN", {maximumFractionDigits:3})} nonillions`;
  } else if (number < 10 ** 36) {
    return `${(number / 10 ** 33).toLocaleString("en-IN", {maximumFractionDigits:3})} decillions`;
  } else if (number < 10 ** 39) {
    return `${(number / 10 ** 36).toLocaleString("en-IN", {maximumFractionDigits:3})} unidecillion`;
  } else if (number < 10 ** 42) {
    return `${(number / 10 ** 39).toLocaleString("en-IN", {maximumFractionDigits:3})} decadecillion`;
  }else {
    return number.toLocaleString("de-DE", { maximumFractionDigits: 3})
  }
}

let achievButton = document.getElementById("seeachievements");

achievButton.addEventListener("click", () => {
  document.getElementById("achievements").classList.toggle("invisible");
})