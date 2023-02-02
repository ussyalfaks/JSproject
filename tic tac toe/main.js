const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (const square of squares) {
  square.addEventListener('click', handleClick);
}


for (const square of squares) {
  square.addEventListener('click', handleClick);
}

resetButton.addEventListener('click', resetGame);

function handleClick(event) {
  const square = event.target;
  square.innerText = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}



// const squares = document.querySelectorAll('.square');
// let currentPlayer = 'X';

for (const square of squares) {
  square.addEventListener('click', handleClick);
}

function handleClick(event) {
  const square = event.target;
  square.innerText = currentPlayer;
  if (checkForWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (squares[a].innerText && squares[a].innerText === squares[b].innerText && squares[a].innerText === squares[c].innerText) {
      return true;
    }
  }
  return false;
}

function resetGame() {
    for (let i=0; i < squares.length; i++) {
      squares[i].textContent = '';
    }
    winner='';
    currentPlayer = 'X';
  }
