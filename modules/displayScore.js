export function displayScore() {
    let woops = numberDisplay(score);
    scoreBox.innerText = `${woops} pirate coins`;
  
    document.getElementById(
      "valeurclic"
    ).innerHTML = `valeur de clic ${clicvalue}`;
    document.getElementById(
      "valeurbonus"
    ).innerHTML = `valeur de bonus ${CurrentBonus}`;
  }