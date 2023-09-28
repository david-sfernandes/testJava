import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import BaseView from '../components/BaseView';
import BookList from '../components/BookList';
import api from '../data/api';
import { colors } from '../styles/base';

export default function LibraryScreen() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(api.recomendations)
      .then((res) => res.json())
      .then((res: ApiResponse) => setBooks(res.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BaseView activeNav>
      <TextInput placeholder="Pesquisar" style={styles.textInput} />
      <BookList books={books} />
    </BaseView>    
  )
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