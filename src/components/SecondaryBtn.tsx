import React from "react";
import { Button } from "react-native-paper";
import { colors } from "../styles/base";

export default function SecondaryBtn({ onPress, text, icon = "", disabled }: BtnProps) {
  return (
    <Button
      onPress={() => onPress()}
      mode="contained"
      icon={icon}
      textColor="white"
      style={{
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: disabled ?  colors.semiTransparent : "white",
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
