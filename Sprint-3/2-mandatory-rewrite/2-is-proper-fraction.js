function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  // add your completed function from key-implement here
  if (Math.abs(numerator) > Math.abs(denominator)) return false;
  if (numerator < 0 || denominator < 0) return false;
  if (numerator === denominator) return false;
}

module.exports = isProperFraction;
