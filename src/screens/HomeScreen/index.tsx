import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Text, Image } from "react-native";
import { params } from "../../commom/utils/params";

import { View } from "@gluestack-ui/themed";
import Board from "../../components/Board";
import {
  cloneBoard,
  createMinedBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame,
} from "../../commom/utils/functions";
import { useState } from "react";
import Header from "../../components/Header";
import CustomModal from "../../components/Modal";

export default function HomeScreen() {
  const collumns = params.getCollumnsAmount() - 2;
  const rows = params.getRowsAmount();
  const minesAmount = Math.ceil(collumns * rows * params.dificultLevel);

  const createState = () => {
    return {
      board: createMinedBoard(rows, collumns, minesAmount),
      won: false,
      lost: false,
    };
  };

  const [boardState, setBoardState] = useState(createState());
  const [showModal, setShowModal] = useState({
    show: false,
    type: "WON",
  });
  const [loading, setLoading] = useState(false);

  const resetGame = () => {
    setShowModal({
      show: false,
      type: "WON",
    });
    setLoading(true);
    setTimeout(() => {
      setBoardState(createState());
      setLoading(false);
    }, 1000);
  };

  const onOpenField = (row, collumn) => {
    const board = cloneBoard(boardState?.board);
    openField(board, row, collumn);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      setShowModal({
        show: true,
        type: "LOST",
      });
    }

    if (won) {
      setShowModal({
        show: true,
        type: "WON",
      });
    }

    setBoardState({ board, lost, won });
  };

  const onSelectField = (row, collumn) => {
    const board = cloneBoard(boardState.board);
    invertFlag(board, row, collumn);
    const won = wonGame(board);

    if (won) {
      Alert.alert("Você venceu!");
    }

    setBoardState({ ...boardState, board, won });
  };

  const selectDificulty = (dificulty) => {
    params.dificultLevel = dificulty;
    resetGame();
  };

  const flagURI = "https://i.ibb.co/yVKFYtd/flag.png";
  return (
    <SafeAreaView>
      <View backgroundColor={"#260064"} h={"100%"} alignItems="center">
        <CustomModal
          onCloseModal={() => setShowModal({ show: false, type: "WON" })}
          onResetGame={() => resetGame()}
          showModal={showModal.show}
          type={showModal.type}
        />
        <Header
          onResetGame={() => resetGame()}
          onSelectDificulty={(dificulty) => selectDificulty(dificulty)}
          flagsAmount={minesAmount - flagsUsed(boardState.board)}
        />
        <Board
          board={boardState?.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
        <View marginTop={"$1/4"} flexDirection="row" gap={5}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 15,
              fontFamily: "Cherry",
            }}
          >
            Pressione e segure para adicionar uma bandeira.
          </Text>
          <Image
            width={18}
            height={18}
            source={{
              uri: flagURI,
            }}
            alt="image"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
