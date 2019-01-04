document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  let squareToMoveTo
  let player1Position = 0
  let player1NewPosition
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

  function ladder(){
    //if squareToMoveTo is bottom of ladder1 move to top of ladder- using data id?
    if(squareToMoveTo.dataset.id === '7') {
      console.log('bottom of ladder!')
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
    //remove counter from previous square
    // if (player1Position){
    //   squareToMoveTo.classList.remove('player1')
    // }
    console.log(squareToMoveTo)
  }
  dice.addEventListener('click', rollDice)
})
