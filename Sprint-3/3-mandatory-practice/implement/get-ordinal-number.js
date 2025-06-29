function getOrdinalNumber(num) {
 
  if (["11", "12", "13"].includes(num.toString().slice(-2))) {
    return num.toString() + "th";
  }
  let lastDigit = num.toString().slice(-1);
  if (lastDigit === "1") {
    return num.toString() + "st";
  }
  if (lastDigit === "0") {
    return num.toString() + "th";
  }
  if (lastDigit === "2") {
    return num.toString() + "nd";
  }
  if (lastDigit === "3") {
    return num.toString() + "rd";
  }
  if (["4", "5", "6", "7", "8", "9"].includes(lastDigit)) {
    return num.toString() + "th";
  }
}

module.exports = getOrdinalNumber;
