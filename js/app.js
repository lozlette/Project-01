document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  const p = document.querySelector('p')
  let squareToMoveTo
  let player1Position = 0
  let player1NewPosition
  let topLadder1
  let topLadder2
  let topLadder3
  let bottomSnake1
  let bottomSnake2
  let bottomSnake3

  // let player2Position = 0

  // if square has a class of snake or ladder, replace it with class of player1
  // function removeSnakeOrLadderClass(){
  //   if (squareToMoveTo.classList.contains('snake')){
  //     squareToMoveTo.classList.remove('snake')
  //   } else if (squareToMoveTo.classList.contains('ladder')){
  //     squareToMoveTo.classList.remove('ladder')
  //   }
  // }

  function removePlayer1Counter() {
    squareToMoveTo.classList.remove('player1Counter')
  }
  // Change player1position to reflect move up ladder or down snake
  function newPositionAfterSnakeOrLadder(){
    if (squareToMoveTo.dataset.id === '7'){
      player1Position = 9
    } else if (squareToMoveTo.dataset.id === '13'){
      player1Position = 27
    } else if (squareToMoveTo.dataset.id === '34'){
      player1Position = 60
    } else if (squareToMoveTo.dataset.id === '18'){
      player1Position = 16
    } else if (squareToMoveTo.dataset.id === '56'){
      player1Position = 42
    } else if (squareToMoveTo.dataset.id === '63'){
      player1Position = 22
    }
  }

  //Move players piece to the top of the ladder
  function ladders(){
    if (squareToMoveTo.dataset.id === '7') {
      //after a delay of 1.5 seconds remove player1Counter from that square...
      setTimeout(() => {
        removePlayer1Counter()
        // .. and then add player1Counter class to square with data-id of 9
        topLadder1 = document.querySelector(`[data-id="${9}"]`)
        newPositionAfterSnakeOrLadder()
        topLadder1.classList.add('player1Counter')
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '13') {
      setTimeout(() => {
        removePlayer1Counter()
        topLadder2 = document.querySelector(`[data-id="${27}"]`)
        newPositionAfterSnakeOrLadder()
        topLadder2.classList.add('player1Counter')
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '34') {
      setTimeout(() => {
        removePlayer1Counter()
        topLadder3 = document.querySelector(`[data-id="${60}"]`)
        newPositionAfterSnakeOrLadder()
        topLadder3.classList.add('player1Counter')
        p.innerHTML = 'Congratulations! You get to climb the ladder!'
      }, 1500)
    }
  }

  function snakes(){
    if (squareToMoveTo.dataset.id === '18') {
      setTimeout(() => {
        removePlayer1Counter()
        bottomSnake1 = document.querySelector(`[data-id="${16}"]`)
        newPositionAfterSnakeOrLadder()
        bottomSnake1.classList.add('player1Counter')
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '56') {
      setTimeout(() => {
        removePlayer1Counter()
        bottomSnake2 = document.querySelector(`[data-id="${42}"]`)
        newPositionAfterSnakeOrLadder()
        bottomSnake2.classList.add('player1Counter')
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    } else if (squareToMoveTo.dataset.id === '63') {
      setTimeout(() => {
        removePlayer1Counter()
        bottomSnake3 = document.querySelector(`[data-id="${22}"]`)
        newPositionAfterSnakeOrLadder()
        bottomSnake3.classList.add('player1Counter')
        p.innerHTML = 'Bad Luck! Go to the bottom of the snake'
      }, 1500)
    }
  }

  //remove counter from previous turn's square
  function clearPreviousSquare(){
    removePlayer1Counter()
    if (topLadder1.classList.contains('player1Counter')){
      topLadder1.classList.remove('player1Counter')
    } else if (topLadder2.classList.contains('player1Counter')){
      topLadder2.classList.remove('player1Counter')
    } else if (topLadder3.classList.contains('player1Counter')){
      topLadder3.classList.remove('player1Counter')
    } else if (bottomSnake1.classList.contains('player1Counter')){
      bottomSnake1.classList.remove('player1Counter')
    } else if (bottomSnake2.classList.contains('player1Counter')){
      bottomSnake2.classList.remove('player1Counter')
    } else if (bottomSnake3.classList.contains('player1Counter')){
      bottomSnake3.classList.remove('player1Counter')
    }
  }

  function rollDice() {
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    console.log(diceRoll)
    //Add diceRoll number to data-id square that player1 is on
    player1NewPosition = player1Position += diceRoll
    squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
    //add class of player1 to squareToMoveTo
    squareToMoveTo.classList.add('player1Counter')
    // removeSnakeOrLadderClass()
    ladders()
    snakes()
    console.log(player1NewPosition)
  }

  dice.addEventListener('mouseup', rollDice)
  dice.addEventListener('mousedown', clearPreviousSquare)
})
