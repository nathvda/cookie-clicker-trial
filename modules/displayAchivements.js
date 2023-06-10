let achivBox = document.getElementById("achievements");

export function displayAchievements(joueur) {

    achivBox.innerHTML = "";
  
    for (let elem of joueur.achievements) {
      let duh = document.createElement("div");
      duh.classList.add("achievementItem");
      let achivImg = document.createElement("img");
      achivImg.classList.add("achievementimg");
  
      if (elem.announced === true) {
        achivImg.src = elem.url;
      } else {
        achivImg.src = "./assets2/Gumlins.png";
      }
  
      let achiDescription = document.createElement("div");
      achiDescription.classList.add("description");
  
      let achiDescriptionText = document.createTextNode(`${elem.description}`);
      achiDescription.appendChild(achiDescriptionText);
      duh.appendChild(achiDescription);
  
      duh.appendChild(achivImg);
      achivBox.appendChild(duh);
    }
  }