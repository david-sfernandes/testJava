import React from "react";
import { Button } from "react-native-paper";
import { colors } from "../styles/base";

export default function BtnSecondary({ onPress, text, icon = "", disabled = false, flex = false }: BtnProps) {
  return (
    <Button
      onPress={() => onPress()}
      mode="contained"
      icon={icon}
      textColor="white"
      style={{
        borderWidth: 1,
        flex: flex ? 1 : 0,
        backgroundColor: "transparent",
        borderColor: disabled ?  colors.semiTransparent : "white",
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
