import React, { useState } from 'react';
import BaseView from '../components/BaseView';
import { Text } from 'react-native';
import mock from '../data/mock';
import BookList from '../components/BookList';
import { fonts } from '../styles/base';

export default function LibraryScreen() {
  const [books, setBooks] = useState<BookProps[]>(mock);

  return (
    <BaseView activeNav>  
      <Text style={[fonts.h2, {padding: 16}]}>Library</Text>
      <BookList books={books} />
    </BaseView>    
  )
}