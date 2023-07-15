export function computeClickValue(joueur) {
  let tableOfClickers = joueur.values.filter((a) => a.type === "clicker");

  let computedClickValue = 1;
  tableOfClickers.forEach(
    (a) => (computedClickValue += a.amount * a.multiplier)
  );

  return computedClickValue;
}
