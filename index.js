import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ARScreen from "./src/screens/ARScreen";
import BookScreen from "./src/screens/BookScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PictureFormScreen from "./src/screens/PictureFormScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    secondary: "white",
  },
};

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="AR" component={ARScreen} />
        <Stack.Screen name="PictureFrom" component={PictureFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
