import React, { useEffect, useState } from "react";
import BaseView from "../components/BaseView";
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import useLibrary from "../data/useLibrary";
import { StyleSheet, Text } from "react-native";
import { fonts } from "../styles/base";
import { useOptionStore } from "../store/optionStore";

export default function LibraryScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [userLibrary, setUserLibrary] = useState<BookDB[]>([]);
  const { currentOption } = useOptionStore();
  const library = useLibrary();
  
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
          setUserLibrary(res);
        }
      })
      .catch((err) => console.log("Error on get books: ", err));
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      userLibrary.forEach(async (book) => {
        try {
          const res = await fetch(book.book.url);
          const data: Book = await res.json();
          data.status = book.status;
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
      {books.length > 0 && <BookList books={books.filter(value => {
        if (currentOption === "ALL") return true;
        return value.status === currentOption;
      })} />}
      {books.length === 0 && (
        <Text style={[fonts.default, styles.text]}>
          Sua biblioteca está vazia.
        </Text>
      )}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  text: { textAlign: "center", marginTop: 10 },
});
