let score = 0;

setInterval(() => {
  localStorage.setItem("score", score);
  localStorage.setItem("valeurs", JSON.stringify(VALUES));
  console.log("partie sauvegardée");
}, 1000);

let VALUES = [
  {
    amount: 0,
    multiplier: 0.4,
    price: 15,
  },
  {
    amount: 0,
    multiplier: 2,
    price: 30,
  },
  {
    amount: 0,
    multiplier: 4,
    price: 60,
  },
  {
    amount: 0,
    multiplier: 8,
    price: 120,
  },
];

window.addEventListener("load", loadGame);

function loadGame() {
  let valeurs = localStorage.getItem("valeurs");
  let stored = JSON.parse(valeurs);
  if (typeof VALUES !== null) VALUES = stored;
  console.log(VALUES);

  con1.innerText = `${VALUES[0].amount}`;
  con2.innerText = `${VALUES[1].amount}`;
  con3.innerText = `${VALUES[2].amount}`;
  con4.innerText = `${VALUES[3].amount}`;

  prix1.innerText = VALUES[0].price;
  prix2.innerText = VALUES[1].price;
  prix3.innerText = VALUES[2].price;
  prix4.innerText = VALUES[3].price;
}

setInterval(() => {
  document.title = score.toFixed(0) + " gumballs - Gumballs Dealer";
}, 2000);

let mainClicker = document.getElementById("mainClicker");

let controller1 = document.getElementById("controller-1");
let controller2 = document.getElementById("controller-2");
let controller3 = document.getElementById("controller-3");
let controller4 = document.getElementById("controller-4");

let con1 = document.getElementById("con1");
let con2 = document.getElementById("con2");
let con3 = document.getElementById("con3");
let con4 = document.getElementById("con4");

let prix1 = document.getElementById("prix1");
let prix2 = document.getElementById("prix2");
let prix3 = document.getElementById("prix3");
let prix4 = document.getElementById("prix4");

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
controller1.addEventListener("click", () => {
  if (score >= VALUES[0].price) {
    VALUES[0].amount++;
    score -= VALUES[0].price;
    scoreBox.innerText = Math.round(score);
    con1.innerText = `${VALUES[0].amount}`;
    VALUES[0].price *= 1.2;
    VALUES[0].price = Math.round(VALUES[0].price);
    prix1.innerText = VALUES[0].price;
    localStorage.setItem("valeurs", JSON.stringify(VALUES));
    if (score < VALUES[0].price) {
      controller1.classList.add("disabled");
    } else {
      controller1.classList.remove("disabled");
    }
  } else {
    console.log("Can't buy that");
  }
});

controller2.addEventListener("click", () => {
  if (score >= VALUES[1].price) {
    VALUES[1].amount++;
    score -= VALUES[1].price;
    scoreBox.innerText = Math.round(score);
    con2.innerText = `${VALUES[1].amount}`;
    VALUES[1].price *= 1.2;
    VALUES[1].price = Math.round(VALUES[1].price);
    prix2.innerText = VALUES[1].price;
    localStorage.setItem("valeurs", JSON.stringify(VALUES));
    if (score < VALUES[1].price) {
      controller2.classList.add("disabled");
    } else {
      controller2.classList.remove("disabled");
    }
  } else {
    console.log("Can't buy that");
  }
});

controller3.addEventListener("click", () => {
  if (score >= VALUES[2].price) {
    VALUES[2].amount++;
    score -= VALUES[2].price;
    scoreBox.innerText = Math.round(score);
    con3.innerText = `${VALUES[2].amount}`;
    VALUES[2].price *= 1.2;
    VALUES[2].price = Math.round(VALUES[2].price);
    prix3.innerText = VALUES[2].price;
    localStorage.setItem("valeurs", JSON.stringify(VALUES));

    if (score < VALUES[2].price) {
      controller3.classList.add("disabled");
    } else {
      controller3.classList.remove("disabled");
    }
  } else {
    console.log("Can't buy that");
  }
});

controller4.addEventListener("click", () => {
  if (score >= VALUES[3].price) {
    VALUES[3].amount++;
    score -= VALUES[3].price;
    scoreBox.innerText = Math.round(score);
    con4.innerText = `${VALUES[3].amount}`;
    VALUES[3].price *= 1.2;
    VALUES[3].price = Math.round(VALUES[3].price);
    prix4.innerText = VALUES[3].price;
    localStorage.setItem("valeurs", JSON.stringify(VALUES));

    if (score < VALUES[3].price) {
      controller4.classList.add("disabled");
    } else {
      controller4.classList.remove("disabled");
    }
  } else {
    console.log("Can't buy that");
  }
});

if (score < VALUES[0].price) {
  controller1.classList.add("disabled");
} else {
  controller1.classList.remove("disabled");
}

if (score < VALUES[1].price) {
  controller2.classList.add("disabled");
} else {
  controller2.classList.remove("disabled");
}

if (score < VALUES[2].price) {
  controller3.classList.add("disabled");
} else {
  controller3.classList.remove("disabled");
}

if (score < VALUES[3].price) {
  controller4.classList.add("disabled");
} else {
  controller4.classList.remove("disabled");
}

setInterval(() => {
  score += (VALUES[0].amount * VALUES[0].multiplier) / 100;
  score += (VALUES[1].amount * VALUES[1].multiplier) / 100;
  score += (VALUES[2].amount * VALUES[2].multiplier) / 100;
  score += (VALUES[3].amount * VALUES[3].multiplier) / 100;

  totalScore += (VALUES[0].amount * VALUES[0].multiplier) / 100;
  totalScore += (VALUES[1].amount * VALUES[1].multiplier) / 100;
  totalScore += (VALUES[2].amount * VALUES[2].multiplier) / 100;
  totalScore += (VALUES[3].amount * VALUES[3].multiplier) / 100;

  let prodPerSec =
  VALUES[0].amount * VALUES[0].multiplier +
  VALUES[1].amount * VALUES[1].multiplier +
  VALUES[2].amount * VALUES[2].multiplier +
  VALUES[3].amount * VALUES[3].multiplier;

  perSecond.innerText = `${prodPerSec} Gumballs per second`;

  if (score < VALUES[0].price) {
    controller1.classList.add("disabled");
  } else {
    controller1.classList.remove("disabled");
  }

  if (score < VALUES[1].price) {
    controller2.classList.add("disabled");
  } else {
    controller2.classList.remove("disabled");
  }

  if (score < VALUES[2].price) {
    controller3.classList.add("disabled");
  } else {
    controller3.classList.remove("disabled");
  }

  if (score < VALUES[3].price) {
    controller4.classList.add("disabled");
  } else {
    controller4.classList.remove("disabled");
  }
}, 1);

function displayScore() {
  scoreBox.innerText = `${Math.round(score)} Gumballs`;
}

setInterval(displayScore, 100);
