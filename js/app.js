document.addEventListener('DOMContentLoaded', () => {

  const dice = document.querySelector('.dice-button')
  const newGamebtn = document.querySelector('.new-game')
  const quitbtn = document.querySelector('.quit')
  const h2 = document.querySelector('.snakeLadderAlert')
  const h3 = document.querySelector('h3')
  const width = 8
  const grid = document.querySelector('.grid')
  const snakeAudio = document.querySelector('.rattle')
  const snake2Audio = document.querySelector('.rattle2')
  const ladderAudio = document.querySelector('.ding')
  const startButton = document.querySelector('button')
  const startScreen = document.querySelector('.startScreen')
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

    [{start: 15, end: 22}, {start: 20, end: 27}, {start: 39, end: 46}, {start: 12, end: 3}, {start: 38, end: 29}, {start: 42, end: 35}],

    [{start: 10, end: 17}, {start: 12, end: 21}, {start: 53, end: 62}, {start: 23, end: 16}, {start: 34, end: 25}, {start: 60, end: 52}],

    [{start: 4, end: 12}, {start: 34, end: 42}, {start: 55, end: 62}, {start: 41, end: 33}, {start: 10, end: 3}, {start: 40, end: 32}],

    [{start: 5, end: 13}, {start: 23, end: 30}, {start: 43, end: 52}, {start: 17, end: 10}, {start: 31, end: 22}, {start: 53, end: 45}],

    [{start: 1, end: 9}, {start: 14, end: 23}, {start: 35, end: 44},
      {start: 18, end: 11}, {start: 31, end: 24}, {start: 58, end: 50}]
  ]



  //-------------------------------------------------
  //Function to set up the game board


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
    player1Position = 0
    player2Position = 0
    h2.innerHTML = ''
    h3.innerHTML = ''
  }



  //-------------------------------------------------------------
  // Function to randomly choose a game board from 6 arrays


  function chooseBoard(){
    newBoard = snakesAndLadders[Math.floor(Math.random()*snakesAndLadders.length)]
    boardSetup(newBoard.slice(3), newBoard.slice(0,3))
    playSnake2Audio()
  }

  chooseBoard()



  // -------------------------------------------------------------
  //function to hide start screen when player clicks 'Play' button


  function hideScreen(){
    startScreen.classList.add('hide')
    snake2Audio.play()
  }



  // --------------------------------------------------------------
  // Audio functions


  function playLadderAudio(){
    ladderAudio.play()
  }

  function playSnakeAudio(){
    snakeAudio.play()
  }

  function playSnake2Audio(){
    snake2Audio.play()
  }



  //-----------------------------------------------------------------
  // Alert functions


  function snakeAlert(){
    if (player1Position >= 64 || player2Position >= 64)
      return
    h2.innerHTML = 'Bad Luck! Go to the bottom of the snake'
    playSnakeAudio()
  }

  function ladderAlert(){
    if (player1Position >= 64 || player2Position >= 64)
      return
    h2.innerHTML = 'Congratulations! You get to climb the ladder!'
    playLadderAudio()
  }



  //------------------------------------------------------------------
  // Function to move player piece to top of ladder or bottom of snake


  function newPositionAfterSnakeOrLadder(array, alert){
    array.forEach(snklad => {
      if (player1Position === snklad.start &&
        player2Position === snklad.start){
        removePlayer1FromSquare()
        removePlayer2FromSquare()
        alert()
        setTimeout(() => {
          player1NewPosition = snklad.end
          squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
          addPlayer1ToSquare()
          player1Position = player1NewPosition
        }, 1300)
        setTimeout(() => {
          player2NewPosition = snklad.end
          squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
          addPlayer2ToSquare()
          player2Position = player2NewPosition
        }, 1300)
      } else if (player1Position === snklad.start) {
        removePlayer1FromSquare()
        alert()
        setTimeout(() => {
          player1NewPosition = snklad.end
          squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
          addPlayer1ToSquare()
          player1Position = player1NewPosition
        }, 1300)
      } else if (player2Position === snklad.start) {
        removePlayer2FromSquare()
        alert()
        setTimeout(() => {
          player2NewPosition = snklad.end
          squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
          addPlayer2ToSquare()
          player2Position = player2NewPosition
        }, 1300)
      }
    })
  }



  //------------------------------------------------------------------
  // remove player pieces from board ready for next roll of the dice


  function clearPreviousSquare(){
    if(squareToMoveTo) {
      removePlayer1FromSquare()
    }
    if(squareToMoveTo2) {
      removePlayer2FromSquare()
    }
  }



  //--------------------------------------------------------------------
  //Function that generates random number between 1 and 6, and then moves player to next position after dice roll, checking for any snakes or ladders, and updating the innerHTML of h3 to display dice rolls.


  function rollDice() {
    if (player1Position >= 64 || player2Position >= 64)
      return
      //generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const diceRoll2 = Math.floor(Math.random() * 6) + 1
    //update h2 to tell player who rolled what number
    h3.innerHTML = `Player 1 rolled ${diceRoll} & Player 2 rolled ${diceRoll2}`
    //Add diceRoll number to data-id square that player is on
    player1NewPosition = player1Position += diceRoll
    player2NewPosition = player2Position += diceRoll2
    displayWinner()
    squareToMoveTo = document.querySelector(`[data-id="${player1NewPosition}"]`)
    squareToMoveTo2 = document.querySelector(`[data-id="${player2NewPosition}"]`)
    //add class of player to squareToMoveTo
    addPlayer1ToSquare()
    addPlayer2ToSquare()
    newPositionAfterSnakeOrLadder(newBoard.slice(0,3), ladderAlert)
    newPositionAfterSnakeOrLadder(newBoard.slice(3), snakeAlert)
    console.log(player1NewPosition)
    console.log(player2NewPosition)

  }



  //---------------------------------------------------------------
  //Function to update h2 innerHTML with the winner


  function displayWinner() {
    if (player1Position >= 64){
      h2.innerHTML = 'Player 1 Wins!'
    } else if(player2Position >= 64){
      h2.innerHTML = 'Player 2 Wins!'
    } else {
      h2.innerHTML = ''
    }
  }



  //-----------------------------------------------------------------
  // Functions to add or remove the player's counters from the grid squares.


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



  //-----------------------------------------------------------------
  // Function to reload page when user presses quit button


  function refreshPage(){
    location.reload()
  }


  //-----------------------------------------------------------------
  // Event Listeners


  startButton.addEventListener('click', hideScreen)
  dice.addEventListener('mousedown', clearPreviousSquare)
  dice.addEventListener('mouseup', rollDice)
  newGamebtn.addEventListener('click', chooseBoard)
  quitbtn.addEventListener('click', refreshPage)



  //------------------------------------------------------------------

})
