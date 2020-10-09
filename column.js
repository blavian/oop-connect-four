import Game from './game.js'

   export default class Column{
  constructor(){
    this.tokens = [null, null, null, null, null, null]
  }

  add(playerNumber){
    for (let i = tokens.length - 1; i >= 0; i--) {
      if(this.tokens[i] === null) {
        tokens[i] = playerNumber;
        break;
      }
    }
  }

  getTokenAt(rowIndex){
    return this.tokens[rowIndex];

  }
}
