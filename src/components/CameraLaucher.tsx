import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import React, { useState } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { dimensions } from "../styles/base";

type CameraLaucherProps = {
  setImage: (img: CameraCapturedPicture) => void;
  setShowCamera: (show: boolean) => void;
};

export default function CameraLaucher({
  setImage,
  setShowCamera,
}: CameraLaucherProps) {
  const [type, setType] = useState(CameraType.back);
  const [permission] = Camera.useCameraPermissions();
  const camera = React.useRef<Camera>(null);

  if (!permission) {
    console.log("permission is null");
    return null;
  }

  if (!permission.granted) {
    console.log("permission not granted");
    return null;
  }

  async function takePicture() {
    if (camera.current) {
      const img = await camera.current.takePictureAsync();
      setImage(img);
      setShowCamera(false);
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio="16:9" ref={camera}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setShowCamera(false)} style={styles.icon}>
            <Icon name="chevron-left" solid size={35} color="white" />
          </Pressable>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <View style={styles.buttonCircle} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const BTN_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: dimensions.fullHeight + (StatusBar.currentHeight || 0),
    width: dimensions.fullWidth,
    backgroundColor: "black",
    justifyContent: "center",
    bottom: 0,
    display: "flex",
  },
  camera: {
    width: "100%",
    height: (dimensions.fullWidth * 16) / 9,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderRadius: BTN_SIZE,
    height: BTN_SIZE,
    width: BTN_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCircle: {
    borderColor: "#00000050",
    borderWidth: 5,
    width: BTN_SIZE - 10,
    height: BTN_SIZE - 10,
    borderRadius: BTN_SIZE - 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 15,
    zIndex: 30,
  },
});
