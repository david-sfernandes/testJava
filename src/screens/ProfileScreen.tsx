import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnSecondary from "../components/BtnSecondary";
import { useUserStore } from "../store/userStore";
import { colors, fonts } from "../styles/base";

export default function ProfileScreen() {
  const { photoURL, displayName, email, clearUser } = useUserStore();
  const navigation = useNavigation<NavigationProps>();
  const bgImg = {
    uri: "https://i.pinimg.com/564x/b1/bd/b4/b1bdb4655421719bc77730dd140cd2f6.jpg",
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
    } finally {
      navigation.navigate("Auth");
    }
  };

  return (
    <BaseView activeNav img={bgImg}>
      <View style={styles.container}>
        <Text style={styles.profile}>Perfil</Text>
        {photoURL && <Image source={{ uri: photoURL }} style={styles.img} />}
        <Text style={fonts.h1}>{displayName}</Text>
        <Text style={styles.email}>{email}</Text>
        <BtnSecondary onPress={logout} text="Logout" />
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 5,
    justifyContent: "space-evenly",
    paddingTop: 80,
  },
  img: {
    borderRadius: 100,
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: colors.semiTransparent,
  },
  email: { marginVertical: 0, marginBottom: 20, ...fonts.h3 },
  profile: {
    ...fonts.h2,
    textAlign: "center",
  },
});
