import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import BottomSheet from "../components/BottomSheet";
import { colors } from "../styles/base";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Notification from "./Notification";

const options = {
  title: "Selecione uma foto",
  type: "image",
  options: {
    seletionLimit: 1,
    mediaType: "photo",
    includeBase64: false,
  },
};

export default function ImgForm({ isOpen, setOpen }) {
  const MAX_CHARS = 240;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [onFocus, setOnFocus] = useState(false);
  const [isTextValid, setIsTextValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const [showNotification, setShowNotification] = useState(true);

  const [image, setImage] = useState<{
    uri: string;
    type: string;
    fileName: string;
  }>();

  const onFocusStyle = { borderColor: onFocus ? colors.gray : "#ffffff80" };
  const onTextLengthStyle = { color: isTextValid ? colors.gray : colors.red };

  const handleTextChange = (text: string) => {
    setText(text);
    setTextLength(text.trim().length);
    setIsTextValid(text.trim().length <= MAX_CHARS);
  };

  const takePicture = () => {
    launchCamera({ mediaType: "photo" }, (res) => {
      setImage((res as CustomImgResponse).assets[0]);
    });
  };

  const openGallery = () => {
    launchImageLibrary(options, (res) => {
      setImage((res as CustomImgResponse).assets[0]);
    });
  };

  const sendData = async () => {
    if (image) {
      const data = new FormData();

      // @ts-ignore: suppress param type
      data.append("file", {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
      setLoading(true);

      fetch("https://areader-ai-api-zkmzgms3ea-rj.a.run.app", {
        method: "post",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Res: ", res);
          setRes(res.message);
          setLoading(false);

          setShowNotification(true);
          setOpen(false);
        })
        .catch((err) => {
          console.log("Err: ", err);
          setLoading(false);
          setShowError(true);
        });
    }
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen}>
      <View style={styles.flexContainer}>
        {image?.uri && (
          <Image source={{ uri: image.uri }} style={styles.smallImg} />
        )}
        <View style={styles.btnContainer}>
          <PrimaryBtn
            onPress={takePicture}
            text="Tirar foto"
            icon="camera"
            disabled={loading}
          />
          <SecondaryBtn
            onPress={openGallery}
            text="Abrir galeria"
            icon="image-outline"
            disabled={loading}
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
      <PrimaryBtn
        onPress={() => sendData()}
        text={loading ? "Enviando..." : "Salvar"}
        disabled={loading || !isTextValid || !image}
      />

      <Notification
        visible={showNotification}
        setVisible={setShowNotification}
        icon={res == "valid" ? "check" : "exclamation-triangle"}
        text={
          res == "valid"
            ? "Sua anotação foi salva"
            : "Imagem invalida. Tente usar outra!"
        }
      />
      <Notification
        visible={showError}
        setVisible={setShowError}
        icon="times"
        text="Erro ao enviar sua anotação. Tente novamente!"
      />
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
    marginBottom: 5,
    marginTop: 8,
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
