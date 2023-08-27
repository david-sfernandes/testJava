import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import ARMuduleRun from "./ARModuleRun";

function App(): JSX.Element {
  const [key, setKey] = useState(false);

  if (key) return <ARMuduleRun />;
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.div}>
        <Text style={styles.text}>Hello from Native</Text>
        <Button onPress={() => setKey(true)} title="Open AR"/>
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
    color: "#292929",
  },
  bar: {
    backgroundColor: "tomato",
    color: "white",
  },
});
