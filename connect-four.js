import { Game } from './game.js'

let game = undefined;
const clickTarget = document.getElementById('click-target')

function updateUI() {
  let boardHolder = document.getElementById('board-holder')
  if (game === undefined) {
    boardHolder.classList.add("is-invisible")
  } else {
    boardHolder.classList.remove("is-invisible")
    document.getElementById('game-name').innerHTML = getName()

  }


  if (currentPlayer === 1) {
    clickTarget.classList.add('red');
    clickTarget.classList.remove('black');
  } else if (currentPlayer === 2) {
    clickTarget.classList.add('black');
    clickTarget.classList.remove('red');
  }

}

window.addEventListener('DOMContentLoaded', event => {

  let newGameButton = document.getElementById('new-game');
  const player1Box = document.getElementById("player-1-name");
  const player2Box = document.getElementById("player-2-name");


  player1Box.addEventListener('keyup', event => {
    playerNameCheck();
  })


  player2Box.addEventListener('keyup', event => {
    playerNameCheck();
  })

  newGameButton.addEventListener("click", (event) => {
    game = new Game(player1, player2)
    this.player1 = '';
    this.player2 = '';
    updateUI();
  });


  function playerNameCheck() {

    let player1 = player1Box.value;
    let player2 = player2Box.value;
    newGameButton.disabled = player1.length === 0 || player2.length === 0;


  }

  document
    .getElementById('click-targets')
    .addEventListener('click', event => {
      game.playInColumn();
      updateUI();
    })
















})
