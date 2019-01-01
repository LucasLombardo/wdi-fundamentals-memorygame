"use strict";

let cards = [
  { rank: "queen", suit: "hearts", cardImg: "images/queen-of-hearts.png" },
  { rank: "queen", suit: "diamonds", cardImg: "images/queen-of-diamonds.png" },
  { rank: "king", suit: "hearts", cardImg: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImg: "images/king-of-diamonds.png" }
];
let cardsInPlay = [];

init();

function init() {
  // create initial board
  createBoard();
  // add event listeners on the reset game buttons
  const resetBtns = document.querySelectorAll("reset");
  resetBtns.forEach(node => {
    node.addEventListener("click", createBoard);
  });
}

// LOGIC FUNCTIONS

function createBoard() {
  // randomize cards
  cards = randomizeArr(cards);
  // clear current cards in play
  cardsInPlay = [];
  document.querySelector("#game-board").innerHTML = "";
  // set board with current cards
  setBoard();
}

function setBoard() {
  // sets the board as the current cards
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.querySelector("#game-board").appendChild(cardElement);
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  // push flipped card to cardsInPlay
  cardsInPlay.push(cards[cardId].rank);
  // change cards image to the front of card
  this.setAttribute("src", cards[cardId].cardImg);
  checkForMatch();
}

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    // if two cards are in play, display a message whether user won
    if (cardsInPlay[0] === cardsInPlay[1]) {
      openModal("You found a match!");
    } else {
      openModal("Sorry, try again.");
    }
  }
}

// HELPER FUNCTIONS

function randomizeArr(arr) {
  // randomizes an array's order
  const randArr = [];
  while (randArr.length < arr.length) {
    const rand = Math.round(Math.random() * (arr.length - 1));
    if (randArr.indexOf(arr[rand]) === -1) {
      randArr.push(arr[rand]);
    }
  }
  return randArr;
}

function openModal(message) {
  // opens a modal popup with the given message
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
