import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../styles/base";

type GroupCardProps = {
  img: string;
  members: number;
  name: string;
  author: string;
};

export default function GroupCard({ img, members, name, author }: GroupCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: img}}
        style={styles.cardImg}
      />
      <View style={styles.textBox}>
        <Text style={fonts.h3}>{name}</Text>
        <Text style={fonts.default}>Membros: {members}</Text>
        <Text style={[fonts.default, {color: "#ffffffaa"}]}>Autor: {author}</Text>
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
    width: 70,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.semiTransparent,
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
  },
});
