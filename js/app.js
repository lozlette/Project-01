document.addEventListener('DOMContentLoaded', () => {
  const width = 8
  const grid = document.querySelector('.grid')
  let square

  function boardSetup(){
    for (let i=0; i<width*width; i++){
      //create div in DOM
      square = document.createElement('div')
      //connect square variable with css class
      square.className = 'square'
      //append the square to the grid
      grid.appendChild(square)
    }
  }

  boardSetup()
})
