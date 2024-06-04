import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import DificultySelect from "../../components/DificultySelectModal";
import { params } from "../../commom/utils/params";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import HomeButton from "../../components/HomeButton";
import DificultySelectModal from "../../components/DificultySelectModal";

export default function HomeScreen() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <SafeAreaView>
      <View h={"100%"} alignItems="center" justifyContent="center">
        <View alignItems="center">
          <Image
            source={require("../../../assets/img/bomb.png")}
            alt="bomb"
            style={{
              width: 73,
              height: 98,
            }}
          />
          <Text
            color="#FFF"
            fontFamily="Cherry"
            fontSize={32}
            lineHeight={32}
            mt={10}
          >
            MINESWEEPER
          </Text>
        </View>
        <View
          w={"$5/6"}
          alignItems="center"
          h={"$72"}
          justifyContent="space-between"
          mt={"$1/6"}
        >
          <HomeButton
            label="Jogar"
            background="#48319D"
            onPress={() => navigate("GAMESCREEN")}
          />
          <HomeButton
            label="Dificuldade"
            background="#319D76"
            type="DIFICULTY"
          />
          <HomeButton label="Multiplayer" background="#1F1D47" />
          <HomeButton label="Configurações" background="#48319D" />
        </View>
      </View>
    </SafeAreaView>
  );
}
