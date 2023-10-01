import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import api from "../data/api";

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
