import { NativeModules, View } from "react-native";

export default function ARScreen() {
  const { ARModule } = NativeModules;
  ARModule.startARActivity();
  return <View></View>
}
