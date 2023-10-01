import React from "react";
import { StyleSheet, View } from "react-native";
import Chip from "./Chip";

export default function Filter({ options }: { options: Option[] }) {
  return (
    <View style={styles.chipBox}>
      {options.map((option) => (
        <Chip option={option} key={option.value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chipBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
