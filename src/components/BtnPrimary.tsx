import React from "react";
import { Button } from "react-native-paper";
import { colors } from "../styles/base";

export default function PrimaryBtn({ onPress, text, icon = "", disabled = false }: BtnProps) {
  return (
    <Button
      onPress={() => onPress()}
      mode="contained"
      icon={icon}
      textColor="black"
      style={{
        backgroundColor: disabled ?  colors.semiTransparent : "white",
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
