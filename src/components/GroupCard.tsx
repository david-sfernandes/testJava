import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../styles/base";
import { useGroupBook } from "../store/groupBook";

type GroupCardProps = {
  id: number;
  img: string;
  members: number;
  name: string;
  author: string;
  allowEnter?: boolean;
  onPress?: () => void;
};

export default function GroupCard({ img, members, name, author, id, onPress }: GroupCardProps) {
  const { setGroupId } = useGroupBook();
  return (
    <TouchableOpacity style={styles.card} onPress={() => {
      setGroupId(id);
      onPress && onPress();
    }}>
      <Image
        source={{ uri: img}}
        style={styles.cardImg}
      />
      <View style={styles.textBox}>
        <Text style={fonts.h3}>{name}</Text>
        <Text style={fonts.default}>Membros: {members}</Text>
        <Text style={[fonts.default, {color: "#ffffffaa"}]}>Autor: {author}</Text>
      </View>
    </TouchableOpacity>
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
