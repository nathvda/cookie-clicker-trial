let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let shop = document.getElementById("shop");
let scoreBox = document.getElementById("score");
let perSecond = document.getElementById("perSec");

let clicvalue = 1;
let score = 0;
let prodPerSec = 0;
let totalScore = 0;
let VALUES = [
  {
    name: "San",
    amount: 0,
    multiplier: 0.4,
    price: 15,
    background: "./assets2/Gumlins.png",
    description: "San's capacity to dance forever."
  },
  {
    name: "Hongjoong",
    amount: 0,
    multiplier: 2,
    price: 30,
    background: "./assets2/SuperGumlins.png"
  },
  {
    name:"Jongho",
    amount: 0,
    multiplier: 4,
    price: 60,
    background: "./assets2/HyperGumlins.png"
  },
  {
    name: "Yeosang",
    amount: 0,
    multiplier: 8,
    price: 120,
    background: "./assets2/MetaGumlins.png"
  },
  {
    name: "Yunho",
    amount: 0,
    multiplier: 16,
    price: 240,
    background: "./assets2/TetaGumlins.png"
  },
  {
    name: "Seonghwa",
    amount: 0,
    multiplier: 32,
    price: 480,
    background: "./assets2/GigaGumlins.png"
  },
  {
    name: "Mingi",
    amount: 0,
    multiplier: 64,
    price: 960,
    background: "./assets2/SupraGumlins.png"
  },
  {
    name: "Wooyoung",
    amount: 0,
    multiplier: 128,
    price: 1920,
    background: "./assets2/UltimateGumlins.png"
  }
];

let UPGRADES = [
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
    condition : 700,
    target: 1,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Jongho's Apple breaking Combo",
    condition : 700,
    target: 2,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Yeosang's Hehetmon Cuteness",
    condition : 700,
    target: 3,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Yunho's Unrivaled Twerk",
    condition : 700,
    target: 4,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Seonghwas's Baby Sharking",
    condition : 700,
    target: 5,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Mingi's Unequaled Styling",
    condition : 700,
    target: 6,
    purchased : false,
    price : 100,
    effect: 1.2,
  },
  {
    name: "Wooyoung's Infinite Yelling",
    condition : 700,
    target: 7,
    purchased : false,
    price : 100,
    effect: 1.2,
  }
  
]

function createUpgrades(){

  upgrades.innerHTML = "";
  
for (let i = 0; i < UPGRADES.length ; i++){

  let upButton = document.createElement("button");
  upButton.setAttribute("id", `upgrade-${i}`);
  upButton.classList.add("upgrade");
  
  let upButtonText = document.createTextNode(`${UPGRADES[i].name}`);
  upButton.appendChild(upButtonText);
  upgrades.appendChild(upButton);

  if (UPGRADES[i].purchased == true){
    upButton.classList.add("unlocked");
    upButton.style.display = "block";
  } else if ( totalScore >= UPGRADES[i].condition ){
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
  console.log(VALUES);

  upButton.classList.remove("locked");
  upButton.classList.add("unlocked");
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

let saved = localStorage.getItem("score");
let totalsaved = localStorage.getItem("totalscore");
score = Number(saved);
totalScore = Number(totalsaved);
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
    VALUES[i].price *= 1.2;
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

shop.appendChild(element);
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

  for (let i = 0 ; i < VALUES.length-1 ; i++){
    if  (score < VALUES[i].price){
   shop.children[i].classList.add("disabled");}
    else {
    shop.children[i].classList.remove("disabled");
   }
   }

   for (let i = 0; i < UPGRADES.length ; i++){

   if (totalScore >= UPGRADES[i].condition){
    document.getElementById(`upgrade-${i}`).style.display = "block";
   }
  }

}, 1);

function displayScore() {
  scoreBox.innerText = `${Math.round(score)} Gumballs`;
}

setInterval(displayScore, 100);

function resetGame(){
  VALUES = [
    {
      name: "San",
      amount: 0,
      multiplier: 0.4,
      price: 15,
      background: "./assets2/Gumlins.png",
      description: "San's capacity to dance forever."
    },
    {
      name: "Hongjoong",
      amount: 0,
      multiplier: 2,
      price: 30,
      background: "./assets2/SuperGumlins.png"
    },
    {
      name:"Jongho",
      amount: 0,
      multiplier: 4,
      price: 60,
      background: "./assets2/HyperGumlins.png"
    },
    {
      name: "Yeosang",
      amount: 0,
      multiplier: 8,
      price: 120,
      background: "./assets2/MetaGumlins.png"
    },
    {
      name: "Yunho",
      amount: 0,
      multiplier: 16,
      price: 240,
      background: "./assets2/TetaGumlins.png"
    },
    {
      name: "Seonghwa",
      amount: 0,
      multiplier: 32,
      price: 480,
      background: "./assets2/GigaGumlins.png"
    },
    {
      name: "Mingi",
      amount: 0,
      multiplier: 64,
      price: 960,
      background: "./assets2/SupraGumlins.png"
    },
    {
      name: "Wooyoung",
      amount: 0,
      multiplier: 128,
      price: 1920,
      background: "./assets2/UltimateGumlins.png"
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
      condition : 700,
      target: 1,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Jongho's Apple breaking Combo",
      condition : 700,
      target: 2,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Yeosang's Hehetmon Cuteness",
      condition : 700,
      target: 3,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Yunho's Unrivaled Twerk",
      condition : 700,
      target: 4,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Seonghwas's Baby Sharking",
      condition : 700,
      target: 5,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Mingi's Unequaled Styling",
      condition : 700,
      target: 6,
      purchased : false,
      price : 100,
      effect: 1.2,
    },
    {
      name: "Wooyoung's Infinite Yelling",
      condition : 700,
      target: 7,
      purchased : false,
      price : 100,
      effect: 1.2,
    }
    
  ]
  
  score = 0;
  totalScore = 0;


saveGame();
createButtons();
createUpgrades();
}
