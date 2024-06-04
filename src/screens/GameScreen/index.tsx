import { SafeAreaView } from 'react-native-safe-area-context'
import { params } from '../../commom/utils/params'

import { View } from '@gluestack-ui/themed'
import { useState } from 'react'
import { Image, Text } from 'react-native'
import {
  cloneBoard,
  createMinedBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame,
} from '../../commom/utils/functions'
import Board from '../../components/Board'
import Header from '../../components/Header'
import CustomModal from '../../components/Modal'

export default function GameScreen() {
  const collumns = params.getCollumnsAmount() - 2
  const rows = params.getRowsAmount()
  const minesAmount = Math.ceil(
    collumns * rows * params.dificultLevel,
  )

  const createState = () => {
    return {
      board: createMinedBoard(rows, collumns, minesAmount),
      won: false,
      lost: false,
    }
  }

  const [isStopwatchStart, setIsStopwatchStart] = useState(false)
  const [resetStopwatch, setResetStopwatch] = useState(false)
  const [boardState, setBoardState] = useState(createState())
  const [showModal, setShowModal] = useState({
    show: false,
    type: 'WON',
  })

  const resetGame = () => {
    setShowModal({
      show: false,
      type: 'WON',
    })
    setBoardState(createState())
    setResetStopwatch(true)
    setIsStopwatchStart(false)
  }

  const onOpenField = (row, collumn) => {
    const board = cloneBoard(boardState?.board)
    openField(board, row, collumn)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (!isStopwatchStart) {
      setResetStopwatch(false)
      setIsStopwatchStart(true)
    }

    if (lost) {
      showMines(board)
      setShowModal({
        show: true,
        type: 'LOST',
      })
      setIsStopwatchStart(false)
    }

    if (won) {
      setShowModal({
        show: true,
        type: 'WON',
      })
      setIsStopwatchStart(false)
    }

    setBoardState({ board, lost, won })
  }

  const onSelectField = (row, collumn) => {
    const board = cloneBoard(boardState.board)
    invertFlag(board, row, collumn)
    const won = wonGame(board)

    if (won) {
      setShowModal({
        show: true,
        type: 'WON',
      })
      setIsStopwatchStart(false)
    }

    setBoardState({ ...boardState, board, won })
  }

  return (
    <SafeAreaView>
      <View h={'100%'} alignItems="center">
        <CustomModal
          onCloseModal={() => resetGame()}
          showModal={showModal.show}
          onResetGame={() => resetGame()}
          type={showModal.type}
        />
        <Header
          onResetGame={() => resetGame()}
          flagsAmount={minesAmount - flagsUsed(boardState.board)}
          isStopwatchStart={isStopwatchStart}
          resetStopwatch={resetStopwatch}
        />
        <Board
          board={boardState?.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
        <View marginTop={'$10'} flexDirection="row" w={'$96'}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontFamily: 'Cherry',
              textAlign: 'center',
            }}
          >
            Pressione e segure para marcar um bloco com uma bandeira.
            <Image
              style={{
                width: 18,
                height: 18,
              }}
              source={require('../../../assets/img/flag.png')}
            />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
