import { config } from "@gluestack-ui/config";
import { AppRoutes } from "./src/routes/AppRoutes";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
let customFonts = {
  Cherry: require("./assets/fonts/CherryBombOne.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Cherry: require("./assets/fonts/CherryBombOne.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <AppRoutes />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
