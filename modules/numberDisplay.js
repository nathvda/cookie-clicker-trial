export function numberDisplay(number) {
    if (number < 999) {
      return `${number.toLocaleString("en-IN", { maximumFractionDigits: 1 })}`;
    } else if (number < 10 ** 6) {
      return `${(number / 1000).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} thousands`;
    } else if (number < 10 ** 9) {
      return `${(number / 10 ** 6).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} millions`;
    } else if (number < 10 ** 12) {
      return `${(number / 10 ** 9).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} billions`;
    } else if (number < 10 ** 15) {
      return `${(number / 10 ** 12).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} trillions`;
    } else if (number < 10 ** 18) {
      return `${(number / 10 ** 15).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} quadrillions`;
    } else if (number < 10 ** 21) {
      return `${(number / 10 ** 18).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} quintillions`;
    } else if (number < 10 ** 24) {
      return `${(number / 10 ** 21).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} sextillions`;
    } else if (number < 10 ** 27) {
      return `${(number / 10 ** 24).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} septillions`;
    } else if (number < 10 ** 30) {
      return `${(number / 10 ** 27).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} octillions`;
    } else if (number < 10 ** 33) {
      return `${(number / 10 ** 30).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} nonillions`;
    } else if (number < 10 ** 36) {
      return `${(number / 10 ** 33).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} decillions`;
    } else if (number < 10 ** 39) {
      return `${(number / 10 ** 36).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} unidecillion`;
    } else if (number < 10 ** 42) {
      return `${(number / 10 ** 39).toLocaleString("en-IN", {
        maximumFractionDigits: 3,
      })} decadecillion`;
    } else {
      return number.toLocaleString("de-DE", { maximumFractionDigits: 3 });
    }
  }