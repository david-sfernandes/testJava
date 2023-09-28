import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BaseView from "../components/BaseView";
import MainBanner from "../components/MainBanner";
import api from "../data/api";
import { fonts, spacing } from "../styles/base";
import BookSlider from "../components/BookSlider";

export default function HomeScreen() {
  const img = require("../assets/bg-home.png");
  const [books, setBooks] = useState<Book[]>([]);
  // const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    fetch(api.recomendations)
      .then((res) => res.json())
      .then((res: ApiResponse) => setBooks(res.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BaseView activeHeader activeNav img={img}>
      <MainBanner />
      <Text style={[fonts.h4, styles.sectionText]}>Recomendações</Text>
      {books.length > 0 ? (
        <BookSlider books={books} />
      ) : (
        <Text style={fonts.h4}>Loading...</Text>
      )}
      <Text style={[fonts.h4, styles.sectionText]}>Recomendações</Text>
      {books.length > 0 ? (
        <BookSlider books={books} />
      ) : (
        <Text style={fonts.h4}>Loading...</Text>
      )}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
