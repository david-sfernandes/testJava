import React, { useState } from "react";
import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  FlashMode,
} from "expo-camera";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import { dimensions } from "../styles/base";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        ratio="16:9"
        ref={camera}
        flashMode={useFlash ? FlashMode.on : FlashMode.off}
      >
        <View style={styles.controlView}>
          <Pressable onPress={() => setShowCamera(false)} style={styles.icon}>
            <Icon name="chevron-left" solid size={35} color="white" />
          </Pressable>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <View style={styles.circle} />
          </TouchableOpacity>
          <Pressable
            onPress={() => setUseFlash(!useFlash)}
            style={styles.flash}
          >
            <Icon
              name="bolt"
              solid
              size={35}
              color={useFlash ? "white" : "#ffffff88"}
            />
            <Text style={styles.fleshText}>{useFlash ? "On" : "Off"}</Text>
          </Pressable>
        </View>
      </Camera>
    </View>
  );
}

const BTN_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "black",
    width: dimensions.fullWidth,
    height: dimensions.fullHeight + (StatusBar.currentHeight || 0),
  },
  camera: {
    width: "100%",
    height: (dimensions.fullWidth * 16) / 9,
  },
  controlView: {
    flex: 1,
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: BTN_SIZE,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: "white",
  },
  circle: {
    width: BTN_SIZE - 10,
    height: BTN_SIZE - 10,
    borderRadius: BTN_SIZE - 10,
    borderWidth: 5,
    alignSelf: "center",
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
