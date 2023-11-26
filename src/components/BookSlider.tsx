import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { fonts, spacing } from "../styles/base";
import Book from "./Book";
import { useNavigation } from "@react-navigation/native";

export default function BookSlider({
  listUrl,
  title,
  mockBooks = [],
}: {
  listUrl: string;
  title: string;
  mockBooks?: Book[];
}) {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const navigation = useNavigation();

  useEffect(() => {
    if (mockBooks.length == 0) {
      fetch(listUrl)
        .then((res) => res.json())
        .then((res: ApiResponse) => {
          setBooks(res.items);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <View>
      <Text style={[fonts.h4, styles.sectionText]}>{title}</Text>
      <ScrollView horizontal style={styles.slider}>
        <View style={{ width: 10 }} />
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
      </ScrollView>
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
  slider: {
    gap: 8,
  },
  sectionText: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
