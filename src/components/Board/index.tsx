import { FlatList, View } from "@gluestack-ui/themed";
import MinesField from "../MinesField";
import { params } from "../../commom/utils/params";

type Props = {
  board?: Array<any>;
};

export default function Board({ board }: Props) {
  const boardWidth = params.blockSize * params.getCollumnsAmount();
  const boardHeight = params.blockSize * params.getRowsAmount();

  const rows = board?.map((row, r) => {
    const fields = row?.map((field, c) => {
      return <MinesField key={c} {...field} />;
    });
    return <View key={r}>{fields}</View>;
  });

  return (
    <View bgColor="red" width={boardWidth} height={boardHeight}>
      {rows}
    </View>
  );
}
