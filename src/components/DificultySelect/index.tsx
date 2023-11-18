import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";
import { params } from "../../commom/utils/params";
import { View, Text } from "react-native";

type Props = {
  onSelectDificulty?: (dificulty: number) => void;
};

export default function DificultySelect({ onSelectDificulty }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        gap: 20,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 18,
          fontFamily: "Cherry",
        }}
      >
        Dificuldade:
      </Text>
      <Select
        defaultValue="Fácil"
        w={"$1/3"}
        onValueChange={(value) => onSelectDificulty(parseFloat(value))}
      >
        <SelectTrigger variant="rounded" size="md" borderColor="#5900ff">
          <SelectInput color={"#FFF"} fontFamily="Cherry" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Fácil" value={"0.1"} />
            <SelectItem label="Médio" value={"0.2"} />
            <SelectItem label="Difícil" value={"0.3"} />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}
