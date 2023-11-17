import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { config } from "@gluestack-ui/config";
import { AppRoutes } from "./src/routes/AppRoutes";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <AppRoutes />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
