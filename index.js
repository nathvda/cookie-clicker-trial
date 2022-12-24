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
  }
];

let mainClicker = document.getElementById("mainClicker");

let controller1 = document.getElementById("controller-1");
let controller2 = document.getElementById("controller-2");

let con1 = document.getElementById("con1");
let con2 = document.getElementById("con2");

let scoreBox = document.getElementById("score");

let clicvalue = 1;
let score = 0;
let totalScore = 0;

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

    } else {
        console.log("Can't buy that");
    }
})

controller2.addEventListener("click", () => {
    if (score >= VALUES[0].price){
    VALUES[1].amount++;
    score -= VALUES[0].price;
    scoreBox.innerText = Math.floor(score);
    con2.innerText = `${VALUES[1].amount}`;
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

setInterval(() => {
  score += VALUES[0].amount * VALUES[0].multiplier;
  score += VALUES[1].amount * VALUES[1].multiplier;

  totalScore += VALUES[0].amount * VALUES[0].multiplier;
  totalScore += VALUES[1].amount * VALUES[1].multiplier;

  scoreBox.innerText = Math.floor(score);

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

  console.log(VALUES);
}, 1000);

