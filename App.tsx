import { config } from "@gluestack-ui/config";
import { AppRoutes } from "./src/routes/AppRoutes";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import AppLoading from "expo-app-loading";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ImageBackground, Text } from "react-native";
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

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <GluestackUIProvider config={config}>
        <ImageBackground
          source={require("./assets/img/bg.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <AppRoutes />
        </ImageBackground>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
