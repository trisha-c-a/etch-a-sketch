const container = document.querySelector(".container");
const N = 16;

//Generates a random color for each square
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//Creates a grid
function createGrid(N) {
  const totalSquares = N * N;
  const squareSize = 700/(N+1);
  
  container.style.width = `${700}px`;

  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  // Hover effect using JS and CSS
  document.body.addEventListener('mouseover', e => {
    let button = e.target.closest('.square');
    if (!button) { return; }
    clearTimeout(button._hoverTimeout);
    button.style.backgroundColor = getRandomColor();
  });

  document.body.addEventListener('mouseout', e => {
    let button = e.target.closest('.square');
    if (!button) { return; }
    button._hoverTimeout = setTimeout(() => {
      button.style.backgroundColor = '';
    }, 1000);
  });

}

/*
Adds functionality to a button that allows a user to customize the grid's size
-Checks if a user has entered an grid size between 4 and 100 and if the value entered is not Null
-Passes the grid size to createGrid() to generate the new grid
*/
const gridSizeButton = document.querySelector(".customGridButton");
gridSizeButton.textContent = "Click here to change the grid size to your liking!"
gridSizeButton.addEventListener("click",()=>{
  let message = parseInt(prompt("To customize the grid size please pick a number between 4 and 100"));
  
  if (message<4||message>100||isNaN(message)){
    alert("Please enter a valid number between 4 and 100.");
  }
  else{
    container.innerHTML = ''; //Clears the existing grid
    createGrid(message);
  }
})

createGrid(N);