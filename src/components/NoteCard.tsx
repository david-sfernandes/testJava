import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { dimensions, fonts, spacing } from "../styles/base";

export default function NoteCard() {
  return (
    <View style={styles.container}>
      <Shadow
        style={styles.shadow}
        startColor="rgba(0, 0, 0, 0.1)"
        distance={6}
      >
        <ImageBackground
          source={require("../assets/bgBlur.png")}
          blurRadius={30}
          style={styles.bg}
        >
          <View style={styles.navBar}>
            <Text style={[fonts.default, styles.cardText]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              omnis ut fugit, similique natus unde cum enim id assumenda beatae
              totam!
            </Text>
            <Text style={[fonts.default, styles.pgCounter]}>pg. 5</Text>
          </View>
        </ImageBackground>
      </Shadow>
    </View>
  );
}

const CARD_WIDTH = dimensions.fullWidth - 2 * spacing.md;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    borderRadius: 20,
    width: CARD_WIDTH,
    marginTop: spacing.sm,
    marginHorizontal: spacing.md,
  },
  shadow: {
    flex: 1,
    borderRadius: 20,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  bg: {
    flex: 1,
  },
  navBar: {
    flex: 1,
    borderWidth: 1,
    display: "flex",
    borderRadius: 20,
    width: CARD_WIDTH,
    flexDirection: "column",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderColor: "rgba(185, 185, 185, 0.2)",
  },
  cardText: {
    flex: 1,
    fontSize: 13,
    width: "100%",
    display: "flex",
  },
  pgCounter: {
    textAlign: "right",
    marginBottom: 0,
    color: "#ffffffbb",
  },
});
