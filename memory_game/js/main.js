"use strict";

const cards = [
  { rank: "queen", suit: "hearts", cardImg: "images/queen-of-hearts.png" },
  { rank: "queen", suit: "diamonds", cardImg: "images/queen-of-diamonds.png" },
  { rank: "king", suit: "hearts", cardImg: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImg: "images/king-of-diamonds.png" }
];

const cardsInPlay = [];

function checkForMatch(cardId, cardClicked) {
  cardClicked.setAttribute("src", cards[cardId].cardImg);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      openModal("You found a match!");
    } else {
      openModal("Sorry, try again.");
    }
  }
}

function openModal(message) {
  const modal = document.querySelector("#modal");
  const msg = document.querySelector("#msg");
  const btn = document.querySelector("#close-modal");
  // set message and open modal
  msg.textContent = message;
  modal.removeAttribute("class", "closed");
  // add event listeners for closing
  btn.addEventListener("click", () => {
    modal.className = "closed";
  });
  modal.addEventListener("click", e => {
    // close modal if user clicks outside of popup
    if (e.target.dataset.popup !== "true") {
      modal.className = "closed";
    }
  });
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  console.log("user flipped " + cards[cardId].rank);
  console.log(
    `flipped suit = ${cards[cardId].suit} and img = ${cards[cardId].cardImg}`
  );
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch(cardId, this);
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.querySelector("#game-board").appendChild(cardElement);
  }
}

createBoard();
