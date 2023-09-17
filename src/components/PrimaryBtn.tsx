import React from "react";
import { Button } from "react-native-paper";

export default function PrimaryBtn({ onPress, text, icon = "" }: BtnProps) {
  return (
    <Button
      onPress={() => onPress()}
      mode="contained"
      icon={icon}
      textColor="black"
      style={{
        backgroundColor: "white",
      }}
    >
      {text}
    </Button>
  );
}
