document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  const h2 = document.querySelector('h2')
  // const square = document.querySelector('.square')
  // const counter1 = document.querySelector('player1Counter')
  let squareToMoveTo
  let squareToMoveTo2
  let player1Position = 0
  let player2Position = 0
  let player1NewPosition
  let player2NewPosition
  const snakesAndLadders = [{start: 7, end: 9}, {start: 13, end: 27}, {start: 34, end: 60},{start: 18, end: 16}, {start: 56, end: 42}, {start: 63, end: 22}]

  // Change player position to reflect move up ladder or down snake
  function newPositionAfterSnakeOrLadder(){
    snakesAndLadders.forEach(obj => {
      if (player1Position === obj.start) {
        removePlayer1FromSquare()
        setTimeout(() => {
          player1NewPosition = obj.end
          squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
          console.log('function working')
          addPlayer1ToSquare()
        }, 1100)
      } else if (player2Position === obj.start) {
        removePlayer2FromSquare()
        setTimeout(() => {
          player2NewPosition = obj.end
          squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
          console.log('function working')
          addPlayer2ToSquare()
        }, 1100)
      }
    })
  }


  // function congratulate(){
  //   h2.innerHTML = 'Congratulations! You get to climb the ladder!'
  // }
  //
  // function badLuck(){
  //   h2.innerHTML = 'Bad Luck! Go to the bottom of the snake'
  // }
  // //remove counter from previous turn's square
  function clearPreviousSquare(){
    if(squareToMoveTo) {
      removePlayer1FromSquare()
    }
    if(squareToMoveTo2) {
      removePlayer2FromSquare()
    }
  }

  function rollDice() {
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const diceRoll2 = Math.floor(Math.random() * 6) + 1
    console.log(diceRoll)
    console.log(diceRoll2)
    //Add diceRoll number to data-id square that player is on
    player1NewPosition = player1Position += diceRoll
    player2NewPosition = player2Position += diceRoll2
    checkForWinner()
    squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
    squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
    //add class of player to squareToMoveTo
    addPlayer1ToSquare()
    addPlayer2ToSquare()
    newPositionAfterSnakeOrLadder()
    console.log(player1NewPosition)
    console.log(player2NewPosition)
  }

  function checkForWinner() {
    if (player1Position >= 64){
      h2.innerHTML = 'Player 1 Wins!'
      console.log('player1wins')
    } else if(player2Position >= 64){
      h2.innerHTML = 'Player 2 Wins!'
    } else {
      h2.innerHTML = ''
    }
  }

  function addPlayer1ToSquare(){
    if (player1Position < 65){
      squareToMoveTo.classList.add('player1Counter')
    }
  }

  function addPlayer2ToSquare(){
    if (player2Position < 65){
      squareToMoveTo2.classList.add('player2Counter')
    }
  }


  function removePlayer1FromSquare(){
    squareToMoveTo.classList.remove('player1Counter')
  }

  function removePlayer2FromSquare(){
    squareToMoveTo2.classList.remove('player2Counter')
  }

  dice.addEventListener('mousedown', clearPreviousSquare)
  dice.addEventListener('mouseup', rollDice)
})
