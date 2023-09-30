import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  gray: "#e5e5e5",
  darkGray: "#242529",
  black: "#141414",
  red: "#ec3912",
  yellow: "#ffc700",
  semiTransparent: "#ffffff50",
  transparent: "#00000000",
};

export const spacing = {
  xs: 12,
  sm: 15,
  md: 20,
  lg: 30,
};

export const sizing = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 32,
  "2xl": 36,
};

export const fonts = StyleSheet.create({
  h1: {
    color: "white",
    fontWeight: "600",
    fontSize: sizing["2xl"],
    fontFamily: "RobotoFlex",
  },
  h2: {
    color: "white",
    fontWeight: "700",
    fontSize: sizing.xl,
    fontFamily: "RobotoFlex",
  },
  h3: {
    color: "white",
    fontWeight: "500",
    fontSize: sizing.lg,
    fontFamily: "RobotoFlex",
  },
  h4: {
    color: "white",
    fontWeight: "800",
    fontSize: sizing.md,
    fontFamily: "RobotoFlex",
  },
  default: {
    color: "white",
    fontWeight: "400",
    fontSize: sizing.sm,
    fontFamily: "RobotoFlex",
    marginBottom: spacing.xs,
  },
  small: {
    color: "white",
    fontWeight: "400",
    fontSize: sizing.xs,
    fontFamily: "RobotoFlex",
  },

  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});