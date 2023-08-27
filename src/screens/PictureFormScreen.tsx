// @ts-nocheck
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  ImagePickerResponse,
  launchCamera
} from "react-native-image-picker";

export default function PictureFormScreen() {
  const [image, setImage] = useState<ImagePickerResponse | null>(null);
  const navigation = useNavigation();

  const takePicture = () => {
    launchCamera({ mediaType: "photo" }, (response) => {
      console.log("1");
      if (response.uri) {
        setImage(response);
      }
      console.log("2");
      showPicture();
    });
  };

  const showPicture = () => {
    console.log("3");
    return (
      <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
    );
  };
  takePicture();
}