import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import api from "../data/api";
import { colors } from "../styles/base";

export default function LibraryScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const options = [
    { text: "Todos", value: "ALL" },
    { text: "Lidos", value: "READED" },
    { text: "Quero Ler", value: "WANT_TO_READ" },
    { text: "Lendo", value: "READING" },
  ];

  useEffect(() => {
    fetch(api.recomendations)
      .then((res) => res.json())
      .then((res: ApiResponse) => setBooks(res.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BaseView activeNav>
      <SearchBar />
      <Filter options={options} />
      <BookList books={books} />
    </BaseView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    margin: 16,
  },
});
