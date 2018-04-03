function randomNumber(lowerNumber, higherNumber) {
  if ( isNaN(lowerNumber) || isNaN(higherNumber) ) {
    throw new Error("Both arguments must be numbers");
  }
  return Math.floor(Math.random() * (higherNumber - lowerNumber + 1)) + lowerNumber;
}
document.write(randomNumber('two', 4));
