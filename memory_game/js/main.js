const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

const cardOne = cards[0];
console.log("user flipped " + cardOne);
cardsInPlay.push(cardOne);

const cardTwo = cards[1];
console.log("user flipped " + cardTwo);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
