import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Button, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import { fonts } from "../styles/base";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function AuthScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log("Google credential: ", googleCredential)
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const doLogin = () => {
    onGoogleButtonPress()
      .then((res) => {
        console.log("Signed in with Google!");
        console.log(res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log("User update!");
    console.log("User: ", user);
    if (initializing) setInitializing(false);
  }
  
  auth().onAuthStateChanged(onAuthStateChanged);

  if (initializing) return null;

  if (!user) {
    return (
      <BaseView img={require("../assets/bg-home.png")}>
        <View>
          <Text style={fonts.h1}>Login</Text>
          <Button onPress={doLogin} title="Make google login" />
        </View>
      </BaseView>
    );
  }

  return (
    <BaseView img={require("../assets/bg-home.png")}>
      <View>
        <Text style={fonts.h1}>Welcome {user.email}</Text>
      </View>
    </BaseView>
  );
}
