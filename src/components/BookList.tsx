import React from "react";
import { StyleSheet, View, VirtualizedList } from "react-native";
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
    rowGap: 8,
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: 100,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
});
