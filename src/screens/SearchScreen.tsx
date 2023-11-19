import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import useBooks from "../hooks/useBooks";

type Props = NativeStackScreenProps<NavigationProps, "Search">;

export default function SearchScreen({ route }: Props) {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [isISBN, setIsISBN] = useState(route.params.isISBN);
  const books = useBooks();

  useEffect(() => {
    if (isISBN) {
      fetch(books.searchByISBN(route.params.value))
        .then((res) => res.json())
        .then((res: ApiResponse) => setBookList(res.items))
        .catch((err) => console.error(err));
    } else {
      fetch(books.search(route.params.value))
        .then((res) => res.json())
        .then((res: ApiResponse) => setBookList(res.items))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <BaseView activeNav>
      <SearchBar />
      <BookList books={bookList} />
    </BaseView>
  );
}
