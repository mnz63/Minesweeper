import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          statusBarColor: "#260064",
        }}
        initialRouteName={"HOME"}
      >
        <Stack.Screen name={"HOME"} component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};
