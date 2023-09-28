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

// type BookProps = {
//   id?: string;
//   title: string;
//   cover_edition_key?: string;
//   author_name: string[];
//   key: string;
// };

// type for a books from google api
type ApiResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
};

type Book = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  layerInfo: {
    layers: {
      layerId: string;
      volumeAnnotationsVersion: string;
    }[];
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
    offers: {
      finskyOfferType: number;
      listPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
      retailPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
      giftable: boolean;
    }[];
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
};


// type BooksResponse = {
//   // openlibrary api response
//   query: string;
//   works: BookProps[];
// };

type NavigationProps = {
  navigate(arg0: string): unknown;
  Home: undefined;
  Book: { book: Book };
  AR: undefined;
  PictureForm: undefined;
  Auth: undefined;
  Profile: undefined;
  Annotations: { book: Book };
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
