type NavItemProps = { icon: string; text: string; target: string };

type BtnProps = {
  text: string;
  icon?: string;
  disabled?: boolean;
  onPress: () => void;
};

type Option = { text: string; value: string };

type CustomImgResponse = {
  assets: { uri: string; type: string; fileName: string }[];
};

// type for a books from google api
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
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    description: string;
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
    categories: string[];
    maturityRating: string;
    contentVersion: string;
    allowAnonLogging: boolean;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
    language: string;
    infoLink: string;
    previewLink: string;
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
    isEbook: boolean;
    saleability: string;
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

type NavigationProps = {
  AR: undefined;
  Home: undefined;
  Auth: undefined;
  Profile: undefined;
  Book: { book: Book };
  PictureForm: undefined;
  Search: { value: string };
  Annotations: { book: Book };
  navigate(arg0: string): unknown;
};

type Author = {
  type: { key: string };
  author: { key: string };
};
