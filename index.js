let score = 0;
let prodPerSec = 0;

let VALUES = [
  {
    name: "Gumlin",
    amount: 0,
    multiplier: 0.4,
    price: 15,
    background: "./assets/Gumlins.png"
  },
  {
    name: "SuperGumlin",
    amount: 0,
    multiplier: 2,
    price: 30,
    background: "./assets/SuperGumlins.png"
  },
  {
    name:"HyperGumlin",
    amount: 0,
    multiplier: 4,
    price: 60,
    background: "./assets/HyperGumlins.png"
  },
  {
    name: "MetaGumlin",
    amount: 0,
    multiplier: 8,
    price: 120,
    background: "./assets/MetaGumlins.png"
  },
  {
    name: "TetaGumlin",
    amount: 0,
    multiplier: 16,
    price: 240,
    background: "./assets/Gumlins.png"
  },
  {
    name: "GigaGumlin",
    amount: 0,
    multiplier: 32,
    price: 480,
    background: "./assets/Gumlins.png"
  },
  {
    name: "SupraGumlin",
    amount: 0,
    multiplier: 64,
    price: 960,
    background: "./assets/Gumlins.png"
  }
];

setInterval(() => {
  localStorage.setItem("score", score);
  console.log("partie sauvegardée");
}, 1000);



window.addEventListener("load", loadGame);

function loadGame() {
  let valeurs = localStorage.getItem("valeurs");
  let stored = JSON.parse(valeurs);
  // if (typeof VALUES !== null) VALUES = stored;
  // console.log(VALUES);

  for (let i = 0; i < VALUES.length ; i++){
    document.getElementById(`cont-${i}`).innerText = `${VALUES[i].amount}`;
    document.getElementById(`prix-${i}`).innerText = `${VALUES[i].price}`;

  }
}

setInterval(() => {
  document.title = score.toFixed(0) + " gumballs - Gumballs Dealer";
}, 2000);

let mainClicker = document.getElementById("mainClicker");
let upgrades = document.getElementById("upgrades");
let shop = document.getElementById("shop");

for (let i = 0 ; i < VALUES.length ; i++){
let element = document.createElement("button");
element.setAttribute("id", `controller-${i+1}`);
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
elementCont.setAttribute("id", `prix-${1}`);
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
    scoreBox.innerText = Math.round(score);
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


let scoreBox = document.getElementById("score");
let perSecond = document.getElementById("perSec");

let clicvalue = 1;
let saved = localStorage.getItem("score");
score = Number(saved);
let totalScore = Number(saved);

scoreBox.innerText = Math.floor(score);

function updateScore() {
  score += clicvalue;
  totalScore += clicvalue;

  scoreBox.innerText = `${Math.round(score)} Gumballs`;
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

}, 1);

function displayScore() {
  scoreBox.innerText = `${Math.round(score)} Gumballs`;
}

setInterval(displayScore, 100);
