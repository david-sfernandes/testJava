import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { ImagePickerResponse, launchCamera } from "react-native-image-picker";
import { colors, fonts, spacing } from "../styles/base";
import { Button } from "react-native-paper";

export default function PictureFormScreen() {
  const [image, setImage] = useState<string>("");
  const navigation = useNavigation();
  
  console.log(image);

  const takePicture = () => {
    launchCamera({ mediaType: "photo" }, (response) => {
      console.log("1");
      console.log(response);
      setImage(response.assets[0].uri);
    });
  };


  return (
    <View style={{ padding: spacing.lg, backgroundColor: colors.black, height: "100%" }}>
      <Text style={fonts.h1}>Image picker</Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button onPress={() => takePicture()} buttonColor="white">Open camera</Button>
    </View>
  );
}

// Camera result example:
// {
//   assets: [
//     {
//       fileName:
//         "rn_image_picker_lib_temp_090ef231-f0e1-4b18-b1fd-0c086abbf6ca.jpg",
//       fileSize: 1002739,
//       height: 4096,
//       type: "image/jpeg",
//       uri: "file:///data/user/0/com.testjava/cache/rn_image_picker_lib_temp_090ef231-f0e1-4b18-b1fd-0c086abbf6ca.jpg",
//       width: 2304,
//     },
//   ],
// };
