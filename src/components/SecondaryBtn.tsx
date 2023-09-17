import React from "react";
import { Button } from "react-native-paper";

export default function SecondaryBtn({ onPress, text, icon = "" }: BtnProps) {
  return (
    <Button
      onPress={() => onPress()}
      mode="contained"
      icon={icon}
      textColor="white"
      style={{
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "white",
      }}
    >
      {text}
    </Button>
  );
}
