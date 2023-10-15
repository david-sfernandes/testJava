import { NativeModules } from "react-native";

export default function OpenAR(annotations: ARAnnotation[]) {
  const { ARModule } = NativeModules;

  try {
    return ARModule.startARActivity(annotations);
  } catch (error) {
    console.error(error);
  }
}
