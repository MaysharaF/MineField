const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row: row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, MinesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < MinesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, MinesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, MinesAmount);
  return board;
};

export {createMinedBoard};
