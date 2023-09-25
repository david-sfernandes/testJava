import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../styles/base";

export default function GroupCard({ img }: { img: string }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.cardImg}
      />
      <View style={styles.textBox}>
        <Text style={fonts.h3}>GroupCard</Text>
        <Text style={fonts.default}>Membros: 10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: colors.semiTransparent,
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom: 10,
  },
  cardImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.semiTransparent,
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
  },
});
