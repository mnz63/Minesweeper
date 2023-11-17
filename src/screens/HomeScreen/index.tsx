import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { params } from "../../commom/utils/params";
import { VStack, View } from "@gluestack-ui/themed";
import MinesField from "../../components/MinesField";
import Board from "../../components/Board";
import { createMinedBoard } from "../../commom/utils/createBoard";
import { useState } from "react";

export default function HomeScreen() {
  const collumns = params.getCollumnsAmount();
  const rows = params.getRowsAmount();
  const minesAmount = Math.ceil(collumns * rows * params.dificultLevel);

  const createState = () => {
    return {
      board: createMinedBoard(rows, collumns, minesAmount),
    };
  };

  const [boardState, setBoardState] = useState(createState());

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#260064",
      }}
    >
      <View backgroundColor={"#260064"} h={"100%"} alignItems="center">
        {/* <Board board={boardState.board} /> */}
      </View>
    </SafeAreaView>
  );
}
