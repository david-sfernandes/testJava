import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { spacing } from "../styles/base";

export default function GoBack() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon
        name="chevron-left"
        solid
        size={30}
        color="white"
        style={styles.goBack}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goBack: {
    top: 45,
    position: "absolute",
    left: spacing.lg - 6,
    padding: 4,
    paddingHorizontal: 6,
    zIndex: 30,
    borderWidth: 1,
    borderColor: "transparent",
  },
});
