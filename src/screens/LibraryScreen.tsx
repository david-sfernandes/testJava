import React, { useEffect, useState } from "react";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import useLibrary from "../data/useLibrary";

export default function LibraryScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [userLibrary, setUserLibrary] = useState<BookDB[]>([]);
  const library = useLibrary();
  console.log("Render");
  const options = [
    { text: "Todos", value: "ALL" },
    { text: "Lidos", value: "READED" },
    { text: "Quero Ler", value: "WANT_TO_READ" },
    { text: "Lendo", value: "READING" },
  ];

  useEffect(() => {
    library
      .getBooks()
      .then((res) => {
        console.log("User library: ", res);
        if (res.status != 400) {
          setUserLibrary(res)
        }
      })
      .catch((err) => console.log("Error on get books: ", err));
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      userLibrary.forEach(async (book) => {
        try {
          const res = await fetch(book.book.url);
          const data = await res.json();
          setBooks((prev) => [...prev, data]);
        } catch (err) {
          console.log("Error on fetch book: ", err);
        }
      });
    };
    fetchBooks();
  }, [userLibrary]);

  return (
    <BaseView activeNav>
      <SearchBar />
      <Filter options={options} />
      <BookList books={books} />
    </BaseView>
  );
}
