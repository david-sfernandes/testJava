import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import useLibrary from "../../hooks/useLibrary";
import { colors, fonts } from "../../styles/base";
import BottomSheet from "../BottomSheet";

type StatusFormProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  libraryData?: BookDB;
  callback?: () => void;
};

export default function StatusForm({
  isOpen,
  setOpen,
  libraryData,
  callback,
}: StatusFormProps) {
  const library = useLibrary();
  const generalCallback = () => {
    if (callback) callback();
    setOpen(false);
  };

  if (!libraryData) return null;

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={200}>
      <Option
        text="Remover"
        callback={generalCallback}
        onPress={() => library.removeBook(libraryData.id)}
      />
      <Option
        text="Quero ler"
        callback={generalCallback}
        onPress={() => library.updateStatus(libraryData.id, "WANT_TO_READ")}
      />
      <Option
        text="Lendo"
        callback={generalCallback}
        onPress={() => library.updateStatus(libraryData.id, "READING")}
      />
      <Option
        text="Lido"
        callback={generalCallback}
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

function Option({
  text,
  color = "",
  onPress,
  callback,
}: {
  text: string;
  color?: string;
  onPress: () => void;
  callback?: () => void;
}) {
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        onPress();
        if (callback) callback();
      }}
    >
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
