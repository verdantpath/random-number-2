function randomNumber(lowerNumber, higherNumber) {
  return Math.floor(Math.random() * (higherNumber - lowerNumber + 1)) + lowerNumber;
}s
document.write(randomNumber(2, 4));
