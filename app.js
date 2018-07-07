console.log('Welcome to the game.');

let currentPlayer = 'X';
console.log('The player starting is', currentPlayer);

let gameBoard = [[null, null, null],[null, null, null],[null, null, null]];
let count = 9;

const takeTurn = (player, position) => {
  
  if (!gameBoard[position[0]][position[1]]) {
    console.log('You\'ve chosen row', position[0], 'and column', position[1], 'to place your piece.');
    gameBoard[position[0]][position[1]] = player;

    count--;
    checkForVictory(player);

    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  } else {
    console.log('That space is taken, please choose another space');
  }
}

const checkForVictory = (player) => {
  let victory = false;
  let tie = false;

  if (count === 0) {
    tie = true;
  }

  for(let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player) {
      victory = true;
    }
    if (gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player) {
      victory = true;
    }
  }
  if (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) {
    victory = true;
  }
  if (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player) {
    victory = true;
  }

  if (victory || tie) {
    if (victory) {
      console.log('Congradulations!', player, 'Wins!');
    } else {
      console.log('Game ended in a tie.');
    }

    for(let i = 0;i < gameBoard.length; i++) {
      for(let j = 0; j < gameBoard[0].length; j++) {
        gameBoard[i][j] = null;
      }
    }
    currentPlayer = 'X';
    console.log('Starting New Game...');
  }
}

const place = (row, column) => {
  let position = [row, column];
  takeTurn(currentPlayer, position);
  printBoard();
}

const printBoard = () => {
  console.log('Current Board:');
  console.log('-------');
  for(let i = 0; i < gameBoard.length; i++) {
    console.log('|' + (gameBoard[i][0] || 'N') + '|' + (gameBoard[i][1] || 'N') + '|' + (gameBoard[i][2] || 'N') + '|');
    console.log('-------');
  }
  console.log(currentPlayer + '\'s turn.');
}

printBoard();