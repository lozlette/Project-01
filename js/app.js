document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  // const squareToMoveTo = document.querySelector(`[data-id=${number}]`)

  let player1Position = 1
  let player2Position = 1

  function rollDice() {
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    console.log(diceRoll)
    console.log(player1Position += diceRoll)


    //Add diceRoll number to data-id square that player1 is on

  }


  dice.addEventListener('click', rollDice)
})
