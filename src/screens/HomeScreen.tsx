import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BackgroundImage from "../components/BackgroundGradient";
import BookList from "../components/BookList";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NavBar";
import { colors, fonts, spacing } from "../styles/base";

export default function HomeScreen() {
  const img = require("../assets/bg-home.png");
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    fetch("https://openlibrary.org/trending.json?limit=1")
      .then((res) => res.json())
      .then((res: BooksResponse) => setBooks(res.works))
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar animated={true} backgroundColor="#ffffff00" translucent />
      <BackgroundImage img={img} />
      <ScrollView>
        <Header />
        <MainBanner />
        <Text style={styles.sectionText}>Recomendações</Text>
        {books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <Text style={fonts.h4}>Loading...</Text>
        )}
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: "auto",
    padding: spacing.md,
  },
  screen: {
    height: "100%",
    position: "relative",
    backgroundColor: colors.black,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    marginBottom: 20,
    color: "#fff",
  },
  bar: {
    backgroundColor: "tomato",
    color: "white",
  },
  bgImg: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  bgGrad: {
    height: "100%",
  },
  sectionText: {
    ...fonts.h4,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
});
