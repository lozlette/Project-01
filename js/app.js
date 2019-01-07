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
    snakesAndLadders.forEach(snklad => {
      if (player1Position === snklad.start) {
        removePlayer1FromSquare()
        if (snklad.start === 7 || 13 || 34){
          ladderAlert()
        } else if (snklad.start === 18 || 56 || 63){
          snakeAlert()
        }
        setTimeout(() => {
          player1NewPosition = snklad.end
          squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
          console.log(squareToMoveTo)
          addPlayer1ToSquare()
          player1Position = player1NewPosition
        }, 1100)
      } else if (player2Position === snklad.start) {
        removePlayer2FromSquare()
        if (snklad.start === 7 || 13 || 34){
          ladderAlert()
        } else if (snklad.start === 18 || 56 || 63){
          snakeAlert()
        }
        setTimeout(() => {
          player2NewPosition = snklad.end
          squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
          console.log(squareToMoveTo2)
          addPlayer2ToSquare()
          player1Position = player2NewPosition
        }, 1100)
      }
    })
  }

  function snakeAlert(){
    h2.innerHTML = 'Bad Luck! Go to the bottom of the snake'
  }

  function ladderAlert(){
    h2.innerHTML = 'Congratulations! You get to climb the ladder!'
  }

  function clearPreviousSquare(){
    if(squareToMoveTo) {
      removePlayer1FromSquare()
    }
    if(squareToMoveTo2) {
      removePlayer2FromSquare()
    }
  }

  function rollDice() {
    console.log(player1Position)
    console.log(player2Position)
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const diceRoll2 = Math.floor(Math.random() * 6) + 1
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
