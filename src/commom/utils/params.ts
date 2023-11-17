import { Dimensions } from "react-native"


export const params = {
  blockSize: 30,
  borderSize: 3,
  borderRadius: 5,
  fontSize: 15,
  headerRatio: 0.50,
  dificultLevel: 0.1,
  getCollumnsAmount () {
    const width = Dimensions.get("window").width 
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount () {
    const height = Dimensions.get("window").height
    const boardHeight = height * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}