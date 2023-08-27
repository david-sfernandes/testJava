import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BookScreen from "./src/screens/BookScreen";
import ARScreen from "./src/screens/ARScreen";
import PictureFormScreen from "./src/screens/PictureFormScreen";

const Stack = createNativeStackNavigator();

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
