type NavItemProps = { icon: string; text: string; target: string };

type BtnProps = {
  text: string;
  icon?: string;
  disabled?: boolean;
  onPress: () => void;
  flex?: boolean;
};

type Option = { text: string; value: string };

type CustomImgResponse = {
  assets: { uri: string; type: string; fileName: string }[];
};

type ApiResponse = {
  kind: string;
  items: Book[];
  totalItems: number;
};

type Book = {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  status?: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher?: string;
    description?: string;
    publishedDate: string;
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
    categories?: string[];
    maturityRating: string;
    contentVersion: string;
    allowAnonLogging: boolean;
    averageRating?: number;
    ratingsCount?: number;
    panelizationSummary?: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
    language?: string;
    infoLink: string;
    previewLink: string;
    canonicalVolumeLink: string;
  };
  layerInfo?: {
    layers: {
      layerId: string;
      volumeAnnotationsVersion: string;
    }[];
  };
  saleInfo: {
    country?: string;
    isEbook?: boolean;
    saleability?: string;
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
    retailPrice?: {
      amount: number;
      currencyCode: string;
    };
    buyLink?: string;
    offers?: {
      finskyOfferType: number;
      listPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
      retailPrice: {
        currencyCode: string;
        amountInMicros: number;
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
    epub?: {
      isAvailable?: boolean;
      acsTokenLink?: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink?: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo?: {
    textSnippet: string;
  };
};

type BookDB = {
  id: number;
  userEmail: string;
  isbn: string;
  status: string;
  book: {
    id: number;
    url: string;
    isbn: string;
    title: string;
    cover: string;
    author: string;
    subtitle: string;
  };
};

type Annotation = {
  id: number;
  userEmail: string;
  imgUrl: string;
  annotationUrl: string;
  bookIsbn: string;
};

type ARAnnotation = {
  id: string;
  text: string;
  anchor: string;
};

type NavigationProps = {
  AR: undefined;
  Home: undefined;
  Auth: undefined;
  Profile: undefined;
  Book: { book: Book };
  PictureForm: undefined;
  Search: { value: string };
  Annotations: { libraryData: BookDB };
  GroupSearch: { owner: string };
  navigate(arg0: string): unknown;
};

type Author = {
  type: { key: string };
  author: { key: string };
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

interface FileData {
  fileName: string;
  type: string;
  uri: string;
}

type Group = {
  id: number;
  password: string;
  owner: string;
  libraryBook: BookDB;
  members: string[];
  annotations: Annotation[];
};
