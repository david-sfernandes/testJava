import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useUserStore } from "../store/userStore";
import { colors, dimensions, fonts, sizing, spacing } from "../styles/base";

export default function MainBanner() {
  const { displayName } = useUserStore();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/5b/d9/37/5bd9374222f5929393b77fb48780c10c.jpg",
        }}
        imageStyle={{ borderRadius: 20 }}
      >
        <Shadow
          style={styles.shadow}
          startColor="rgba(0, 0, 0, 0.2)"
          distance={6}
        >
          <View style={styles.contentBox}>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                ...fonts.h1,
              }}
            >
              Olá, {displayName.split(" ")[0]}
            </Text>
            <View style={styles.statBox}>
              <Stat title="Lidos" value="134" />
              <Stat title="Lendo" value="1" />
              <Stat title="Quero ler" value="47" />
            </View>
          </View>
        </Shadow>
      </ImageBackground>
    </View>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={{ ...fonts.small, textAlign: "center" }}>{title}</Text>
      <Text style={{ ...fonts.h1, textAlign: "center" }}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    width: dimensions.fullWidth - 2 * spacing.md,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  shadow: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    tintColor: "#f10d0d",
  },
  statBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: spacing.xs,
    width: "100%",
    flex: 1,
  },
  stat: {
    textAlign: "center",
    width: "auto",
    flex: 1,
  },
});
