let VALUES;
let UPGRADES;

let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let shop = document.getElementById("shop");
let scoreBox = document.getElementById("score");
let perSecond = document.getElementById("perSec");

let clicvalue = 1;
let score = 0;
let prodPerSec = 0;
let totalScore = 0;
let priceFactor = 1.15;

function setDefault(){
  VALUES = [
      {
        name: "San",
        amount: 0,
        condition: 0,
        multiplier: 0.1,
        price: 15,
        background: "./assets2/Gumlins.png",
        description: "San's capacity to dance forever."
      },
      {
        name: "Hongjoong",
        amount: 0,
        condition: 0,
        multiplier: 1,
        price: 100,
        background: "./assets2/SuperGumlins.png"
      },
      {
        name:"Jongho",
        amount: 0,
        condition: 1100,
        multiplier: 8,
        price: 1100,
        background: "./assets2/HyperGumlins.png"
      },
      {
        name: "Yeosang",
        amount: 0,
        condition: 12000,
        multiplier: 47,
        price: 12000,
        background: "./assets2/MetaGumlins.png"
      },
      {
        name: "Yunho",
        amount: 0,
        condition: 130000,
        multiplier: 260,
        price: 130000,
        background: "./assets2/TetaGumlins.png"
      },
      {
        name: "Seonghwa",
        amount: 0,
        condition: 1400000,
        multiplier: 1400,
        price: 1400000,
        background: "./assets2/GigaGumlins.png"
      },
      {
        name: "Mingi",
        amount: 0,
        condition: 20000000,
        multiplier: 44000,
        price: 20000000,
        background: "./assets2/SupraGumlins.png"
      },
      {
        name: "Wooyoung",
        amount: 0,
        condition: 330000000,
        multiplier: 260000,
        price: 330000000,
        background: "./assets2/UltimateGumlins.png"
      }, 
      {
        name: "Chromer",
        amount: 0,
        condition: 5100000000,
        multiplier: 1.6 * (10**6),
        price: 5100000000,
        background: "./assets2/Chromer.png"
      }, {
        name: "Hala San",
        amount: 0,
        condition: 75000000000,
        multiplier: 10 * (10**6),
        price: 75000000000,
        background: "./assets2/HalaSan.png"
      }, 
      {
        name: "Hala Hongjoong",
        amount: 0,
        condition: 1000000000000,
        multiplier: 65 * (10**6),
        price: 1000000000000,
        background: "./assets2/HalaHongjoong.png"
      },
      {
        name: "Hala Jongho",
        amount: 0,
        condition: 14000000000000,
        multiplier: 430 * (10**6),
        price: 14000000000000,
        background: "./assets2/HalaJongho.png"
      },
      {
        name: "Hala Yeosang",
        amount: 0,
        condition: 170000000000000,
        multiplier: 2.9 * (10**9),
        price: 170000000000000,
        background: "./assets2/HalaYeosang.png"
      },
      {
        name: "Hala Yunho",
        amount: 0,
        condition: 2.1 * (10**15),
        multiplier: 21 * (10**9),
        price: 2.1 * (10**15),
        background: "./assets2/HalaYunho.png"
      },
      {
        name: "Hala Seonghwa",
        amount: 0,
        condition: 2.6 * (10**15),
        multiplier: 150 * (10**9),
        price: 2.6 * (10**15),
        background: "./assets2/HalaSeonghwa.png"
      },
      {
        name: "Hala Mingi",
        amount: 0,
        condition: 310 * (10**15),
        multiplier: 1.1 * (10**12),
        price: 310 * (10**15),
        background: "./assets2/HalaMingi.png"
      },
      {
        name: "Hala Wooyoung",
        amount: 0,
        condition: 71 * (10**18),
        multiplier: 8.3 * (10**12),
        price: 71 * (10**18),
        background: "./assets2/HalaWooyoung.png"
      }
    ];
  
    UPGRADES = [
      {
        name: "SAN'S CHAOTIC MOVES",
        condition : 10,
        target: 0,
        purchased : false,
        price : 100,
        effect: 1.2,
      }, 
      {
        name: "HONGJOONG'S CAPTAIN POWER",
        condition : 10,
        target: 1,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Jongho's Apple breaking Combo",
        condition : 10,
        target: 2,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Yeosang's Hehetmon Cuteness",
        condition : 10,
        target: 3,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Yunho's Unrivaled Twerk",
        condition : 10,
        target: 4,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Seonghwas's Baby Sharking",
        condition : 10,
        target: 5,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Mingi's Unequaled Styling",
        condition : 10,
        target: 6,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Wooyoung's Infinite Yelling",
        condition : 10,
        target: 7,
        purchased : false,
        price : 100,
        effect: 1.2,
      },
      {
        name: "Amicus ad Aras",
        condition : 30,
        target: 0,
        purchased : false,
        price : 1000,
        effect: 1.6,
      }, 
      {
        name: "Hehet!",
        condition : 30,
        target: 0,
        purchased : false,
        price : 1000,
        effect: 1.6,
      }
    ]
}
  

VALUES = setDefault();
UPGRADES = setDefault();

function createUpgrades(){

  upgrades.innerHTML = "";

for (let i = 0; i < UPGRADES.length ; i++){

  let upButton = document.createElement("button");
  upButton.setAttribute("id", `upgrade-${i}`);
  upButton.classList.add("upgrade");
  
  let upButtonText = document.createTextNode(`UNLOCK ${UPGRADES[i].name} FOR ${UPGRADES[i].price}`);
  upButton.appendChild(upButtonText);
  upgrades.appendChild(upButton);

  if (UPGRADES[i].purchased == true){
    upButton.classList.add("unlocked");
    upButton.style.display = "block";
  } else if ( UPGRADES[i].condition == true ){
    upButton.classList.add("locked");
    upButton.style.display = "block";
  }  else {
    upButton.classList.add("locked");
    upButton.style.display = "none";
  }

upButton.addEventListener("click", () => {

  if (UPGRADES[i].price >= score){

    console.log("too expensive");

  } else if (UPGRADES[i].purchased === true)
  {
    console.log("déja achetée");
  } else {

  score -= UPGRADES[i].price;

  UPGRADES[i].purchased = true;

  VALUES[`${UPGRADES[i].target}`].multiplier = VALUES[`${UPGRADES[i].target}`].multiplier * UPGRADES[i].effect;
  VALUES[`${UPGRADES[i].target}`].multiplier = parseFloat((VALUES[`${UPGRADES[i].target}`].multiplier));

  upButton.classList.remove("locked");
  upButton.classList.add("unlocked");

createButtons();
  }
})

}
}

window.addEventListener("load", loadGame);

function saveGame(){
  localStorage.setItem("score", score);
  localStorage.setItem("totalscore", totalScore);
  localStorage.setItem("valeurs", JSON.stringify(VALUES));
  localStorage.setItem("upgrades", JSON.stringify(UPGRADES));
  console.log("partie sauvegardée");
}

setInterval(saveGame, 1000);

function loadGame() {
  let valeurs = localStorage.getItem("valeurs");
  let stored = JSON.parse(valeurs);
  if (stored !== null) {
    VALUES = stored
  };

  let amelio = localStorage.getItem("upgrades");
  let storedAme = JSON.parse(amelio);
  if (storedAme !== null) {
    UPGRADES = storedAme
  };

  let saved = localStorage.getItem("score");
let totalsaved = localStorage.getItem("totalscore");
score = Number(saved);
totalScore = Number(totalsaved);

  createButtons();
  createUpgrades();
}


setInterval(() => {
  document.title = score.toFixed(0) + " gumballs - Gumballs Dealer";
}, 2000);

function createButtons(){
  shop.innerHTML = "";

  for (let i = 0 ; i < VALUES.length ; i++){
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
let elementPriceText = document.createTextNode(`${VALUES[i].price}`);

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
    scoreBox.innerText = `${Math.round(score)} Gumballs`;
    elementCont.innerText = `${VALUES[i].amount}`;
    VALUES[i].price *= Math.pow(priceFactor, VALUES[i].amount);
    VALUES[i].price = Math.round(VALUES[i].price);
    elementPrice.innerText = `${VALUES[i].price}`;
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

 shop.appendChild(element)
  }
}

scoreBox.innerText = Math.floor(score);

function updateScore() {
  score += clicvalue;
  totalScore += clicvalue;

displayScore();
}

mainClicker.addEventListener("click", updateScore);

setInterval(() => {

  prodPerSec = 0;

  for (let elem of VALUES){
    score += (elem.amount * elem.multiplier) / 100;
    totalScore += (elem.amount * elem.multiplier) / 100;
    prodPerSec += elem.amount * elem.multiplier;
  } 

  perSecond.innerText = `${prodPerSec} Gumballs per second`;

  for (let i = 0 ; i < VALUES.length ; i++){
    if  (score < VALUES[i].price){
   shop.children[i].classList.add("disabled");}
    else {
    shop.children[i].classList.remove("disabled");
   }
   }

   for (let i = 0 ; i < VALUES.length ; i++){
    if (totalScore >= VALUES[i].condition){
   shop.children[i].classList.remove("hidden");

  }
    else {
     
   }
   }

   

   for (let i = 0; i < UPGRADES.length ; i++){
   if (VALUES[UPGRADES[i].target].amount >=  UPGRADES[i].condition){
    document.querySelectorAll(".upgrade")[i].style.display = "block";
   }
  }


}, 1);

function displayScore() {
  scoreBox.innerText = `${Math.round(score)} Gumballs`;
}

setInterval(displayScore, 100);

function resetGame(){

  let reset = confirm("Are you sure you want to reset?");
  if (reset == true){
  score = 0;
  totalScore = 0;

setDefault();
saveGame();
createButtons();
createUpgrades();}
else {
  console.log("Reset annulé");
}
}

function spawnBonus(){

  

}