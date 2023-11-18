import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { View, Image } from "@gluestack-ui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { params } from "../../commom/utils/params";
import Flag from "../../../assets/img/flag.png";
import DificultySelect from "../DificultySelect";

type Props = {
  flagsAmount?: number;
  onResetGame?: () => void;
  onSelectDificulty?: (dificulty: number) => void;
};

export default function Header({
  flagsAmount,
  onResetGame,
  onSelectDificulty,
}: Props) {
  const flagURI = "https://i.ibb.co/w786Cjq/flag.png";

  return (
    <View h={"$32"} bgColor="red.500" padding={20} w={"100%"} mb={20} mt={20}>
      <HStack justifyContent={"space-around"}>
        <View
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor="#F2f2f"
        >
          <Image
            w={"$10"}
            h={"$10"}
            source={{
              uri: flagURI,
            }}
            alt="image"
          />
          <Text color={"#fff"} fontFamily="Cherry" fontSize={20}>
            = {flagsAmount || 0}
          </Text>
        </View>
        <Button
          bgColor="#5900ff"
          borderRadius={"$lg"}
          $active-bgColor="#4000b8"
          onPress={onResetGame}
        >
          <ButtonText color={"#fff"} fontSize={20} fontFamily="Cherry">
            Reiniciar{" "}
          </ButtonText>
          <MaterialCommunityIcons name="restart" size={24} color="#FFF" />
        </Button>
      </HStack>

      <DificultySelect
        onSelectDificulty={(dificulty) => onSelectDificulty(dificulty)}
      />
    </View>
  );
}
