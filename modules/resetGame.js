export function resetGame() {
    let reset = confirm("Are you sure you want to reset?");
    if (reset == true) {
      let score = 0;
      let totalScore = 0;
  
      setDefault();
      saveGame();
      displayAchievements();
      createButtons();
      createUpgrades();
    } else {
      console.log("Reset annulé");
    }
  }