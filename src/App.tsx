import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ARMuduleRun from "./screens/ARScreen";
import { Button, Text } from "react-native-paper";
import NavBar from "./components/NavBar";
import { colors, spacing } from "./styles/base";
import LinearGradient from "react-native-linear-gradient";
import Book from "./components/Book";

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require("./assets/bg-home.png")}
        style={styles.bgImg}
      >
        <LinearGradient
          colors={["rgba(255, 255, 255, 0)", colors.black]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.45 }}
          style={styles.bgGrad}
        ></LinearGradient>
      </ImageBackground>
      <ScrollView>
        <View style={styles.div}>
          <Text variant="headlineMedium" style={styles.text}>
            Hello from Native
          </Text>
          <Button mode="contained" icon="camera">
            Open AR
          </Button>
        </View>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  div: {
    // justifyContent: "center",
    // alignItems: "center",
    margin: "auto",
    padding: spacing.md
  },
  screen: {
    height: "100%",
    position: "relative",
    backgroundColor: colors.black,
  },
  text: {
    marginBottom: 20,
    color: "#fff",
  },
  bar: {
    backgroundColor: "tomato",
    color: "white",
  },
  bgImg: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  bgGrad: {
    height: "100%",
  },
});
