setInterval(() => {
  localStorage.setItem("score", score);
  console.log("partie sauvegardée");
}, 1000);

let VALUES = [
  {
    amount: 0,
    multiplier : 0.4,
    price: 15,
  },
  {
    amount: 0,
    multiplier : 2,
    price: 30,
  },
  {
    amount: 0,
    multiplier : 4,
    price: 60,
  }
];

let valeurs = localStorage.getItem("valeurs");
VALUES = JSON.parse(valeurs);
console.log(VALUES);

setInterval(() => {
  document.title = score.toFixed(0) + " cookies";
}, 2000)

let mainClicker = document.getElementById("mainClicker");

let controller1 = document.getElementById("controller-1");
let controller2 = document.getElementById("controller-2");
let controller3 = document.getElementById("controller-3");

let con1 = document.getElementById("con1");
let con2 = document.getElementById("con2");
let con3 = document.getElementById("con3");

let prix1 = document.getElementById("prix1");
let prix2 = document.getElementById("prix2");
let prix3 = document.getElementById("prix3");

con1.innerText = `${VALUES[0].amount}`;
con2.innerText = `${VALUES[1].amount}`;
con3.innerText = `${VALUES[2].amount}`;

prix1.innerText = VALUES[0].price;
prix2.innerText = VALUES[1].price;
prix3.innerText = VALUES[2].price;

let scoreBox = document.getElementById("score");

let clicvalue = 1;
let saved = localStorage.getItem("score");
let score = Number(saved);
let totalScore = Number(saved);

scoreBox.innerText = Math.floor(score);

function updateScore() {
  score += clicvalue;
  totalScore += clicvalue;

  scoreBox.innerText = score.toFixed(0);
}

mainClicker.addEventListener("click", updateScore);
controller1.addEventListener("click", () => {

    if (score >= VALUES[0].price){
    VALUES[0].amount++;
    score -= VALUES[0].price;
    scoreBox.innerText = Math.floor(score);
    con1.innerText = `${VALUES[0].amount}`;
    VALUES[0].price *= 1.2;
    prix1.innerText = VALUES[0].price.toFixed(2);
    localStorage.setItem("valeurs", JSON.stringify(VALUES));
    if (score < VALUES[0].price){
      controller1.classList.add("disabled");
    } else { 
      controller1.classList.remove("disabled");
    }

    } else {
        console.log("Can't buy that");
    }
})

controller2.addEventListener("click", () => {
    if (score >= VALUES[1].price){
    VALUES[1].amount++;
    score -= VALUES[1].price;
    scoreBox.innerText = Math.floor(score);
    con2.innerText = `${VALUES[1].amount}`;
    VALUES[1].price *= 1.2;
    prix2.innerText = VALUES[1].price.toFixed(2);
    localStorage.setItem("valeurs", JSON.stringify(VALUES));
    if (score < VALUES[1].price){
      controller2.classList.add("disabled");
    } else { 
      controller2.classList.remove("disabled");
    }
    
} else {
    console.log("Can't buy that");
}
})

controller3.addEventListener("click", () => {

  if (score >= VALUES[2].price){
  VALUES[2].amount++;
  score -= VALUES[2].price;
  scoreBox.innerText = Math.floor(score);
  con3.innerText = `${VALUES[2].amount}`;
  VALUES[2].price *= 1.2;
  prix3.innerText = VALUES[2].price.toFixed(2);
  localStorage.setItem("valeurs", JSON.stringify(VALUES));

  if (score < VALUES[2].price){
    controller3.classList.add("disabled");
  } else { 
    controller3.classList.remove("disabled");
  }

  } else {
      console.log("Can't buy that");
  }
})


if (score < VALUES[0].price){
  controller1.classList.add("disabled");
} else { 
  controller1.classList.remove("disabled");
}

if (score < VALUES[1].price){
  controller2.classList.add("disabled");
} else { 
  controller2.classList.remove("disabled");
}

if (score < VALUES[2].price){
  controller3.classList.add("disabled");
} else { 
  controller3.classList.remove("disabled");
}

setInterval(() => {
  score += VALUES[0].amount * VALUES[0].multiplier;
  score += VALUES[1].amount * VALUES[1].multiplier;
  score += VALUES[2].amount * VALUES[1].multiplier;

  totalScore += VALUES[0].amount * VALUES[0].multiplier;
  totalScore += VALUES[1].amount * VALUES[1].multiplier;
  totalScore += VALUES[2].amount * VALUES[2].multiplier;
  
  if (score <= VALUES[0].price){
    controller1.classList.add("disabled");
  } else { 
    controller1.classList.remove("disabled");
  }

  if (score < VALUES[1].price){
    controller2.classList.add("disabled");
  } else { 
    controller2.classList.remove("disabled");
  }

  if (score < VALUES[2].price){
    controller3.classList.add("disabled");
  } else { 
    controller3.classList.remove("disabled");
  }
  console.log(VALUES);
}, 1000);

function displayScore(){
  scoreBox.innerText = Math.floor(score);
}

setInterval(displayScore, 100);
