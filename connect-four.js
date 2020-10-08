import Game from './game.js'

window.addEventListener('DOMContentLoaded', event => {
  let game;

  let newGameButton = document.getElementById('new-game');
  const player1Box = document.getElementById("player-1-name")
  const player2Box = document.getElementById("player-2-name")


  player1Box.addEventListener('keyup', event => {
    playerNameCheck();

  })


  player2Box.addEventListener('keyup', event => {
    playerNameCheck();
  })


  function playerNameCheck () {

    let player1 = player1Box.value
    let player2 = player2Box.value
    newGameButton.disabled = player1.length === 0 || player2.length === 0;

}



















})
