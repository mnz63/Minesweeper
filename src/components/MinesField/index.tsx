import { Pressable, Image } from "@gluestack-ui/themed";
import { params } from "../../commom/utils/params";
import { Text } from "react-native";

type Props = {
  mined?: boolean;
  opened?: boolean;
  exploded?: boolean;
  nearMines?: number;
  flagged?: boolean;
};
export default function MinesField({
  mined,
  nearMines,
  opened,
  exploded,
  flagged,
}: Props) {
  let color;

  if (nearMines > 0) {
    if (nearMines === 1) {
      color = "#00ccff";
    } else if (nearMines == 2) {
      color = "#ffffff";
    } else if (nearMines >= 2 && nearMines < 6) {
      color = "#F9060A";
    } else if (nearMines >= 6) {
      color = "#f26e21";
    }
  }

  const flagURI = "https://i.ibb.co/yVKFYtd/flag.png";
  const minesURI = "https://i.ibb.co/nwXgFKc/mines.png";

  return (
    <Pressable
      w={params.blockSize}
      h={params.blockSize}
      bgColor={exploded ? "red" : opened ? "#003cff" : "#00a2ff"}
      borderWidth={!exploded ? params.borderSize : 0}
      borderBottomColor={opened ? "#002499" : "#0060a0"}
      borderRightColor={opened ? "#002499" : "#0060a0"}
      borderTopColor={opened ? "#002499" : "#77c9ff"}
      borderLeftColor={opened ? "#002499" : "#77c9ff"}
      borderRadius={params.borderRadius}
      alignItems={"center"}
      justifyContent={"center"}
      onPress={() => console.log("PRESSED")}
    >
      {!mined && opened && nearMines > 0 && (
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            fontSize: params.fontSize,
          }}
        >
          9
        </Text>
      )}
      {mined && opened && (
        <Image
          w={"$5"}
          h={"$5"}
          source={{
            uri: minesURI,
          }}
          alt="image"
        />
      )}
      {flagged && !opened && (
        <Image
          w={"$5"}
          h={"$5"}
          source={{
            uri: flagURI,
          }}
          alt="image"
        />
      )}
    </Pressable>
  );
}
