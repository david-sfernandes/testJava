import { NativeModules } from "react-native";

export default function ARScreen() {
  const { ARModule } = NativeModules;
  ARModule.startARActivity();

  return null;
}
