document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  const resetbtn = document.querySelector('.reset-button')
  const newGamebtn = document.querySelector('.new-game')
  const h2 = document.querySelector('h2')
  const h3 = document.querySelector('h3')
  const width = 8
  const grid = document.querySelector('.grid')
  let square
  let squareToMoveTo
  let squareToMoveTo2
  let player1Position = 0
  let player2Position = 0
  let player1NewPosition
  let player2NewPosition
  let newBoard
  const snakesAndLadders =
    [
      [{start: 13, end: 20}, {start: 30, end: 37}, {start: 43, end: 50},{start: 18, end: 9}, {start: 31, end: 22}, {start: 63, end: 54}],
      [{start: 15, end: 22}, {start: 20, end: 27}, {start: 39, end: 46}, {start: 12, end: 3}, {start: 38, end: 29}, {start: 42, end: 35}]
    ]


  function boardSetup(array1, array2){
    grid.innerHTML = ''
    for (let i=width*width; i>0; i--){
      //create div in DOM
      square = document.createElement('div')
      //connect square variable with css class
      square.className = 'square'
      square.innerHTML = `<p>${i}</p>`
      square.setAttribute('data-id', i)
      grid.appendChild(square)
      //loop through snakes Ladders arrays to assign snake or ladder class
      array1.forEach(snake => {
        if ( i === snake.start || i === snake.end) {
          square.classList.add('snake')
        }
        array2.forEach(ladder => {
          if ( i === ladder.start || i === ladder.end) {
            square.classList.add('ladder')
          }
        })
      })
    }
  }


  function chooseBoard(){
    newBoard = snakesAndLadders[Math.floor(Math.random()*snakesAndLadders.length)]
    console.log(newBoard)
    // console.log(Math.floor(Math.random()*snakesAndLadders.length))
    boardSetup(newBoard.slice(3), newBoard.slice(0,3))
  }

  chooseBoard()

  // Change player position to reflect move up ladder or down snake
  function newPositionAfterSnakeOrLadder(array, alert){
    array.forEach(snklad => {
      if (player1Position === snklad.start) {
        console.log(snklad)
        removePlayer1FromSquare()
        alert()
        setTimeout(() => {
          player1NewPosition = snklad.end
          squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
          console.log(squareToMoveTo)
          addPlayer1ToSquare()
          player1Position = player1NewPosition
        }, 1100)
      } else if (player2Position === snklad.start) {
        removePlayer2FromSquare()
        alert()
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
    //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const diceRoll2 = Math.floor(Math.random() * 6) + 1
    //update h2 to tell player who rolled what Number
    h3.innerHTML = `Player 1 rolled ${diceRoll} & Player 2 rolled ${diceRoll2}`
    //Add diceRoll number to data-id square that player is on
    player1NewPosition = player1Position += diceRoll
    player2NewPosition = player2Position += diceRoll2
    checkForWinner()
    squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
    squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
    //add class of player to squareToMoveTo
    addPlayer1ToSquare()
    addPlayer2ToSquare()
    newPositionAfterSnakeOrLadder(snakesAndLadders[0].slice(0,3), ladderAlert)
    newPositionAfterSnakeOrLadder(snakesAndLadders[0].slice(3), snakeAlert)
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

  function reloadPage(){
    location.reload()
  }

  dice.addEventListener('mousedown', clearPreviousSquare)
  dice.addEventListener('mouseup', rollDice)
  resetbtn.addEventListener('click', reloadPage)
  newGamebtn.addEventListener('click', chooseBoard)
})
