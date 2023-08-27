type NavItemProps = { icon: string; text: string };

type BookProps = {
  id: string;
  title: string;
  cover_edition_key: string;
  author_name: string[];
  key: string;
};

type BooksResponse = {
  // openlibrary api response
  query: string;
  works: BookProps[];
};

type RootStackParamList = {
  Home: undefined;
  Book: {book: BookProps};
  AR: undefined;
  PictureFrom: undefined;
};

type Author = {
  author: { key: string };
  type: { key: string };
};

type BookDetails = {
  title: string;
  key: string;
  authors: Author[];
  type: { key: string };
  description: { value: string, type: string };
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  subject_times: string[];
  location: string;
  latest_revision: number;
  revision: number;
  created: { type: string; value: string };
  last_modified: { type: string; value: string };
};