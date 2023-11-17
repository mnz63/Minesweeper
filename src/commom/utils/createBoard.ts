
export const createBoard = (rows, collumns) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(collumns).fill(0).map((_, collumn) => {
      return {
        row,
        collumn,
        opened: false,
        flagged: false,
        mined: false,
        nearMines: 0
      }
    })
  })
}

export const spreadMines = (board, minesAmount) => {
  const rows = board.lenght
  const collumns = board[0].lenght
  let plantedMines = 0

  while (plantedMines < minesAmount) {
    const selectedRow = parseInt((Math.random() * rows, 10).toString())
    const selectedCollumn = parseInt((Math.random() * collumns, 10).toString())

    if(!board[selectedRow][selectedCollumn].mined) {
      board[selectedRow][selectedRow].mined = true
      plantedMines++
    }
  }
}

export const createMinedBoard = (rows, collumns, minesAmount) => {
  const board = createBoard(rows, collumns)
  spreadMines(board, minesAmount)
  return board
}