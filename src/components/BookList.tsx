import React from "react";
import Book from "./Book";
import { View, StyleSheet } from "react-native";

export default function BookList({ books }: { books: BookProps[] }) {
  return (
    <View style={styles.bookList}>
      {books.map((book, i) => (
        <Book book={book} key={`${book.cover_edition_key}${i}`} />
      ))}
    </View>
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
});