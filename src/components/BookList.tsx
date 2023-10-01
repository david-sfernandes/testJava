import React from "react";
import { StyleSheet, View } from "react-native";
import Book from "./Book";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <View style={styles.bookList}>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 8,
    width: "100%",
    justifyContent: "center",
    paddingBottom: 100,
  },
});
