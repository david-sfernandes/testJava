import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import api from "../data/api";
import { colors } from "../styles/base";

type Props = NativeStackScreenProps<NavigationProps, "Search">;

export default function SearchScreen({ route }: Props) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(api.search(route.params.value))
      .then((res) => res.json())
      .then((res: ApiResponse) => setBooks(res.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BaseView activeNav>
      <SearchBar />
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
