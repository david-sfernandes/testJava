import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../styles/base";

export default function BackgroundGradient({ img }: { img: any }) {
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
    height: "70%",
    width: "100%",
    position: "absolute",
  },
  bgGradient: {
    height: "100%",
  },
});
