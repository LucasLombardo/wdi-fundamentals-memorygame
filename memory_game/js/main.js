const cards = [
  { rank: "queen", suit: "hearts", cardImg: "images/queen-of-hearts.png" },
  { rank: "queen", suit: "diamonds", cardImg: "images/queen-of-diamonds.png" },
  { rank: "king", suit: "hearts", cardImg: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImg: "images/king-of-diamonds.png" }
];

const cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

function flipCard(cardId) {
  console.log("user flipped " + cards[cardId].rank);
  console.log(
    `flipped suit = ${cards[cardId].suit} and img = ${cards[cardId].cardImg}`
  );
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);
