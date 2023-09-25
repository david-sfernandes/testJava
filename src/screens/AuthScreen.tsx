import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import PrimaryBtn from "../components/PrimaryBtn";
import { useUserStore } from "../store/userStore";
import { dimensions, fonts } from "../styles/base";
import SecondaryBtn from "../components/SecondaryBtn";

export default function AuthScreen() {
  const [initializing, setInitializing] = useState(true);
  const { setUser, clearUser, displayName, email } = useUserStore();
  auth().onAuthStateChanged(onAuthStateChanged);
  const navigation = useNavigation<NavigationProps>();

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(({ user }) => setUser(user as unknown as User));
  }

  const login = () => {
    onGoogleButtonPress()
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const logout = async () => {
    clearUser();
    if (email) auth().signOut();
    try {
      if (await GoogleSignin.isSignedIn()) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
    } catch (error) {
      console.error(error);
    }
  };

  function onAuthStateChanged() {
    if (initializing) setInitializing(false);
  }

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
          {email ? (
            <>
              <Text style={[fonts.h2, styles.mainText]}>
                Você já está logado!
              </Text>
              <PrimaryBtn
                onPress={() => navigation.navigate("Home")}
                text="Continuar no app"
              />
              <SecondaryBtn onPress={logout} text="Logout" />
            </>
          ) : (
            <>
              <Text
                style={[
                  fonts.h1,
                  styles.mainText
                ]}
              >
                AReader
              </Text>
              <PrimaryBtn
                onPress={login}
                text="Continuar com Google"
                icon="google"
              />
            </>
          )}
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

// const res = {
//   additionalUserInfo: {
//     isNewUser: true,
//     profile: {
//       aud: "216882184573-ra5tvtb9hkef3afp65bbq6dr7ddnk0o2.apps.googleusercontent.com",
//       azp: "216882184573-e22c6st83h8hb5b4hmt7e5qh0k4r61mn.apps.googleusercontent.com",
//       email: "davidsou.fer@gmail.com",
//       email_verified: true,
//       exp: 1695567136,
//       family_name: "Souza",
//       given_name: "David",
//       iat: 1695563536,
//       iss: "https://accounts.google.com",
//       locale: "pt-BR",
//       name: "David Souza",
//       picture:
//         "https://lh3.googleusercontent.com/a/ACg8ocKmvIJZz8H6hD6D9Kul19_XtaLVCdjjeiYi8wtSWm30zrdX=s96-c",
//       sub: "111010141002727722272",
//     },
//     providerId: "google.com",
//   },
//   user: {
//     displayName: "David Souza",
//     email: "davidsou.fer@gmail.com",
//     emailVerified: true,
//     isAnonymous: false,
//     metadata: [Object],
//     multiFactor: [Object],
//     phoneNumber: null,
//     photoURL:
//       "https://lh3.googleusercontent.com/a/ACg8ocKmvIJZz8H6hD6D9Kul19_XtaLVCdjjeiYi8wtSWm30zrdX=s96-c",
//     providerData: [Array],
//     providerId: "firebase",
//     tenantId: null,
//     uid: "z3fLfTWiyVUrsFQoNLn3Kq6NxyW2",
//   },
// };

// const user = {
//   displayName: "David Souza",
//   email: "davidsou.fer@gmail.com",
//   emailVerified: true,
//   isAnonymous: false,
//   metadata: { creationTime: 1695563538394, lastSignInTime: 1695563538395 },
//   multiFactor: { enrolledFactors: [Array] },
//   phoneNumber: null,
//   photoURL:
//     "https://lh3.googleusercontent.com/a/ACg8ocKmvIJZz8H6hD6D9Kul19_XtaLVCdjjeiYi8wtSWm30zrdX=s96-c",
//   providerData: [[Object]],
//   providerId: "firebase",
//   tenantId: null,
//   uid: "z3fLfTWiyVUrsFQoNLn3Kq6NxyW2",
// };
