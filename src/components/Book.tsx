import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet } from "react-native";

export default function Book({ book }: { book: Book }) {
  const navigation = useNavigation();
  const image = book.volumeInfo.imageLinks?.thumbnail ? {uri: book.volumeInfo.imageLinks?.thumbnail} : require("../assets/placeholder.png");
  return (
    <Pressable
      onPress={() => {
        // @ts-ignore: suppress param type
        navigation.navigate("Book", { book });
      }}
      style={styles.bookContainer}
    >
      <Image
        source={{ uri: book.volumeInfo.imageLinks?.thumbnail  }}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 100,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
