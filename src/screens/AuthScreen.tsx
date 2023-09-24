import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import { useUserStore } from "../store/userStore";
import { fonts } from "../styles/base";

export default function AuthScreen() {
  const [initializing, setInitializing] = useState(true);
  const { setUser, clearUser, displayName, email } = useUserStore();
  auth().onAuthStateChanged(onAuthStateChanged);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(({ user }) => setUser(user as unknown as User));
  }

  const login = () => {
    onGoogleButtonPress().catch((err) => {
      console.log("Error: ", err);
    });
  };

  const logout = async () => {
    if (email) auth().signOut();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    clearUser();
  };

  function onAuthStateChanged() {
    if (initializing) setInitializing(false);
  }

  return (
    <BaseView img={require("../assets/bg-home.png")}>
      {initializing && <Text>Loading...</Text>}
      {email ? (
        <View>
          <Text style={fonts.h1}>Welcome {displayName}</Text>
          <Button onPress={() => logout()} title="Logout" />
        </View>
      ) : (
        <View>
          <Text style={fonts.h1}>Login</Text>
          <Button onPress={login} title="Make google login" />
        </View>
      )}
    </BaseView>
  );
}

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
