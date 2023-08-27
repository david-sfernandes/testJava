type NavItemProps = { icon: string; text: string };

type BookProps = {
  id: string;
  title: string;
  cover_edition_key: string;
}

type BooksResponse = {
  // openlibrary api response
  query: string;
  works: BookProps[];
}

type RootStackParamList = {
  Home: undefined;
  Book: undefined;
  
};