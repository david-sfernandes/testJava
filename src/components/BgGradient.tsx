import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors, dimensions } from "../styles/base";

export default function BgGradient({ img }: { img: any }) {
  return (
    <ImageBackground source={img} style={styles.bgImage}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0)", colors.black]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.7 }}
        style={styles.bgGradient}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: dimensions.fullHeight * 0.8,
    width: "100%",
    position: "absolute",
  },
  bgGradient: {
    height: "100%",
  },
});
