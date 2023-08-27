
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { fonts, spacing } from "../styles/base";

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name="barcode" size={25} color="white" />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          ...fonts.textShadow,
          ...fonts.h4,
        }}
      >
        AReader
      </Text>
      <Icon name="user" size={25} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: spacing.xs,
    marginHorizontal: spacing.lg,
    display: "flex",
    flexDirection: "row",
  },
});