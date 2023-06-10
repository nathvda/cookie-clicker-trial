export function saveGame(toSave) {
    localStorage.setItem("gamesave", JSON.stringify(toSave));
}