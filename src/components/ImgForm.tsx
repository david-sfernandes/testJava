import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import BottomSheet from "../components/BottomSheet";
import { colors } from "../styles/base";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

export default function ImgForm({ isOpen, setOpen }) {
  const MAX_CHARS = 240;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [onFocus, setOnFocus] = useState(false);
  const [isTextValid, setIsTextValid] = useState(true);

  const onFocusStyle = { borderColor: onFocus ? colors.gray : "#ffffff80" };
  const onTextLengthStyle = { color: isTextValid ? colors.gray : colors.red };

  const handleTextChange = (text: string) => {
    setText(text);
    setTextLength(text.trim().length);
    setIsTextValid(text.trim().length <= MAX_CHARS);
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen}>
      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/85/6e/54/856e5449740df77753d058ea284fc024.jpg",
          }}
          style={styles.smallImg}
        />
        <View style={styles.btnContainer}>
          <PrimaryBtn onPress={() => {}} text="Tirar foto" icon="camera" />
          <SecondaryBtn
            onPress={() => {}}
            text="Abrir galeria"
            icon="image-outline"
          />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={text}
          multiline={true}
          style={[styles.input, onFocusStyle]}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          placeholder="Digite sua anotação..."
          onChangeText={(text) => handleTextChange(text)}
          placeholderTextColor={colors.semiTransparent}
          textAlignVertical="top"
          keyboardType="default"
          textBreakStrategy="simple"
        />
        <Text style={[styles.charCont, onTextLengthStyle]}>
          {textLength}/{MAX_CHARS}
        </Text>
      </View>
      <PrimaryBtn onPress={() => {}} text="Salvar" />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 8,
  },
  smallImg: {
    width: 70,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInputContainer: {
    width: "100%",
    position: "relative",
  },
  input: {
    height: 65,
    marginVertical: 5,
    padding: 10,
    paddingBottom: 24,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
  },
  charCont: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
