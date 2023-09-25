type NavItemProps = { icon: string; text: string; target: string };

type BtnProps = {
  text: string;
  onPress: () => void;
  icon?: string;
  disabled?: boolean;
};

type CustomImgResponse = {
  assets: { uri: string; type: string; fileName: string }[];
};

type BookProps = {
  id?: string;
  title: string;
  cover_edition_key?: string;
  author_name: string[];
  key: string;
};

type BooksResponse = {
  // openlibrary api response
  query: string;
  works: BookProps[];
};

type NavigationProps = {
  navigate(arg0: string): unknown;
  Home: undefined;
  Book: { book: BookProps };
  AR: undefined;
  PictureForm: undefined;
  Auth: undefined;
  Profile: undefined;
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
  description: { value: string; type: string };
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

interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  tenantId: string | null;
  uid: string;
}

interface UserStore extends User {
  setUser: (user: User) => void;
  clearUser: () => void;
}
