type RootStackParamList = {
  Home: undefined;
  Book: undefined;
  AR: undefined;
};

type BookProps = {
  title: string,
  cover_edition_key: string,
  author_name: string
}

type BooksResponse = {
  query: string,
  works: BookProps[]
}

