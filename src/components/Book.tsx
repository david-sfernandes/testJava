import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bookContainer, bookImage, colors, fonts } from "../styles/base";

type BookProps = {
  book: Book;
  width?: number;
  onPress: () => void;
};

export default function Book({ book, onPress, width = 100 }: BookProps) {
  const image = book.volumeInfo.imageLinks?.thumbnail
    ? { uri: book.volumeInfo.imageLinks?.thumbnail }
    : null;

  const customStyle = {
    width: width,
    height: width * 1.5,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[bookContainer, customStyle]}>
      {image ? (
        <Image source={image} style={bookImage} />
      ) : (
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    ...fonts.default,
    width: "90%",
    margin: "auto",
    color: "#00000077",
    textAlign: "center",
  },
});
