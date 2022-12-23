let mainClicker = document.getElementById("mainClicker");

let controller1 = document.getElementById("controller-1");
let controller2 = document.getElementById("controller-2");

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
    } else {
        console.log("Can't buy that");
    }
})

controller2.addEventListener("click", () => {
    if (score >= VALUES[0].price){
    VALUES[1].amount++;
    score -= VALUES[0].price;
    scoreBox.innerText = Math.floor(score);
} else {
    console.log("Can't buy that");
}
})

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

setInterval(() => {
  score += VALUES[0].amount * VALUES[0].multiplier;
  score += VALUES[1].amount * VALUES[1].multiplier;

  totalScore += VALUES[0].amount * VALUES[0].multiplier;
  totalScore += VALUES[1].amount * VALUES[1].multiplier;

  scoreBox.innerText = Math.floor(score);

  console.log(VALUES);
}, 1000);
