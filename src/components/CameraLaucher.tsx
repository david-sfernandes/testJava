import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  FlashMode,
} from "expo-camera";
import React, { useState } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  const [permission] = Camera.useCameraPermissions();
  const camera = React.useRef<Camera>(null);
  const [useFlash, setUseFlash] = useState(false);

  if (!permission) {
    console.log("permission is null");
    return null;
  }

  if (!permission.granted) {
    console.log("permission not granted");
    Camera.requestCameraPermissionsAsync();
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
      <Camera
        style={styles.camera}
        type={CameraType.back}
        ratio="4:3"
        ref={camera}
        flashMode={useFlash ? FlashMode.on : FlashMode.off}
      />
      <View style={styles.controlView}>
        <Pressable onPress={() => setShowCamera(false)} style={styles.icon}>
          <Icon name="chevron-left" solid size={35} color="white" />
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <View style={styles.circle} />
        </TouchableOpacity>
        <Pressable onPress={() => setUseFlash(!useFlash)} style={styles.flash}>
          <Icon
            name="bolt"
            solid
            size={35}
            color={useFlash ? "white" : "#ffffff88"}
          />
          <Text style={styles.fleshText}>{useFlash ? "On" : "Off"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const BTN_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    zIndex: 100,
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "black",
    width: dimensions.fullWidth,
    height: dimensions.fullHeight + (StatusBar.currentHeight || 0),
  },
  camera: {
    width: "100%",
    height: (dimensions.fullWidth * 4) / 3,
  },
  controlView: {
    flex: 1,
    height: "95%",
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
  },
  button: {
    bottom: 13,
    margin: "auto",
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: BTN_SIZE,
    position: "absolute",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: "white",
  },
  circle: {
    borderWidth: 5,
    alignSelf: "center",
    width: BTN_SIZE - 10,
    height: BTN_SIZE - 10,
    borderRadius: BTN_SIZE - 10,
    borderColor: "#00000050",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  icon: {
    top: 0,
    left: 0,
    zIndex: 30,
    padding: 15,
    position: "absolute",
  },
  flash: { position: "absolute", right: 0, bottom: 0, padding: 20 },
  fleshText: { color: "white", fontSize: 8, marginTop: -10, marginLeft: -10 },
});
