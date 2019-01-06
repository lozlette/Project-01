document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  const p = document.querySelector('p')
  // const counter1 = document.querySelector('player1Counter')
  let squareToMoveTo
  let squareToMoveTo2
  let player1Position = 0
  let player2Position = 0
  let player1NewPosition
  let player2NewPosition
  let topLadder1
  let topLadder2
  let topLadder3
  let bottomSnake1
  let bottomSnake2
  let bottomSnake3


  // if square has a class of snake or ladder, replace it with class of player1
  // function removeSnakeOrLadderClass(){
  //   if (squareToMoveTo.classList.contains('snake')){
  //     squareToMoveTo.classList.remove('snake')
  //   } else if (squareToMoveTo.classList.contains('ladder')){
  //     squareToMoveTo.classList.remove('ladder')
  //   }
  // }

  // Change player1position to reflect move up ladder or down snake
  function newPositionAfterSnakeOrLadder(playerSquare, newPosition){
    if (playerSquare.dataset.id === '7'){
      newPosition = 9
    } else if (playerSquare.dataset.id === '13'){
      newPosition = 27
    } else if (playerSquare.dataset.id === '34'){
      newPosition = 60
    } else if (playerSquare.dataset.id === '18'){
      newPosition = 16
    } else if (playerSquare.dataset.id === '56'){
      newPosition = 42
    } else if (playerSquare.dataset.id === '63'){
      newPosition = 22
    }
  }

  //Move players piece to the top of the ladder
  function ladders(){
    if (squareToMoveTo.dataset.id === '7') {
      //after a delay of 1.5 seconds remove player1Counter from that square...
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        // .. and then add player1Counter class to square with data-id of 9
        topLadder1 = document.querySelector(`[data-id="${9}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(topLadder1)
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '13') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        topLadder2 = document.querySelector(`[data-id="${27}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(topLadder2)
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '34') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        topLadder3 = document.querySelector(`[data-id="${60}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(topLadder3)
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    }
  }

  function snakes(){
    if (squareToMoveTo.dataset.id === '18') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake1 = document.querySelector(`[data-id="${16}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(bottomSnake1)
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '56') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake2 = document.querySelector(`[data-id="${42}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(bottomSnake2)
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '63') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake3 = document.querySelector(`[data-id="${22}"]`)
        newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer1ToSquare(bottomSnake3)
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    }
  }

  //remove counter from previous turn's square
  function clearPreviousSquare(){
    removePlayer1FromSquare(squareToMoveTo)
    topLadder1.classList.remove('player1Counter')
    topLadder2.classList.remove('player1Counter')
    topLadder3.classList.remove('player1Counter')
    bottomSnake1.classList.remove('player1Counter')
    bottomSnake2.classList.remove('player1Counter')
    bottomSnake3.classList.remove('player1Counter')
  }

  function rollDice() {
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const diceRoll2 = Math.floor(Math.random() * 6) + 1
    console.log(diceRoll)
    console.log(diceRoll2)
    //Add diceRoll number to data-id square that player1 is on
    player1NewPosition = player1Position += diceRoll
    player2NewPosition = player2Position += diceRoll2
    checkForWinner()
    squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
    squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
    //add class of player1 to squareToMoveTo
    addPlayer1ToSquare(squareToMoveTo)
    addPlayer2ToSquare(squareToMoveTo2)
    // removeSnakeOrLadderClass()
    ladders()
    snakes()
    console.log(player1NewPosition)
    console.log(player2NewPosition)
  }

  function checkForWinner() {
    if (player1Position >= 64){
      p.innerHTML = 'Player 1 Wins!'
      console.log('player1wins')
    } else if(player2Position >= 64){
      p.innerHTML = 'Player 2 Wins!'
    } else {
      p.innerHTML = ''
    }
  }

  function addPlayer1ToSquare(positionOnBoard){
    positionOnBoard.classList.add('player1Counter')
    // squareToMoveTo.classList = counter1
  }

  function addPlayer2ToSquare(positionOnBoard){
    positionOnBoard.classList.add('player2Counter')
    // squareToMoveTo.classList = counter1
  }


  function removePlayer1FromSquare(positionOnBoard){
    console.log(squareToMoveTo)
    positionOnBoard.classList.remove('player1Counter')
  }

  dice.addEventListener('mouseup', rollDice)
  dice.addEventListener('mousedown', clearPreviousSquare)
})
