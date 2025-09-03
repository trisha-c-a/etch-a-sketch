const container = document.querySelector(".container");
const N = 16;
squareSize = 500/(N+1);

function createGrid(N) {
  const totalSquares = N * N;
  
  container.style.width = `${500}px`;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
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
    button.style.backgroundColor = 'pink';
  });

  document.body.addEventListener('mouseout', e => {
    let button = e.target.closest('.square');
    if (!button) { return; }
    button._hoverTimeout = setTimeout(() => {
      button.style.backgroundColor = '';
    }, 500);
  });

}

createGrid(N);
