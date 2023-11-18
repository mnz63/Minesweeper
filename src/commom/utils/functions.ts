const createBoard = (rows, collumns) => {
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

const spreadMines = (board: Array<any>, minesAmount) => {
  const rows = board.length
  const collumns = board[0].length
  let plantedMines = 0
  

  while (plantedMines < minesAmount) {
    const selectedRow = parseInt(Math.random() * rows, 10)
    const selectedCollumn = parseInt(Math.random() * collumns, 10)
  
    if(!board[selectedRow][selectedCollumn]?.mined) {
      board[selectedRow][selectedCollumn].mined = true
      plantedMines++
    }
  }
}

export const createMinedBoard = (rows, collumns, minesAmount) => {
  const board = createBoard(rows, collumns)
  if(board) {
    spreadMines(board, minesAmount)
  }
  return board
}

export const cloneBoard = (board: Array<any>) => {
  return board?.map((rows) => {
    return rows?.map((field) => {
      return {...field}
    })
  })
}

const getNeighbors = (board, row, collumn) => {
  const neighbors = []
  const rows = [row - 1, row, row + 1]
  const columns = [collumn - 1, collumn, collumn + 1]

  rows.forEach((r) => {
    columns.forEach((c) => {
      const diferent = r !== row || c !== collumn
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length

      if(diferent && validColumn && validRow) {
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}

const safeNeighbors = (board, row, collumn) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, collumn)?.reduce(safes, true)
}

export const openField = (board, row, collumn) => {
  const field = board[row][collumn]
  if(!field.opened) {
    field.opened = true
    if(field.mined) {
      field.exploded = true
    } else if (safeNeighbors(board, row, collumn)) {
      getNeighbors(board, row, collumn).forEach((n) => openField(board, n.row, n.collumn))
    } else {
      const neighbors = getNeighbors(board, row, collumn)
      field.nearMines = neighbors.filter((n) => n.mined).length
    }
  }
}

export const fields = (board) => [].concat(...board)

export const hadExplosion = board => {
  return fields(board).filter((field) => field.exploded).length > 0
}

export const pendding = (field) => {
  return (field.mined && !field.flagged) || (!field.mined && !field.opened)
}

export const wonGame = (board) => {
  
  console.log(fields(board).filter(pendding).length);
  return fields(board).filter(pendding).length === 0
}

export const showMines = (board) => {
  return fields(board).filter((field) => field.mined).forEach((field) => field.opened = true)
}

export const invertFlag = (board, row, collumn) => {
  const field = board[row][collumn]
  field.flagged = !field.flagged 
}

export const flagsUsed = (board) => {
  return fields(board).filter((field) => field.flagged).length
}
