import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import { useUserStore } from "../store/userStore";
import SecondaryBtn from "../components/SecondaryBtn";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts } from "../styles/base";

export default function ProfileScreen() {
  const { photoURL, displayName, email, clearUser } = useUserStore();
  const navigation = useNavigation<NavigationProps>();

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
    <BaseView
      activeNav
      img={{
        uri: "https://i.pinimg.com/564x/b1/bd/b4/b1bdb4655421719bc77730dd140cd2f6.jpg",
      }}
    >
      <View style={styles.container}>
        {photoURL && (
          <Image source={{ uri: photoURL }} style={styles.userImg} />
        )}
        <Text style={fonts.h1}>{displayName}</Text>
        <Text style={[fonts.h3, { marginVertical: 0, marginBottom: 20 }]}>
          {email}
        </Text>
        <SecondaryBtn onPress={logout} text="Logout" />
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
  userImg: {
    borderRadius: 100,
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: colors.semiTransparent,
  },
});
