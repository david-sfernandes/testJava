import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useOptionStore } from "../store/optionStore";
import { colors, sizing } from "../styles/base";

export default function Chip({ option }: { option: Option }) {
  const { currentOption, setOption } = useOptionStore();

  return (
    <Pressable
      style={[
        styles.chip,
        {
          backgroundColor:
            currentOption == option.value ? "white" : colors.darkGray,
        },
      ]}
      onPress={() => setOption(option.value)}
    >
      <Text
        style={[
          styles.text,
          { color: currentOption == option.value ? "black" : "white" },
        ]}
      >
        {option.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 6,
    borderColor: "white",
  },
  text: {
    fontSize: sizing.sm,
  },
});
