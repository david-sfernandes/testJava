import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from "react-native-shadow-2";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, dimensions, sizing, spacing } from "../styles/base";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Shadow
        style={styles.shadow}
        startColor="rgba(0, 0, 0, 0.2)"
        distance={6}
      >
        <View style={styles.navBar}>
          <NavItem icon="home" text="Home" target="Home" />
          <NavItem icon="book" text="Biblioteca" target="Library" />
          <NavItem icon="users" text="Grupos" target="Groups" />
          <NavItem icon="user-alt" text="Perfil" target="Profile" />
        </View>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
          locations={[0.1, 0.7]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.bgGradient}
        />
      </Shadow>
    </View>
  );
}

function NavItem({ icon, text, target }: NavItemProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Pressable
      style={styles.navItem}
      onPress={() => navigation.navigate(target)}
    >
      <Icon name={icon} size={24} color={colors.gray} />
      <Text style={styles.navText}>{text}</Text>
    </Pressable>
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
  container: {
    width: dimensions.fullWidth,
    position: "absolute",
    bottom: 0,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    overflow: "hidden",
  },
  shadow: {
    overflow: "hidden",
    position: "relative",
  },
  navBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderColor: "rgba(185, 185, 185, 0.2)",
  },
  bgGradient: {
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
});
