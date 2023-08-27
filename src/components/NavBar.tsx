import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, dimensions, sizing, spacing } from "../styles/base";
import { Shadow } from "react-native-shadow-2";
import { BlurView } from "@react-native-community/blur";

export default function NavBar() {
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
            <NavItem icon="home" text="Home" />
            <NavItem icon="book" text="Biblioteca" />
            <NavItem icon="users" text="Grupos" />
            <NavItem icon="comment" text="Chat" />
          </View>
        </BlurView>
      </Shadow>
    </View>
  );
}

function NavItem({ icon, text }: NavItemProps) {
  return (
    <View style={styles.navItem}>
      <Icon
        name={icon}
        size={28}
        color={colors.gray}
      />
      <Text style={styles.navText}>{text}</Text>
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
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  navContainer: {
    marginHorizontal: spacing.md,
    width: dimensions.fullWidth - 2 * spacing.md,
    position: "absolute",
    bottom: 10,
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
  navBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    // Prevent break display flex
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
  },
});