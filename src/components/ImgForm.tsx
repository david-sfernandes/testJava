import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import BottomSheet from "../components/BottomSheet";
import { colors } from "../styles/base";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Notification from "./Notification";
import useAnnotations from "../data/useAnnotations";

type ImgFormProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  libraryData: BookDB;
};

const options = {
  title: "Selecione uma foto",
  type: "image",
  options: {
    seletionLimit: 1,
    mediaType: "photo",
    includeBase64: false,
  },
};

export default function ImgForm({
  isOpen,
  setOpen,
  libraryData,
}: ImgFormProps) {
  const MAX_CHARS = 240;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [onFocus, setOnFocus] = useState(false);
  const [isTextValid, setIsTextValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<string>("");
  const [showError, setShowError] = useState(false);
  const annotations = useAnnotations();

  const [showNotification, setShowNotification] = useState(false);

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

  const takePicture = async () => {
    try {
      const res = await launchCamera({ mediaType: "photo" });

      // timeout to prevent app crash
      setTimeout(() => {
        console.log("# Res: ", res);
        if (res.didCancel) return;
        setImage((res as CustomImgResponse).assets[0]);
      }, 500);
    } catch (err) {
      console.log("Error on take picture: ", err);
    } finally {
      console.log("Finally");
    }
  };

  const openGallery = () => {
    launchImageLibrary({ ...options, mediaType: "photo" }, (res) => {
      if (res.didCancel) return;
      setImage((res as CustomImgResponse).assets[0]);
    });
  };

  const sendData = async () => {
    if (!image) return;
    setLoading(true);

    annotations
      .addAnnotation(text, libraryData.id, image)
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
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen}>
      <View style={styles.flexContainer}>
        {image?.uri && (
          <Image source={{ uri: image.uri }} style={styles.smallImg} />
        )}
        <View style={styles.btnContainer}>
          <BtnPrimary
            onPress={takePicture}
            text="Tirar foto"
            icon="camera"
            disabled={loading}
          />
          <BtnSecondary
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
      <BtnPrimary
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
