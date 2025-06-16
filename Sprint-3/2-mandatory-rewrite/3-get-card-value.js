function getCardValue(card) {
  // replace with your code from key-implement
  let rank = card[0];
  if (card.length > 2) {
    rank = card.slice(0, card.length - 1);
  }

  if (rank === "A") return 11;
  if (rank >= 2 && rank <= 10 && ["♠", "♥", "♦", "♣"].includes(card.slice(-1)))
    return parseInt(rank);
  if (
    ["J", "Q", "K"].includes(rank) &&
    ["♠", "♥", "♦", "♣"].includes(card.slice(-1))
  )
    return 10;
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
