document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  let squareToMoveTo
  let player1Position = 0
  let player1NewPosition
  let topLadder1

  // let player2Position = 1

  //if square has a class of snake or ladder, replace it with class of player1
  function removeSnakeOrLadderClass(){
    if (squareToMoveTo.classList.contains('snake')){
      squareToMoveTo.classList.remove('snake')
    }
    if (squareToMoveTo.classList.contains('ladder')){
      squareToMoveTo.classList.remove('ladder')
    }
  }

  //if squareToMoveTo is bottom of ladder1 move to top of ladder
  function ladder(){
    if(squareToMoveTo.dataset.id === '7') {
      //after a delay of 1.5 seconds remove player1Counter from that square
      setTimeout(() => {
        squareToMoveTo.classList.remove('player1Counter')
        // add class to square with data-id of 9
        topLadder1 = document.querySelector(`[data-id="${9}"]`)
        topLadder1.classList.add('player1Counter')
        removeSnakeOrLadderClass()
        console.log(topLadder1)
        console.log('You get to go up the ladder!')
      }, 1500)
    }
  }

  //remove counter from previous square
  function clearPreviousSquare(){
    squareToMoveTo.classList.remove('player1Counter')
    if (topLadder1.classList.contains('player1Counter')){
      topLadder1.classList.remove('player1Counter')
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
    removeSnakeOrLadderClass()
    ladder()
    console.log(squareToMoveTo)
  }

  dice.addEventListener('mouseup', rollDice)
  dice.addEventListener('mousedown', clearPreviousSquare)
})
