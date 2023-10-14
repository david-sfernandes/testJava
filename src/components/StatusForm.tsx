import { Pressable, StyleSheet } from "react-native";
import BottomSheet from "./BottomSheet";
import React, { useState } from "react";
import { Text } from "react-native";
import { colors, fonts } from "../styles/base";
import useLibrary from "../data/useLibrary";

type StatusFormProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  libraryData: BookDB;
};

export default function StatusForm({
  isOpen,
  setOpen,
  libraryData,
}: StatusFormProps) {
  const library = useLibrary();

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={200}>
      <Option
        text="Remover"
        onPress={() => library.removeBook(libraryData.id)}
      />
      <Option
        text="Quero ler"
        onPress={() => library.updateStatus(libraryData.id, "WANT_TO_READ")}
      />
      <Option
        text="Lendo"
        onPress={() => library.updateStatus(libraryData.id, "READING")}
      />
      <Option
        text="Lido"
        onPress={() => library.updateStatus(libraryData.id, "READED")}
      />
      <Option
        text="Cancelar"
        color={colors.red}
        onPress={() => setOpen(false)}
      />
    </BottomSheet>
  );
}

function Option({ text, color = "", onPress }) {
  return (
    <Pressable style={styles.pressable} onPress={() => onPress()}>
      <Text style={[styles.text, color ? { color: color } : null]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    textAlign: "center",
  },
  text: {
    ...fonts.default,
    textAlign: "center",
    color: "#2196F3",
    fontSize: 15,
  },
  title: {
    ...fonts.default,
    textAlign: "center",
    fontSize: 15,
  },
});
