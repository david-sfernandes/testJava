import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import useGroups from "../../hooks/useGroups";
import { useGroupBook } from "../../store/groupBook";
import { colors, fonts } from "../../styles/base";
import BottomSheet from "../BottomSheet";
import BtnPrimary from "../BtnPrimary";
import Notification from "../Notification";

type EnterGroupFormProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export default function EnterGroupForm({
  isOpen,
  setOpen,
}: EnterGroupFormProps) {
  const { groupId } = useGroupBook();
  const [text, setText] = useState("");
  const [isTextValid, setIsTextValid] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const groups = useGroups();

  const handleText = (text: string) => {
    let t = text.trim();
    if (t.length >= 4) setIsTextValid(true);
    setText(t);
  };

  const createGroup = () => {
    if (!groupId || !isTextValid) return;
    groups
      .join(groupId, text)
      .then((res) => {
        console.log("Join group: ", res);
        if (res.status == 400) return;
        setNotification("Você entrou no grupo!");
        setShowNotification(true);
        setOpen(false);
      })
      .catch((err) => {
        console.log("Error on create group: ", err);
        setNotification("Erro ao entrar no grupo!");
        setShowNotification(true);
      });
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={200}>
      <Text style={fonts.default}>Digite a senha para entrar no grupo:</Text>
      <TextInput
        value={text}
        multiline={true}
        style={[styles.input]}
        placeholder="Senha tem mínimo 4 caracteres"
        onChangeText={(text) => handleText(text)}
        placeholderTextColor={colors.semiTransparent}
        keyboardType="numeric"
      />
      <BtnPrimary
        onPress={() => createGroup()}
        icon="door-open"
        text="Entrar"
        disabled={!groupId || !isTextValid}
      />
      <Notification
        visible={showNotification}
        setVisible={setShowNotification}
        icon="users"
        text={notification}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 70,
    height: 100,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bookList: {
    rowGap: 8,
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: 17,
    flexDirection: "row",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    borderColor: "white",
  },
});
