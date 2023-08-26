import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Image, Button, Platform, Text } from "react-native";
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";

export default function PictureFormScreen() {
  const [image, setImage] = useState<ImagePickerResponse | null>(null);
  const navigation = useNavigation();

  // take a picture then display it
  const takePicture = () => {
    launchCamera({ mediaType: "photo" }, (response) => {
      console.log("1");
      if (response.uri) {
        setImage(response);
      }
      // wait 1 second before showing the picture
      console.log("2");
      showPicture();
    });
  };

  // show the taken picture
  const showPicture = () => {
    console.log("3");
    return (
      <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
    );
  };
  takePicture();
}


