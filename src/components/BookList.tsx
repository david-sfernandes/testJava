import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Book from "./Book";

export default function BookList({ books }: { books: Book[] }) {
  const navigation = useNavigation();

  return (
    <View style={styles.bookList}>
      {books.map((book) => (
        <Book
          book={book}
          key={book.id}
          onPress={() => {
            // @ts-ignore: suppress param type
            navigation.navigate("Book", { book });
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookList: {
    rowGap: 5,
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: 70,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
});
