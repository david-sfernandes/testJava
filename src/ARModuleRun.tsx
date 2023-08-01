import { NativeModules, SafeAreaView } from "react-native";

export default function ARMuduleRun() {
  const { ARModule } = NativeModules;
  ARModule.startARActivity();

  return <SafeAreaView></SafeAreaView>;
}
