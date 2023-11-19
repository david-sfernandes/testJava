import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useUserStore } from "../store/userStore";
import { fonts, spacing } from "../styles/base";

export default function Header() {
  const { photoURL } = useUserStore();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
        <Icon name="barcode" size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>AReader</Text>
      {photoURL ? (
        <Image source={{ uri: photoURL }} style={styles.userImg} />
      ) : (
        <Icon name="user" size={25} color="white" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: spacing.xs,
    marginHorizontal: spacing.lg,
    display: "flex",
    flexDirection: "row",
  },
  userImg: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  title: {
    flex: 1,
    textAlign: "center",
    ...fonts.textShadow,
    ...fonts.h4,
  },
});
