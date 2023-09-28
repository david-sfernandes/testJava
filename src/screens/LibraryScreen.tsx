import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import BaseView from '../components/BaseView';
import BookList from '../components/BookList';
import api from '../data/api';
import { colors } from '../styles/base';
import SearchBar from '../components/SearchBar';
import Chip from '../components/Chip';

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
      <SearchBar />
      <View style={styles.chipBox}>
        <Chip text='X' />
        <Chip text='Lidos' />
        <Chip text='Quero ler' />
        <Chip text='Lendo' />
      </View>
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
  chipBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});