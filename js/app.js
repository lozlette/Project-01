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
  let topLadder1
  let topLadder2
  let topLadder3
  let bottomSnake1
  let bottomSnake2
  let bottomSnake3
  let positionOnBoard
  let newPosition
  const snakesAndLadders = [{start: 7, end: 9}, {start: 13, end: 27}, {start: 34, end: 60},{start: 18, end: 16}, {start: 56, end: 42}, {start: 63, end: 22}]


  // if square has a class of snake or ladder, replace it with class of player
  function removeSnakeOrLadderClass(positionOnBoard){
    if (positionOnBoard.classList.contains('snake')){
      positionOnBoard.classList.remove('snake')
    } else if (positionOnBoard.classList.contains('ladder')){
      positionOnBoard.classList.remove('ladder')
    }
  }

  // Change player position to reflect move up ladder or down snake
  function newPositionAfterSnakeOrLadder(){
    snakesAndLadders.forEach(obj => {
      if (player1Position === obj.start) {
        player1Position = obj.end
        console.log('function working')
      } else if (player2Position === obj.start) {
        player2Position = obj.end
        console.log('function working')
      }
    })
  }


    // if (playerSquare.dataset.id === '7'){
    //   newPosition = 9
    // } else if (playerSquare.dataset.id === '13'){
    //   newPosition = 27
    // } else if (playerSquare.dataset.id === '34'){
    //   newPosition = 60
    // } else if (playerSquare.dataset.id === '18'){
    //   newPosition = 16
    // } else if (playerSquare.dataset.id === '56'){
    //   newPosition = 42
    // } else if (playerSquare.dataset.id === '63'){
    //   newPosition = 22
    // }
    // return newPosition
  // }

  //Move players piece to the top of the ladder
  function ladder(){
    if (squareToMoveTo.dataset.id === '7') {
      //after a delay of 1.5 seconds remove player1Counter from that square...
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        // .. and then add player1Counter class to square with data-id of 9
        topLadder1 = document.querySelector(`[data-id="${9}"]`)
        player1Position = newPositionAfterSnakeOrLadder()
        addPlayer1ToSquare(topLadder1)
        congratulate()
      }, 1100)
    } else if (squareToMoveTo2.dataset.id === '7'){
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        topLadder1 = document.querySelector(`[data-id="${9}"]`)
        player2Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(topLadder1)
        congratulate()
      }, 1100)
    } else if (squareToMoveTo.dataset.id === '13') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        topLadder2 = document.querySelector(`[data-id="${27}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        addPlayer1ToSquare(topLadder2)
        congratulate()
      }, 1500)
    } else if (squareToMoveTo2.dataset.id === '13') {
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        topLadder2 = document.querySelector(`[data-id="${27}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(topLadder2)
        congratulate()
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '34') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        topLadder3 = document.querySelector(`[data-id="${60}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        addPlayer1ToSquare(topLadder3)
        congratulate()
      }, 1500)
    } else if (squareToMoveTo2.dataset.id === '34') {
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        topLadder3 = document.querySelector(`[data-id="${60}"]`)
        player2Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(topLadder3)
        congratulate()
      }, 1500)
    }
  }

  function snake(){
    if (squareToMoveTo.dataset.id === '18') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake1 = document.querySelector(`[data-id="${16}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        addPlayer1ToSquare(bottomSnake1)
        badLuck()
      }, 1500)
    } else if (squareToMoveTo2.dataset.id === '18') {
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        bottomSnake1 = document.querySelector(`[data-id="${16}"]`)
        player2Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(bottomSnake1)
        badLuck()
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '56') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake2 = document.querySelector(`[data-id="${42}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        addPlayer1ToSquare(bottomSnake2)
        badLuck()
      }, 1500)
    } else if (squareToMoveTo2.dataset.id === '56') {
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        bottomSnake2 = document.querySelector(`[data-id="${42}"]`)
        player2Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(bottomSnake2)
        badLuck()
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '63') {
      setTimeout(() => {
        removePlayer1FromSquare(squareToMoveTo)
        bottomSnake3 = document.querySelector(`[data-id="${22}"]`)
        player1Position = newPositionAfterSnakeOrLadder(squareToMoveTo, player1Position)
        addPlayer1ToSquare(bottomSnake3)
        badLuck()
      }, 1500)
    } else if (squareToMoveTo2.dataset.id === '63') {
      setTimeout(() => {
        removePlayer2FromSquare(squareToMoveTo2)
        bottomSnake3 = document.querySelector(`[data-id="${22}"]`)
        player2Position = newPositionAfterSnakeOrLadder(squareToMoveTo2, player2Position)
        addPlayer2ToSquare(bottomSnake3)
        badLuck()
      }, 1500)
    }
  }

  function congratulate(){
    h2.innerHTML = 'Congratulations! You get to climb the ladder!'
  }

  function badLuck(){
    h2.innerHTML = 'Bad Luck! Go to the bottom of the snake'
  }
  //remove counter from previous turn's square
  function clearPreviousSquare(){
    if(squareToMoveTo) removePlayer1FromSquare(squareToMoveTo)
    if(squareToMoveTo2) removePlayer2FromSquare(squareToMoveTo2)
    if (topLadder1)       topLadder1.classList.remove('player1Counter')
    if (topLadder1)
      topLadder1.classList.remove('player2Counter')
    if (topLadder2)     topLadder2.classList.remove('player1Counter')
    if (topLadder2)
      topLadder2.classList.remove('player2Counter')
    if (topLadder3)
      topLadder3.classList.remove('player1Counter')
    if (topLadder3)
      topLadder3.classList.remove('player2Counter')
    if (bottomSnake1)
      bottomSnake1.classList.remove('player1Counter')
    if (bottomSnake1)
      bottomSnake1.classList.remove('player2Counter')
    if (bottomSnake2)
      bottomSnake2.classList.remove('player1Counter')
    if (bottomSnake2)
      bottomSnake2.classList.remove('player2Counter')
    if (bottomSnake3)
      bottomSnake3.classList.remove('player1Counter')
    if (bottomSnake3)
      bottomSnake3.classList.remove('player2Counter')
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
    addPlayer1ToSquare(squareToMoveTo)
    addPlayer2ToSquare(squareToMoveTo2)
    removeSnakeOrLadderClass(squareToMoveTo)
    removeSnakeOrLadderClass(squareToMoveTo2)
    ladder()
    snake()
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

  function addPlayer1ToSquare(positionOnBoard){
    if (player1Position < 65){
      positionOnBoard.classList.add('player1Counter')
    }
  }

  function addPlayer2ToSquare(positionOnBoard){
    if (player2Position < 65){
      positionOnBoard.classList.add('player2Counter')
    }
  }


  function removePlayer1FromSquare(positionOnBoard){
    console.log(positionOnBoard)
    positionOnBoard.classList.remove('player1Counter')
  }

  function removePlayer2FromSquare(positionOnBoard){
    console.log(positionOnBoard)
    positionOnBoard.classList.remove('player2Counter')
  }

  dice.addEventListener('mousedown', clearPreviousSquare)
  dice.addEventListener('mouseup', rollDice)
})
