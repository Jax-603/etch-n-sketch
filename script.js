const numOfGrids = 16;
const container = document.querySelector('.container')
const sizeButton = document.querySelector('button')
const clearButton = document.querySelector('button')


const createBoard = (numOfGrids) =>{
for (let i = 0; i < numOfGrids; i++){
  const row = document.createElement('div')
  row.classList.add('grid-row')

  for (let c = 0; c < numOfGrids; c++){
   const widthAndHeight = 960 / numOfGrids
    const containGrid = document.createElement('div')
    containGrid.classList.add('contain-grid')
   
   containGrid.addEventListener('mouseenter', () => {
   containGrid.style.backgroundColor = 'black'
  })
    row.appendChild(containGrid)
  }
  container.appendChild(row)
}
}

createBoard(numOfGrids)

sizeButton.addEventListener('click', () => {
  let userSize = Number(prompt('What size would you like for the new grid?'))

  while (userSize > 100){
  let userSize = Number(prompt('pick a smaller number, 100 or less.'))
}


clearButton.addEventListener('click', () => {
    container.remove();
  })

createBoard(userSize)

})



