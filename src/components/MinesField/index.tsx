// import { Image } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { params } from "../../commom/utils/params";
import { Text } from "react-native";
import { TouchableWithoutFeedback, View, Image } from "react-native";

type Props = {
  mined?: boolean;
  opened?: boolean;
  exploded?: boolean;
  nearMines?: number;
  flagged?: boolean;
  onOpen?: () => void;
  onSelect?: () => void;
};
export default function MinesField({
  mined,
  nearMines,
  opened,
  exploded,
  flagged,
  onOpen,
  onSelect,
}: Props) {
  let color;
  let borderColor;

  if (nearMines > 0) {
    if (nearMines === 1) {
      color = "#00ccff";
      borderColor = "#008cff";
    } else if (nearMines == 2) {
      color = "#fdfd66";
      borderColor = "#92923b";
    } else if (nearMines >= 2 && nearMines < 6) {
      color = "#F9060A";
      borderColor = "#970003";
    } else if (nearMines >= 6) {
      color = "#f26e21";
      borderColor = "#994718";
    }
  } else {
    color = "#ffffff71";
    borderColor = "#ffffff71";
  }

  const flagURI = "https://i.ibb.co/yVKFYtd/flag.png";
  const minesURI = "https://i.ibb.co/nwXgFKc/mines.png";

  useEffect(() => {
    const preloadImage = async () => {
      try {
        await Image.prefetch(minesURI);
      } catch (error) {
        console.error("Erro ao pré-carregar a imagem:", error);
      }
    };

    preloadImage();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
      <View
        style={{
          width: params.blockSize,
          height: params.blockSize,
          backgroundColor: exploded ? "red" : opened ? color : "#ffffffbe",
          borderBottomWidth: !opened ? 0 : !exploded ? params.borderSize : 0,
          borderBottomColor:
            opened && nearMines > 0 ? borderColor : "#ffffff71",
          borderRadius: params.borderRadius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!mined && opened && nearMines > 0 && (
          <Text
            style={{
              color: "#00000060",
              fontFamily: "Cherry",
              fontSize: params.fontSize,
            }}
          >
            {nearMines}
          </Text>
        )}
        {mined && opened && (
          <Image
            width={18}
            height={18}
            source={{
              uri: minesURI,
            }}
            alt="image"
          />
        )}
        {flagged && !opened && (
          <Image
            width={18}
            height={18}
            source={{
              uri: flagURI,
            }}
            alt="image"
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
