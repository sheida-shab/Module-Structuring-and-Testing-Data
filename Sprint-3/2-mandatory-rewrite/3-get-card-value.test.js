const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2-9 for 2", () => {
  const numberCards = getCardValue("2");
  expect(numberCards).toEqual("2 - 9");
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return Face Card for J", () => {
  const faceCards = getCardValue("J");
  expect(faceCards).toEqual("Face Card");
});

// Case 4: Handle Ace (A):
test("should return Ace for A", () => {
  const aceCards = getCardValue("A");
  expect(aceCards).toEqual("Ace Card");
});
// Case 5: Handle Invalid Cards:
