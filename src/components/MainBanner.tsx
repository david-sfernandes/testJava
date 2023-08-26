import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, dimensions, fonts, sizing, spacing } from "../styles/base";
import { Text } from "react-native-paper";
import { Shadow } from "react-native-shadow-2";
import { BlurView } from "@react-native-community/blur";

export default function MainBanner() {
  return (
    <View style={styles.container}>
      <Shadow
        style={styles.shadow}
        startColor="rgba(0, 0, 0, 0.1)"
        distance={6}
      >
        <BlurView
          blurAmount={16}
          style={styles.blurView}
          blurType="light"
          overlayColor="rgba(255, 255, 255, 0.08)"
        >
          <View style={styles.contentBox}>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                ...fonts.h1,
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              Olá, Fulano!
            </Text>
            <View style={styles.statBox}>
              <Stat title="Lidos" value="134" />
              <Stat title="Lendo" value="1" />
              <Stat title="Quero ler" value="47" />
            </View>
          </View>
        </BlurView>
      </Shadow>
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
  navItem: {
    gap: 2,
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
  navText: {
    color: colors.gray,
    fontSize: sizing.xs,
  },
  container: {
    marginHorizontal: spacing.md,
    width: dimensions.fullWidth - 2 * spacing.md,
    borderRadius: 20,
  },
  shadow: {
    borderRadius: 20,
    overflow: "hidden",
  },
  blurView: {
    width: "100%",
    borderRadius: 20,
  },
  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    // Prevent break display flex
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
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
