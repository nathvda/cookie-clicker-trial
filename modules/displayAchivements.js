import { ACHIEVEMENTS } from "./constants/ACHIEVEMENTS.js";

export function displayAchievements() {
    achivBox.innerHTML = "";
  
    for (elem of ACHIEVEMENTS) {
      let duh = document.createElement("div");
      duh.classList.add("achievementItem");
      let achivImg = document.createElement("img");
      achivImg.classList.add("achievementimg");
  
      if (elem.announced === true) {
        achivImg.src = elem.url;
      } else {
        achivImg.src = "./assets/Gumlins.png";
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