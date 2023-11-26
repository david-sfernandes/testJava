import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnPrimary from "../components/BtnPrimary";
import { useUserStore } from "../store/userStore";
import { dimensions, fonts } from "../styles/base";

export default function AuthScreen() {
  const [initializing, setInitializing] = useState(true);
  const { setUser, email } = useUserStore();
  const navigation = useNavigation<NavigationProps>();

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(({ user }) => setUser(user as unknown as User))
      .catch((err) => console.log("Error: ", err));
  };

  const login = () => {
    console.log("fall login");
    onGoogleButtonPress()
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const onAuthStateChanged = () => {
    console.log("fall");
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    if (email) {
      navigation.navigate("Home");
    } else {
      console.log("fall cond");
      console.log("email: ", email);
      auth().onAuthStateChanged(onAuthStateChanged);
    }
  }, []);

  return (
    <BaseView>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/89/70/fd/8970fda24f3e1a8d763ae54c04d04ecb.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          {initializing && <Text>Loading...</Text>}
          <Text style={[fonts.h1, styles.mainText]}>AReader</Text>
          <BtnPrimary
            onPress={login}
            text="Continuar com Google"
            icon="google"
          />
        </View>
      </ImageBackground>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignText: "center",
    display: "flex",
    justifyContent: "center",
    height: dimensions.fullHeight,
    padding: 20,
    gap: 5,
  },
  mainText: {
    fontSize: 55,
    marginBottom: 100,
    fontWeight: "700",
    textAlign: "center",
  },
});
