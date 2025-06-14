function getCardValue(card) {
  // replace with your code from key-implement
  if (card === "A♠") {
    return 11;
  }
  if (card >= 2 || card <= 10) {
    return "2 - 9";
  }
  if (["J", "Q", "K"].includes(card)) {
    return "Face Card";
  }
  if (card[0] === "A") {
    return "Ace Card";
  }
}
module.exports = getCardValue;
