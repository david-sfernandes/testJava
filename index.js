import {
  GestureHandlerRootView
} from "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import ARScreen from "./src/screens/ARScreen";
import AnnotationsScreen from "./src/screens/AnnotationsScreen";
import BookScreen from "./src/screens/BookScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PictureFormScreen from "./src/screens/PictureFormScreen";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="AR" component={ARScreen} />
          <Stack.Screen name="PictureForm" component={PictureFormScreen} />
          <Stack.Screen name="Annotations" component={AnnotationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Main);
