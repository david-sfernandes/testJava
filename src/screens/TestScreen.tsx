import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import MainBanner from "../components/MainBanner";
import mock from "../data/mock";
import { fonts, spacing } from "../styles/base";

export default function HomeScreen() {
  const img = require("../assets/bg-home.png");
  const [books, setBooks] = useState<BookProps[]>(mock);

  // const [books, setBooks] = useState<BookProps[]>([]);

  // useEffect(() => {
  //   fetch("https://openlibrary.org/trending.json?limit=6")
  //     .then((res) => res.json())
  //     .then((res: BooksResponse) => setBooks(res.works))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <BaseView activeHeader activeNav img={img}>
      <MainBanner />
      <Text style={styles.sectionText}>Recomendações</Text>
      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <Text style={fonts.h4}>Loading...</Text>
      )}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    ...fonts.h4,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
});
