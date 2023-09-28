import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Book from "./Book";

export default function BookSlider({ books }: { books: Book[] }) {
  return (
    <ScrollView horizontal style={styles.slider}>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bookList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
    width: "100%",
    justifyContent: "center",
    paddingBottom: 100,
  },
  slider: {
    gap: 8,
  }
});