import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          statusBarTranslucent: true,
        }}
        initialRouteName={"HOMESCREEN"}
      >
        <Stack.Screen
          name={"HOMESCREEN"}
          component={HomeScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={"GAMESCREEN"}
          component={GameScreen}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
