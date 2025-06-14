function isProperFraction(numerator, denominator) {
  if (numerator < denominator && numerator > 0 && denominator > 0) return true;
  // add your completed function from key-implement here
  if (numerator > denominator) return false;
  if (numerator < 0 || denominator < 0) return false;
  if (numerator === denominator) return false;
}

module.exports = isProperFraction;
