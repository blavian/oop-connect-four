 export class Game {
  constructor(playerOneName, playerTwoName) {
    this.player1 = playerOneName;
    this.player2= playerTwoName;
    this.currentPlayer = 1;

  }

  getName() {
    return `${this.playerOneName} vs. ${this.playerTwoName}`
  }

  playInColumn() {
    document.addEventListener('click', event => {
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
      } else (this.currentPlayer === 2) {
        this.currentplayer = 1;
      }
    })
  }
}
