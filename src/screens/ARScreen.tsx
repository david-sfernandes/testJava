import React from "react";
import { NativeModules, Text, View } from "react-native";

export default function ARScreen() {
  const { ARModule } = NativeModules;
  const annotations = [
    {
      id: "1",
      anchor:
        "https://www.bhg.com/thmb/Uelk6tl8GmfgyOuPO3dKDV2pqsE=/550x0/filters:no_upscale():strip_icc()/101422234-a6531af4ba614c73bb6290385ccaab74.jpg",
      text: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_Eastern_Hemisphere.jpg",
    },
    {
      id: "2",
      anchor:
        "https://www.stylecraze.com/wp-content/uploads/2013/07/25-Most-Beautiful-Blue-Flowers.jpg",
      text: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg",
    },
  ];

  try {
    ARModule.startARActivity(annotations);
  } catch (error) {
    console.error(error);
  }

  return <View></View>;
}
