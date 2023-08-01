import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ARMuduleRun from "./ARModuleRun";
import { Appbar, Button, Text } from "react-native-paper";

function App(): JSX.Element {
  const [key, setKey] = useState(false);

  if (key) return <ARMuduleRun />;
  return (
    <SafeAreaView style={styles.screen}>
      <Appbar.Header mode="center-aligned" style={styles.bar}>
        <Appbar.BackAction onPress={() => {}} color="white"/>
        <Appbar.Content title="AReader" color="white"/>
        <Appbar.Action icon="menu" onPress={() => {}} color="white"/>
      </Appbar.Header>
      <View style={styles.div}>
        <Text variant="headlineMedium" style={styles.text}>Hello from Native</Text>
        <Button onPress={() => setKey(true)} mode="contained" icon="camera">
          Open AR
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  div: {
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  screen: {
    height: "100%",
  },
  text: {
    marginBottom: 20,
    color: "#292929"
  },
  bar: {
    backgroundColor: "tomato",
    color: "white"
  }
});
