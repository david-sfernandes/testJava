import { BlurView } from "@react-native-community/blur";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { colors, dimensions, fonts, sizing, spacing } from "../styles/base";

export default function NoteCard() {
  return (
    <View style={styles.navContainer}>
      <Shadow
        style={styles.shadow}
        startColor="rgba(0, 0, 0, 0.1)"
        distance={6}
      >
        <BlurView
          blurAmount={16}
          style={styles.blurView}
          blurType="light"
          overlayColor="rgba(136, 136, 136, 0.5)"
        >
          <View style={styles.navBar}>
            <Text style={{ ...fonts.default, fontSize: 13, width: "100%", flex: 1, display: "flex" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              omnis ut fugit, similique natus unde cum enim id assumenda beatae
              totam!
            </Text>
            <Text
              style={{
                ...fonts.default,
                textAlign: "right",
                marginBottom: 0,
                color: "#ffffffbb",
              }}
            >
              pg. 5
            </Text>
          </View>
        </BlurView>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
    width: dimensions.fullWidth - 2 * spacing.md,
    borderRadius: 20,
    flex: 1,
    zIndex: 1,
  },
  shadow: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    // width: "100%",
    width: dimensions.fullWidth - 2 * spacing.md,
  },
  blurView: {
    // width: "100%",
    width: dimensions.fullWidth - 2 * spacing.md,
    flex: 1,
    borderRadius: 20,
  },
  navBar: {
    // width: "100%",
    width: dimensions.fullWidth - 2 * spacing.md,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    // Prevent break display flex
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
  },
});
