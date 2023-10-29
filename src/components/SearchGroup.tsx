import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React, { StyleSheet, TextInput, View } from "react-native";
import BtnSecondary from "./BtnSecondary";

export default function SearchGroup() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [isTextValid, setIsTextValid] = useState(false);

  const handleText = (text: string) => {
    let t = text.trim();
    if (t.length >= 4 && t.indexOf("@") >= 0) setIsTextValid(true);
    setText(t);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={[styles.input]}
        multiline={false}
        placeholder="Buscar grupo pelo e-mail do autor"
        onChangeText={(text) => handleText(text)}
        placeholderTextColor="#00000088"
        keyboardType="email-address"
      />
      <BtnSecondary
        text="Buscar"
        // @ts-ignore: suppress param type
        onPress={() => navigation.navigate("GroupSearch", { owner: text })}
        disabled={!isTextValid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    width: "100%",
    gap: 5,
  },
  input: {
    display: "flex",
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 40,
    fontSize: 13,
    color: "black",
  },
});
