import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { AppRegistry } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { name as appName } from "./app.json";
import ARScreen from "./src/screens/ARScreen";
import AnnotationsScreen from "./src/screens/AnnotationsScreen";
import AuthScreen from "./src/screens/AuthScreen";
import BookScreen from "./src/screens/BookScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";

GoogleSignin.configure({
  webClientId:
    "216882184573-ra5tvtb9hkef3afp65bbq6dr7ddnk0o2.apps.googleusercontent.com",
});

const Stack = createNativeStackNavigator();

export default function Main() {
  try {
    changeNavigationBarColor("#000000");
  } catch (e) {
    console.log(e);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Auth"
        >
          <Stack.Screen name="AR" component={ARScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Groups" component={GroupsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Library" component={LibraryScreen} />
          <Stack.Screen name="Annotations" component={AnnotationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Main);
