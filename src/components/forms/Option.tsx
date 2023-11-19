import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { fonts } from "../../styles/base";

export default function Option({
  text,
  color = "",
  onPress,
  callback,
}: {
  text: string;
  color?: string;
  onPress: () => void;
  callback?: () => void;
}) {
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        onPress();
        if (callback) callback();
      }}
    >
      <Text style={[styles.text, color ? { color: color } : null]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    textAlign: "center",
  },
  text: {
    ...fonts.default,
    textAlign: "center",
    color: "#2196F3",
    fontSize: 15,
  },
});