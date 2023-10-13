import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import books from "../data/books";

type Props = NativeStackScreenProps<NavigationProps, "Search">;

export default function SearchScreen({ route }: Props) {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    fetch(books.search(route.params.value))
      .then((res) => res.json())
      .then((res: ApiResponse) => setBookList(res.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BaseView activeNav>
      <SearchBar />
      <BookList books={bookList} />
    </BaseView>
  );
}
