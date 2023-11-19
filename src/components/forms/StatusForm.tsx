import React from "react";
import useLibrary from "../../hooks/useLibrary";
import { colors } from "../../styles/base";
import BottomSheet from "../BottomSheet";
import Option from "./Option";

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
