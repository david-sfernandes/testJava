const mock: {
  recomendations: Book[];
  scifi: Book[];
  classics: Book[];
  youngAdult: Book[];
} = {
  recomendations: [
    {
      kind: "books#volume",
      id: "2LeZDwAAQBAJ",
      etag: "SyymuDL2Fg0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2LeZDwAAQBAJ",
      volumeInfo: {
        title: "O Hobbit",
        authors: ["J.R.R. Tolkien"],
        publisher: "HarperCollins Brasil",
        publishedDate: "2019-07-15",
        description:
          "Edição com mapas, capa dura, fitilho, as ilustrações originais de J.R.R. Tolkien e um pôster de Valfenda exclusivo! Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788595085800",
          },
          {
            type: "ISBN_10",
            identifier: "8595085803",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 350,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.12.13.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=2LeZDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "13",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&rdid=book-2LeZDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Hobbit-sample-epub.acsm?id=2LeZDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2LeZDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "MAqQDwAAQBAJ",
      etag: "utGpON+agdw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/MAqQDwAAQBAJ",
      volumeInfo: {
        title: "Cem anos de solidão",
        authors: ["Gabriel García Márquez"],
        publisher: "Editora Record",
        publishedDate: "2019-04-03",
        description:
          'O livro mais importante de Gabriel Garcia Márquez. Neste que é um dos maiores clássicos da literatura, o prestigiado autor narra a incrível e triste história dos Buendía – a estirpe de solitários para a qual não será dada "uma segunda ...',
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788501116550",
          },
          {
            type: "ISBN_10",
            identifier: "8501116556",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 448,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.7.9.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=MAqQDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=MAqQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=MAqQDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=MAqQDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=MAqQDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "8",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=MAqQDwAAQBAJ&rdid=book-MAqQDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Cem_anos_de_solid%C3%A3o-sample-epub.acsm?id=MAqQDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Cem_anos_de_solid%C3%A3o-sample-pdf.acsm?id=MAqQDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=MAqQDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "XVvkCQAAQBAJ",
      etag: "A2XNpyaK+yk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/XVvkCQAAQBAJ",
      volumeInfo: {
        title: "O sol é para todos",
        authors: ["Harper Lee"],
        publisher: "Editora José Olympio",
        publishedDate: "2015-06-12",
        description:
          "A nova edição revista de um dos maiores clássicos da literatura mundial. Harper Lee nos apresenta um livro emblemático sobre racismo e injustiça, que marca seus leitores desde a sua primeira publicação e mostra seu valor até hoje. O sol é para ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788503012645",
          },
          {
            type: "ISBN_10",
            identifier: "8503012642",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 350,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 3.5,
        ratingsCount: 3,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.30.26.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=XVvkCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=XVvkCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=XVvkCQAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=XVvkCQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=XVvkCQAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "40",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 42.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 42.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=XVvkCQAAQBAJ&rdid=book-XVvkCQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 42900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 42900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_sol_%C3%A9_para_todos-sample-epub.acsm?id=XVvkCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_sol_%C3%A9_para_todos-sample-pdf.acsm?id=XVvkCQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=XVvkCQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "4CgzDwAAQBAJ",
      etag: "Wm0K9Wq7MWQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/4CgzDwAAQBAJ",
      volumeInfo: {
        title: "Os homens explicam tudo para mim",
        authors: ["Rebecca Solnit"],
        publisher: "Editora Cultrix",
        publishedDate: "2017-08-29",
        description:
          'Em seu ensaio icônico "Os Homens Explicam Tudo para Mim", Rebecca Solnit foca seu olhar inquisitivo no tema dos direitos da mulher começando por nos contar um episódio cômico: um homem passou uma festa inteira falando de um livro que "ela deveria ...',
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788531614231",
          },
          {
            type: "ISBN_10",
            identifier: "8531614236",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 208,
        printType: "BOOK",
        categories: ["Social Science"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.3.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=4CgzDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=4CgzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=4CgzDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=4CgzDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=4CgzDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "6",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 32.8,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 32.8,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=4CgzDwAAQBAJ&rdid=book-4CgzDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 32800000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 32800000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Os_homens_explicam_tudo_para_mim-sample-epub.acsm?id=4CgzDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=4CgzDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "s0HvHdrVINQC",
      etag: "Rq2m2njXdjk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/s0HvHdrVINQC",
      volumeInfo: {
        title: "Comer, rezar, amar",
        subtitle:
          "A busca de uma mulher por todas as coisas da vida na Itália, na Índia e na Indonésia",
        authors: ["Elizabeth Gilbert"],
        publisher: "Objetiva",
        publishedDate: "2008-03-12",
        description:
          "Elizabeth Gilbert estava com quase trinta anos e tinha tudo o que sempre quis: um marido apaixonado, uma casa nova e espaçosa, o projeto de ter filhos e uma carreira de sucesso. Mas ao invés de sentir-se feliz e realizada, sentia-se confusa ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788539002283",
          },
          {
            type: "ISBN_10",
            identifier: "8539002280",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 344,
        printType: "BOOK",
        categories: ["Biography & Autobiography"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "3.21.22.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=s0HvHdrVINQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=s0HvHdrVINQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=s0HvHdrVINQC&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=s0HvHdrVINQC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=s0HvHdrVINQC",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "17",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=s0HvHdrVINQC&rdid=book-s0HvHdrVINQC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Comer_rezar_amar-sample-epub.acsm?id=s0HvHdrVINQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Comer_rezar_amar-sample-pdf.acsm?id=s0HvHdrVINQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=s0HvHdrVINQC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "DLKMDwAAQBAJ",
      etag: "knj30lOkCuw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/DLKMDwAAQBAJ",
      volumeInfo: {
        title: "A guerra dos tronos",
        authors: ["George R. R. Martin"],
        publisher: "Suma",
        publishedDate: "2019-03-25",
        description:
          "A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones . O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788554513566",
          },
          {
            type: "ISBN_10",
            identifier: "8554513568",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 1142,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.6.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=DLKMDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=DLKMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=DLKMDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=DLKMDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=DLKMDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=DLKMDwAAQBAJ&rdid=book-DLKMDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_guerra_dos_tronos-sample-epub.acsm?id=DLKMDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_guerra_dos_tronos-sample-pdf.acsm?id=DLKMDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=DLKMDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "E9UmEAAAQBAJ",
      etag: "xihzC3LT1as",
      selfLink: "https://www.googleapis.com/books/v1/volumes/E9UmEAAAQBAJ",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        publisher: "Leya",
        publishedDate: "2021-01-01",
        description:
          "Winston Smith é um membro do Partido. Trabalha no Ministério da Verdade, onde passa os dias mecanicamente a reescrever a história, de modo a ajustá-la às necessidades do governo. A cada dia que passa, a cada nova mentira, cresce nele uma revolta ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9789722071567",
          },
          {
            type: "ISBN_10",
            identifier: "9722071564",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 281,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=E9UmEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=E9UmEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=E9UmEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=E9UmEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=E9UmEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "3",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 60.5,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 57.48,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=E9UmEAAAQBAJ&rdid=book-E9UmEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 60500000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 57480000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/1984-sample-epub.acsm?id=E9UmEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/1984-sample-pdf.acsm?id=E9UmEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=E9UmEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "c5MlEAAAQBAJ",
      etag: "d5dAxOAAp04",
      selfLink: "https://www.googleapis.com/books/v1/volumes/c5MlEAAAQBAJ",
      volumeInfo: {
        title: "Dom Quixote",
        authors: ["Miguel de Cervantes"],
        publisher: "Principis",
        publishedDate: "2021-03-24",
        description:
          "Influenciado pelas gloriosas histórias de cavalaria, um homem já de idade avançada resolve se aventurar pelo mundo montado em um pangaré e em companhia de um simples camponês. Nesta adaptação, as aventuras de Dom Quixote e Sancho Pança exaltam a ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555524277",
          },
          {
            type: "ISBN_10",
            identifier: "6555524278",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 304,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=c5MlEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=c5MlEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=c5MlEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=c5MlEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=c5MlEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "4",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 14.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 14.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=c5MlEAAAQBAJ&rdid=book-c5MlEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 14900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 14900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Dom_Quixote-sample-epub.acsm?id=c5MlEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Dom_Quixote-sample-pdf.acsm?id=c5MlEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=c5MlEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "p5NgMF0HdFcC",
      etag: "JJqianSR8HY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/p5NgMF0HdFcC",
      volumeInfo: {
        title: "Norwegian Wood",
        authors: ["Haruki Murakami"],
        publisher: "Alfaguara",
        publishedDate: "2005-06-03",
        description:
          "Com mais de quatro milhões de cópias vendidas no Japão, é um romance de formação com toques autobiográficos, ambientado na Tóquio do final da década de 1960, que narra a iniciação amorosa do jovem estudante de teatro Toru Watanabe. Solitário, ele ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788579620744",
          },
          {
            type: "ISBN_10",
            identifier: "8579620740",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 360,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.28.32.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=p5NgMF0HdFcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=p5NgMF0HdFcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=p5NgMF0HdFcC&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=p5NgMF0HdFcC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=p5NgMF0HdFcC",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "17",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=p5NgMF0HdFcC&rdid=book-p5NgMF0HdFcC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Norwegian_Wood-sample-epub.acsm?id=p5NgMF0HdFcC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Norwegian_Wood-sample-pdf.acsm?id=p5NgMF0HdFcC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=p5NgMF0HdFcC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "OpE4DwAAQBAJ",
      etag: "Hu225AO91OM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/OpE4DwAAQBAJ",
      volumeInfo: {
        title: "A sutil arte de ligar o f*da-se",
        subtitle: "Uma estratégia inusitada para uma vida melhor",
        authors: ["Mark Manson"],
        publisher: "Editora Intrinseca",
        publishedDate: "2017-11-06",
        description:
          "Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom de estar no fundo do poço. Coaching, autoajuda ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788551002506",
          },
          {
            type: "ISBN_10",
            identifier: "8551002503",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 185,
        printType: "BOOK",
        categories: ["Self-Help"],
        averageRating: 3.5,
        ratingsCount: 3,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.22.20.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=OpE4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=OpE4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=OpE4DwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=OpE4DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=OpE4DwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "26",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 36.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 33.21,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=OpE4DwAAQBAJ&rdid=book-OpE4DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 36900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 33210000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_sutil_arte_de_ligar_o_f_da_se-sample-epub.acsm?id=OpE4DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_sutil_arte_de_ligar_o_f_da_se-sample-pdf.acsm?id=OpE4DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=OpE4DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
  ],
  scifi: [
    {
      kind: "books#volume",
      id: "81DGDgAAQBAJ",
      etag: "1Y0zUXMCbmA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/81DGDgAAQBAJ",
      volumeInfo: {
        title: "Os despossuídos",
        authors: ["Ursula K. Le Guin"],
        publisher: "Aleph",
        publishedDate: "2017-06-01",
        description:
          "Ganhador do prêmio Nebula de melhor romance em 1974, além do Hugo e do Locus em 1975, Os Despossuídos lida com temas fundamentais a sua época, como o capitalismo, o comunismo russo e o anarquismo, além dos conceitos de individual e coletivo. O ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576573432",
          },
          {
            type: "ISBN_10",
            identifier: "8576573431",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 413,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.5.6.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=81DGDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=81DGDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=81DGDgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=81DGDgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=81DGDgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=81DGDgAAQBAJ&rdid=book-81DGDgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 62900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 62900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Os_despossu%C3%ADdos-sample-epub.acsm?id=81DGDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Os_despossu%C3%ADdos-sample-pdf.acsm?id=81DGDgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=81DGDgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "lcl0PgAACAAJ",
      etag: "uFfPqYM/dpI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/lcl0PgAACAAJ",
      volumeInfo: {
        title: "Rendezvous with Rama",
        authors: ["Arthur C. Clarke"],
        publisher: "Orion Publishing Company",
        publishedDate: "2006",
        description:
          "Rama is a vast alien spacecraft that enters the Solar System, A perfect cylinder some fifty kilometres long, spinning rapidly, racing through space, Rama is a technological marvel, a mysterious and deeply enigmatic alien artifact. It is Mankind's ...",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0575077336",
          },
          {
            type: "ISBN_13",
            identifier: "9780575077331",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 252,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=lcl0PgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=lcl0PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=lcl0PgAACAAJ&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=lcl0PgAACAAJ&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Rendezvous_with_Rama.html?hl=&id=lcl0PgAACAAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=lcl0PgAACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
    },
    {
      kind: "books#volume",
      id: "VcmuCgAAQBAJ",
      etag: "dcp8NHPN9mU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/VcmuCgAAQBAJ",
      volumeInfo: {
        title: "As Cavernas de Aço",
        authors: ["Isaac Asimov"],
        publisher: "Aleph",
        publishedDate: "2015-09-16",
        description:
          "Em Nova York, o investigador de polícia Elijah Baley é escalado para investigar o assassinato de um embaixador dos Mundos Siderais. A rede de intrigas envolve desde sociedades secretas até interesses interplanetários. Mas nada o preocupa tanto ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576571728",
          },
          {
            type: "ISBN_10",
            identifier: "8576571722",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 295,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.17.19.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=VcmuCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=VcmuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=VcmuCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=VcmuCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=VcmuCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "23",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=VcmuCgAAQBAJ&rdid=book-VcmuCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_Cavernas_de_A%C3%A7o-sample-epub.acsm?id=VcmuCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_Cavernas_de_A%C3%A7o-sample-pdf.acsm?id=VcmuCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=VcmuCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "5siuCgAAQBAJ",
      etag: "NpTkpIjlR6o",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5siuCgAAQBAJ",
      volumeInfo: {
        title: "Realidades Adaptadas",
        subtitle:
          "Os contos de Philip K. Dick que inspiraram grandes sucessos do cinema",
        authors: ["Philip K. Dick"],
        publisher: "Aleph",
        publishedDate: "2015-09-16",
        description:
          "Cinema e literatura sempre andaram de mãos dadas. Quando o assunto é ficção científica, nenhum autor contemporâneo foi mais roteirizado do que Philip K. Dick, nem mesmo mestres do gênero como Isaac Asimov e Arthur C. Clarke. Pouco conhecido no ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576571438",
          },
          {
            type: "ISBN_10",
            identifier: "8576571439",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 326,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.10.13.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5siuCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5siuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=5siuCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=5siuCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=5siuCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "14",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 38.43,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 38.43,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=5siuCgAAQBAJ&rdid=book-5siuCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 38430000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 38430000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Realidades_Adaptadas-sample-epub.acsm?id=5siuCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Realidades_Adaptadas-sample-pdf.acsm?id=5siuCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5siuCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "5BclEAAAQBAJ",
      etag: "u+sJfvM1bss",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5BclEAAAQBAJ",
      volumeInfo: {
        title: "Jogador número um",
        subtitle: "Duologia jogador número um vol. 1",
        authors: ["Ernest Cline"],
        publisher: "Editora Intrinseca",
        publishedDate: "2021-04-26",
        description:
          "Uma aventura nostálgica e futurista sobre as fronteiras entre o real e o virtual, em nova edição de luxo O ano é 2045 e o mundo real é um lugar terrível. Para escapar, a humanidade passa a maior parte do tempo logada no OASIS, uma realidade ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555601596",
          },
          {
            type: "ISBN_10",
            identifier: "6555601590",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 573,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.9.9.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5BclEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5BclEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=5BclEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=5BclEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=5BclEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "10",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 34.95,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 34.95,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=5BclEAAAQBAJ&rdid=book-5BclEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 34950000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 34950000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Jogador_n%C3%BAmero_um-sample-epub.acsm?id=5BclEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Jogador_n%C3%BAmero_um-sample-pdf.acsm?id=5BclEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5BclEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "LciuCgAAQBAJ",
      etag: "hRs54g4+Mm4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LciuCgAAQBAJ",
      volumeInfo: {
        title: "Laranja mecânica",
        authors: ["Anthony Burguess"],
        publisher: "Aleph",
        publishedDate: "2015-09-16",
        description:
          "Narrada pelo protagonista, o adolescente Alex, esta brilhante e perturbadora história cria uma sociedade futurista em que a violência atinge grandes proporções e provoca uma resposta igualmente agressiva de um governo totalitário. Ao lado de 1984 ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576571421",
          },
          {
            type: "ISBN_10",
            identifier: "8576571420",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 162,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.18.21.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LciuCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LciuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=LciuCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=LciuCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=LciuCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "29",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=LciuCgAAQBAJ&rdid=book-LciuCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Laranja_mec%C3%A2nica-sample-epub.acsm?id=LciuCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Laranja_mec%C3%A2nica-sample-pdf.acsm?id=LciuCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LciuCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "ZONaDwAAQBAJ",
      etag: "Vid8Bxt+rHg",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ZONaDwAAQBAJ",
      volumeInfo: {
        title: "A Máquina do Tempo (Edição especial)",
        authors: ["H. G. Wells"],
        publisher: "Suma",
        publishedDate: "2018-06-18",
        description:
          "O primeiro e mais famoso livro sobre viagem no tempo chega em edição especial, com ilustrações inéditas, tradução primorosa e extras. Ao contar a história de um cientista inglês que embarca em uma fabulosa jornada a um mundo futuro, desconhecido ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788554511739",
          },
          {
            type: "ISBN_10",
            identifier: "8554511735",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 176,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.5.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ZONaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ZONaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=ZONaDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ZONaDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ZONaDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "5",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ZONaDwAAQBAJ&rdid=book-ZONaDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_M%C3%A1quina_do_Tempo_Edi%C3%A7%C3%A3o_especial-sample-epub.acsm?id=ZONaDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_M%C3%A1quina_do_Tempo_Edi%C3%A7%C3%A3o_especial-sample-pdf.acsm?id=ZONaDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ZONaDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "Hc-uCgAAQBAJ",
      etag: "jVqioXOF+9k",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Hc-uCgAAQBAJ",
      volumeInfo: {
        title: "O fim da eternidade",
        authors: ["Isaac Asimov"],
        publisher: "Aleph",
        publishedDate: "2015-09-16",
        description:
          "Andrew Harlan é um Eterno: membro da classe dominante do futuro. Seu trabalho é viajar pelos séculos monitorando e alterando realidades, corrigindo assim os erros dos homens. A humanidade estava a salvo. Até que Harlan comete o pior dos pecados ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576572428",
          },
          {
            type: "ISBN_10",
            identifier: "8576572427",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 268,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.12.14.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Hc-uCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Hc-uCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=Hc-uCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Hc-uCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Hc-uCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "17",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 38.43,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 38.43,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Hc-uCgAAQBAJ&rdid=book-Hc-uCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 38430000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 38430000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_fim_da_eternidade-sample-epub.acsm?id=Hc-uCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_fim_da_eternidade-sample-pdf.acsm?id=Hc-uCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Hc-uCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "sEbfCgAAQBAJ",
      etag: "8x3EUqSO1bo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/sEbfCgAAQBAJ",
      volumeInfo: {
        title: "Snow Crash",
        authors: ["Neal Stephenson"],
        publisher: "Aleph",
        publishedDate: "2015-10-28",
        description:
          "Em um futuro distópico, os Estados Unidos como o conhecemos não existe mais. Após o colapso do governo, o país se dividiu em cidades-estado controladas por corporações privadas, mafiosos e mercenários de todo tipo. Para escapar desse mundo de ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576572268",
          },
          {
            type: "ISBN_10",
            identifier: "8576572265",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 585,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.20.20.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=sEbfCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=sEbfCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=sEbfCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=sEbfCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=sEbfCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "26",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 55.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 55.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=sEbfCgAAQBAJ&rdid=book-sEbfCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 55900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 55900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Snow_Crash-sample-epub.acsm?id=sEbfCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Snow_Crash-sample-pdf.acsm?id=sEbfCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=sEbfCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "d8iuCgAAQBAJ",
      etag: "oAFTTARUIKQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/d8iuCgAAQBAJ",
      volumeInfo: {
        title: "2001: Uma Odisseia no Espaço",
        authors: ["Arthur C. Clarke"],
        publisher: "Aleph",
        publishedDate: "2015-09-16",
        description:
          "Nos primórdios da humanidade, quando a fome e os predadores ameaçavam a raça humana, chega à Terra um objeto inusitado, inacessível à limitada compreensão da mente pré-histórica, mas que influencia os homens a descobrir coisas que permitem a sua ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576571711",
          },
          {
            type: "ISBN_10",
            identifier: "8576571714",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 315,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.20.19.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=d8iuCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=d8iuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=d8iuCgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=d8iuCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=d8iuCgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "25",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=d8iuCgAAQBAJ&rdid=book-d8iuCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/2001_Uma_Odisseia_no_Espa%C3%A7o-sample-epub.acsm?id=d8iuCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/2001_Uma_Odisseia_no_Espa%C3%A7o-sample-pdf.acsm?id=d8iuCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=d8iuCgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
  ],
  classics: [
    {
      kind: "books#volume",
      id: "c3GnEAAAQBAJ",
      etag: "RPBtfxs/zew",
      selfLink: "https://www.googleapis.com/books/v1/volumes/c3GnEAAAQBAJ",
      volumeInfo: {
        title: "A ilha do tesouro",
        authors: ["Robert Louis Stevenson"],
        publisher: "BOD GmbH DE",
        publishedDate: "2021-12-13",
        description:
          "A vida de Jim Hawkins nunca mais será a mesma depois de conhecer Billy Jones. O velho lobo do mar possui um mapa que mostra o local onde está escondido um tesouro de pirata. Agora o mapa está com Jim e ele parte em uma expedição sem imaginar o ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788594318138",
          },
          {
            type: "ISBN_10",
            identifier: "8594318138",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 242,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=c3GnEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=c3GnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=c3GnEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=c3GnEAAAQBAJ&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_ilha_do_tesouro.html?hl=&id=c3GnEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_ilha_do_tesouro-sample-pdf.acsm?id=c3GnEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=c3GnEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
    },
    {
      kind: "books#volume",
      id: "Y2zaSWoZjewC",
      etag: "qZiBtmX0pAI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Y2zaSWoZjewC",
      volumeInfo: {
        title: "Moby Dick",
        authors: ["Herman Melville", "Fernando Nuno"],
        publisher: "Editora DCL",
        publishedDate: "2005",
        description:
          "Este clássico é recontado por Fernando Nuno com o fascínio de quem, ainda na infância, subiu a bordo do Pequod com o capitão Acab, personagens de Moby Dick. Os azuis e amarelos de Nelson Cruz retratam a frieza e a obsessão do marinheiro em busca ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788573389418",
          },
          {
            type: "ISBN_10",
            identifier: "8573389419",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 98,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.3.2.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Y2zaSWoZjewC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Y2zaSWoZjewC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=Y2zaSWoZjewC&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=Y2zaSWoZjewC&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Moby_Dick.html?hl=&id=Y2zaSWoZjewC",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Moby_Dick-sample-pdf.acsm?id=Y2zaSWoZjewC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Y2zaSWoZjewC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
    },
    {
      kind: "books#volume",
      id: "vBw4zwEACAAJ",
      etag: "rBEd1h7/Ihs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/vBw4zwEACAAJ",
      volumeInfo: {
        title: "O Retrato de Dorian Gray",
        authors: ["Oscar Wilde"],
        publisher: "Globo Livros",
        publishedDate: "2021-07-05",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "8525054135",
          },
          {
            type: "ISBN_13",
            identifier: "9788525054135",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 360,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=vBw4zwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=vBw4zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=vBw4zwEACAAJ&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=vBw4zwEACAAJ&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/O_Retrato_de_Dorian_Gray.html?hl=&id=vBw4zwEACAAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=vBw4zwEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "FfX-AgAAQBAJ",
      etag: "gHOjRzHsFBo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/FfX-AgAAQBAJ",
      volumeInfo: {
        title: "Admirável mundo novo",
        authors: ["Aldous Huxley"],
        publisher: "Globo Livros",
        publishedDate: "2014-03-06",
        description:
          "Um clássico moderno, o romance distópico de Aldous Huxley é indispensável para quem busca leituras sobre autoritarismo, manipulação genética, ficção especulativa e outros temas que, embora tenham surgido com força durante a primeira metade do ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788525056443",
          },
          {
            type: "ISBN_10",
            identifier: "8525056448",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 312,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.8.8.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=FfX-AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=FfX-AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=FfX-AgAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=FfX-AgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=FfX-AgAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "12",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 44.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 44.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=FfX-AgAAQBAJ&rdid=book-FfX-AgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 44900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 44900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Admir%C3%A1vel_mundo_novo-sample-epub.acsm?id=FfX-AgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Admir%C3%A1vel_mundo_novo-sample-pdf.acsm?id=FfX-AgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=FfX-AgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "oXDTDwAAQBAJ",
      etag: "zVswL709prw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oXDTDwAAQBAJ",
      volumeInfo: {
        title: "O morro dos ventos uivantes: edição bolso de luxo",
        authors: ["Emily Brontë"],
        publisher: "Editora Schwarcz - Companhia das Letras",
        publishedDate: "2018-05-10",
        description:
          "A história de um amor que nem mesmo as armadilhas do destino e a morte conseguiram destruir No centro dos acontecimentos dessa história de obsessão e dor, perversidade e vingança, estão a obstinada figura de Catherine Earnshaw e o rude e enérgico ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788537817582",
          },
          {
            type: "ISBN_10",
            identifier: "8537817589",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 447,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.3.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oXDTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oXDTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=oXDTDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=oXDTDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=oXDTDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "5",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 26.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 26.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=oXDTDwAAQBAJ&rdid=book-oXDTDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 26900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 26900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_morro_dos_ventos_uivantes_edi%C3%A7%C3%A3o_bol-sample-epub.acsm?id=oXDTDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_morro_dos_ventos_uivantes_edi%C3%A7%C3%A3o_bol-sample-pdf.acsm?id=oXDTDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=oXDTDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "V0C7zwEACAAJ",
      etag: "ma7MgE22Rck",
      selfLink: "https://www.googleapis.com/books/v1/volumes/V0C7zwEACAAJ",
      volumeInfo: {
        title: "A Metamorfose",
        authors: ["Franz Kafka"],
        publishedDate: "2023-02-28",
        description:
          "Ao acordar, certa manhã, de sonhos inquietos, Gregor Samsa se deu conta de que havia se metamorfoseado num gigantesco inseto. Estava deitado na cama, sobre as costas, que eram tão duras que pareciam uma armadura de metal e, ao levantar um pouco a ...",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "6587817211",
          },
          {
            type: "ISBN_13",
            identifier: "9786587817217",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=V0C7zwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=V0C7zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=V0C7zwEACAAJ&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=V0C7zwEACAAJ&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Metamorfose.html?hl=&id=V0C7zwEACAAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=V0C7zwEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "WxofEAAAQBAJ",
      etag: "ww7byDz3KHo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/WxofEAAAQBAJ",
      volumeInfo: {
        title: "A Odisseia",
        authors: ["Homero"],
        publisher: "Principis",
        publishedDate: "2021-02-19",
        description:
          "Um dos principais poemas épicos da Grécia Antiga, a obra A Odisseia é consagrada ao retorno do rei Ulisses ou Odisseu , que durante dez anos enfrentou perigos na terra e no mar até conseguir chegar ao reino de Ítaca. Herói da Guerra de Troia ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555523560",
          },
          {
            type: "ISBN_10",
            identifier: "6555523565",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 363,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=WxofEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=WxofEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=WxofEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=WxofEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=WxofEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "1",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 14.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 14.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=WxofEAAAQBAJ&rdid=book-WxofEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 14900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 14900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_Odisseia-sample-epub.acsm?id=WxofEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_Odisseia-sample-pdf.acsm?id=WxofEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=WxofEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "Gm_iDwAAQBAJ",
      etag: "IgAxW0zQy6M",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Gm_iDwAAQBAJ",
      volumeInfo: {
        title: "O apanhador no campo de centeio",
        authors: ["J. D. Salinger"],
        publisher: "Todavia",
        publishedDate: "2020-05-08",
        description:
          "Um dos romances mais revolucionários do século XX, O apanhador no campo de centeio é a representação definitiva da juventude na literatura. Com mais de 70 milhões de cópias vendidas desde seu lançamento em 1951, o livro influenciou e marcou ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786556920054",
          },
          {
            type: "ISBN_10",
            identifier: "6556920053",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 247,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.7.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Gm_iDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Gm_iDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=Gm_iDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Gm_iDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Gm_iDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "7",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 54.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 54.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Gm_iDwAAQBAJ&rdid=book-Gm_iDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 54900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 54900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_apanhador_no_campo_de_centeio-sample-epub.acsm?id=Gm_iDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_apanhador_no_campo_de_centeio-sample-pdf.acsm?id=Gm_iDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Gm_iDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "XxofEAAAQBAJ",
      etag: "5UxRAj6oC+4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/XxofEAAAQBAJ",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        publisher: "Tricaju",
        publishedDate: "2021-03-01",
        description:
          "Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. Traduzido em mais de sessenta países, virou minissérie, filmes, quadrinhos, mangás e até uma ópera. Ganhou holofotes em 1999, quando uma produtora holandesa batizou seu reality ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786589678168",
          },
          {
            type: "ISBN_10",
            identifier: "6589678162",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 309,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=XxofEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=XxofEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=XxofEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=XxofEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=XxofEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "1",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=XxofEAAAQBAJ&rdid=book-XxofEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 9900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 9900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/1984-sample-epub.acsm?id=XxofEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/1984-sample-pdf.acsm?id=XxofEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=XxofEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "YLXLEAAAQBAJ",
      etag: "kz2qajCmbJA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/YLXLEAAAQBAJ",
      volumeInfo: {
        title: "O grande Gatsby",
        authors: ["Francis Scott Fitzgerald"],
        publisher: "Buzz Editora",
        publishedDate: "2023-05-15",
        description:
          "Agora você pode viver o sonho americano! Bem-vindo à mansão de Gatsby! Depois de receber um convite para uma festa luxuosa e extravagante em Long Island, Nick Carraway, um jovem solteiro que acaba de se mudar para Nova York, fica curioso a ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786553931794",
          },
          {
            type: "ISBN_10",
            identifier: "6553931798",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 214,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=YLXLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=YLXLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=YLXLEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=YLXLEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=YLXLEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "1",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=YLXLEAAAQBAJ&rdid=book-YLXLEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 62900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 62900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_grande_Gatsby-sample-epub.acsm?id=YLXLEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_grande_Gatsby-sample-pdf.acsm?id=YLXLEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=YLXLEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
  ],
  youngAdult: [
    {
      kind: "books#volume",
      id: "WTSQAQAAQBAJ",
      etag: "GC/0okkmx7o",
      selfLink: "https://www.googleapis.com/books/v1/volumes/WTSQAQAAQBAJ",
      volumeInfo: {
        title: "Maze Runner: Correr ou morrer",
        authors: ["James Dashner"],
        publisher: "Vergara e Riba Editoras S/A",
        publishedDate: "2013-05-13",
        description:
          "Correr ou Morrer LEMBRE CORRA SOBREVIVA Ao acordar dentro de um escuro elevador em movimento, a única coisa que Thomas consegue se lembrar é de seu nome. Sua memória está completamente apagada. Mas ele não está sozinho. Quando a caixa metálica ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788576835301",
          },
          {
            type: "ISBN_10",
            identifier: "8576835304",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 428,
        printType: "BOOK",
        categories: ["Young Adult Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.14.13.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=WTSQAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=WTSQAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=WTSQAQAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=WTSQAQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=WTSQAQAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "18",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 31.85,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 31.85,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=WTSQAQAAQBAJ&rdid=book-WTSQAQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 31850000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 31850000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Maze_Runner_Correr_ou_morrer-sample-epub.acsm?id=WTSQAQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Maze_Runner_Correr_ou_morrer-sample-pdf.acsm?id=WTSQAQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=WTSQAQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "9QVyBAAAQBAJ",
      etag: "OLPfqPEDVSs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/9QVyBAAAQBAJ",
      volumeInfo: {
        title: "Quem é você, Alasca?",
        subtitle: "Edição comemorativa de 10 anos",
        authors: ["John Green"],
        publisher: "Editora Intrinseca",
        publishedDate: "2014-09-09",
        description:
          "Miles Halter estava em busca de um Grande Talvez. Alasca Young queria saber como sair do labirinto. Suas vidas se colidiram na Escola Culver Creek, e nada nunca mais foi o mesmo. Mas antes, um breve resumo de como tudo aconteceu: Miles Halter ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788580576009",
          },
          {
            type: "ISBN_10",
            identifier: "8580576008",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 331,
        printType: "BOOK",
        categories: ["Young Adult Fiction"],
        averageRating: 5,
        ratingsCount: 3,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.17.18.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=9QVyBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=9QVyBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=9QVyBAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=9QVyBAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=9QVyBAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "20",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 35.91,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=9QVyBAAAQBAJ&rdid=book-9QVyBAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 35910000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Quem_%C3%A9_voc%C3%AA_Alasca-sample-epub.acsm?id=9QVyBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Quem_%C3%A9_voc%C3%AA_Alasca-sample-pdf.acsm?id=9QVyBAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=9QVyBAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "I__4CQAAQBAJ",
      etag: "73kVXEr3/m4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/I__4CQAAQBAJ",
      volumeInfo: {
        title: "A rainha vermelha",
        authors: ["Victoria Aveyard"],
        publisher: "Editora Seguinte",
        publishedDate: "2015-06-09",
        description:
          "Nesta fantasia repleta de ação, romance e muitas reviravoltas, a ordem da sociedade é ameaçada quando Mare Barrow, uma jovem comum de sangue vermelho, descobre que tem um poder até então exclusivo à elite de sangue prateado. O mundo de Mare ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788543803548",
          },
          {
            type: "ISBN_10",
            identifier: "8543803543",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 424,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 5,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.13.13.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=I__4CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=I__4CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=I__4CQAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=I__4CQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=I__4CQAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "20",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 27.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 27.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=I__4CQAAQBAJ&rdid=book-I__4CQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 27900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 27900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_rainha_vermelha-sample-epub.acsm?id=I__4CQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_rainha_vermelha-sample-pdf.acsm?id=I__4CQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=I__4CQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "utFMDwAAQBAJ",
      etag: "1SibQTV6khs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/utFMDwAAQBAJ",
      volumeInfo: {
        title: "O milésimo andar",
        authors: ["Katharine McGee"],
        publisher: "Editora Rocco",
        publishedDate: "2018-03-05",
        description:
          "Coleção Pegadas Misteriosas. NOVA YORK COMO VOCÊ NUNCA VIU. Uma torre de mil andares e histórias se esticando até o céu. Uma visão brilhante de um futuro em que tudo é possível – se você desejar o suficiente. BEM-VINDO À MANHATTAN, 2118. Cem anos ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788579803987",
          },
          {
            type: "ISBN_10",
            identifier: "8579803985",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 384,
        printType: "BOOK",
        categories: ["Young Adult Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=utFMDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=utFMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=utFMDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=utFMDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=utFMDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "5",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 28.4,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=utFMDwAAQBAJ&rdid=book-utFMDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 28400000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_mil%C3%A9simo_andar-sample-epub.acsm?id=utFMDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_mil%C3%A9simo_andar-sample-pdf.acsm?id=utFMDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=utFMDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "2wtIEAAAQBAJ",
      etag: "kB/k9dc0WDk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2wtIEAAAQBAJ",
      volumeInfo: {
        title: "Ás de espadas",
        authors: ["Faridah Àbíké-Íyímídé"],
        publisher: "Plataforma21",
        publishedDate: "2021-10-13",
        description:
          "Quando Chiamaka e Devon, alunos da Academia Particular Niveus, são selecionados como parte da alta hierarquia escolar e passam a ser chefes de turma, parece um excelente começo de ano para os dois. Afinal, isso representa muito em seus currículos ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786588343128",
          },
          {
            type: "ISBN_10",
            identifier: "6588343124",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 456,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2wtIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2wtIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=2wtIEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2wtIEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2wtIEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "2",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 48.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2wtIEAAAQBAJ&rdid=book-2wtIEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 48900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/%C3%81s_de_espadas-sample-epub.acsm?id=2wtIEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/%C3%81s_de_espadas-sample-pdf.acsm?id=2wtIEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2wtIEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "MTtpDwAAQBAJ",
      etag: "UjJNMXEYFZY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/MTtpDwAAQBAJ",
      volumeInfo: {
        title: "O príncipe cruel (Vol. 1 O povo do ar)",
        authors: ["Holly Black"],
        publisher: "Editora Record",
        publishedDate: "2018-09-03",
        description:
          "Primeiro livro da mais nova série de Holly Black. Conheça a impressionante história de uma garota mortal que se vê presa em uma teia de intrigas reais. Jude tinha 7 anos quando seus pais foram assassinados e foi forçada a viver no Reino das Fadas ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788501101952",
          },
          {
            type: "ISBN_10",
            identifier: "8501101958",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 322,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 4.5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.8.11.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=MTtpDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=MTtpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=MTtpDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=MTtpDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=MTtpDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "10",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 37.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=MTtpDwAAQBAJ&rdid=book-MTtpDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 37900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_pr%C3%ADncipe_cruel_Vol_1_O_povo_do_ar-sample-epub.acsm?id=MTtpDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_pr%C3%ADncipe_cruel_Vol_1_O_povo_do_ar-sample-pdf.acsm?id=MTtpDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=MTtpDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "2LeZDwAAQBAJ",
      etag: "6V16NPThwe4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2LeZDwAAQBAJ",
      volumeInfo: {
        title: "O Hobbit",
        authors: ["J.R.R. Tolkien"],
        publisher: "HarperCollins Brasil",
        publishedDate: "2019-07-15",
        description:
          "Edição com mapas, capa dura, fitilho, as ilustrações originais de J.R.R. Tolkien e um pôster de Valfenda exclusivo! Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788595085800",
          },
          {
            type: "ISBN_10",
            identifier: "8595085803",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 350,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.12.13.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=2LeZDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "13",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&rdid=book-2LeZDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Hobbit-sample-epub.acsm?id=2LeZDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2LeZDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "19NVEAAAQBAJ",
      etag: "kFvq4EjYx/c",
      selfLink: "https://www.googleapis.com/books/v1/volumes/19NVEAAAQBAJ",
      volumeInfo: {
        title: "Viúva de ferro",
        authors: ["Xiran Jay Zhao"],
        publisher: "Editora Intrinseca",
        publishedDate: "2022-02-24",
        description:
          "Unindo ficção científica, fantasia e elementos da história chinesa, Viúva de Ferro é um dos lançamentos mais aguardados de 2022 Em Huaxia, a maior honra concedida a uma garota é sua escolha para a função de piloto-concubina, servas conectadas a ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555605327",
          },
          {
            type: "ISBN_10",
            identifier: "6555605324",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 373,
        printType: "BOOK",
        categories: ["Young Adult Fiction"],
        maturityRating: "MATURE",
        allowAnonLogging: true,
        contentVersion: "1.10.10.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=19NVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=19NVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=19NVEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=19NVEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=19NVEAAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "11",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 35.91,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=19NVEAAAQBAJ&rdid=book-19NVEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 35910000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Vi%C3%BAva_de_ferro-sample-epub.acsm?id=19NVEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Vi%C3%BAva_de_ferro-sample-pdf.acsm?id=19NVEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=19NVEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "jg26zwEACAAJ",
      etag: "2N84D/nKclg",
      selfLink: "https://www.googleapis.com/books/v1/volumes/jg26zwEACAAJ",
      volumeInfo: {
        title: "O Diário de Anne Frank",
        authors: ["Anne Frank"],
        publishedDate: "2021-08-17",
        description:
          "Durante a II Guera Mundial, no auge da ocupação da Holanda pelos alemães, um grupo de pessoas de origem judaica se refugiou em um esconderijo secreto montado no sótão de uma empresa em Amsterdã. Anne Frank registrou detalhadamente em seu diário o ...",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "6580921021",
          },
          {
            type: "ISBN_13",
            identifier: "9786580921027",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=jg26zwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=jg26zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=jg26zwEACAAJ&hl=&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=jg26zwEACAAJ&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/O_Di%C3%A1rio_de_Anne_Frank.html?hl=&id=jg26zwEACAAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "BR",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=jg26zwEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "lScgAQAAQBAJ",
      etag: "2aQAqofbJoM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/lScgAQAAQBAJ",
      volumeInfo: {
        title: "Cidade dos ossos - Os instrumentos mortais - vol. 1",
        authors: ["Cassandra Clare"],
        publisher: "Galera",
        publishedDate: "2013-10-01",
        description:
          "Um mundo oculto está prestes a ser revelado... Quando Clary decide ir a Nova York se divertir numa discoteca, nunca poderia imaginar que testemunharia um assassinato - muito menos um assassinato cometido por três adolescentes cobertos por ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788501100931",
          },
          {
            type: "ISBN_10",
            identifier: "8501100935",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 590,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 4,
        ratingsCount: 4,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.35.36.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=lScgAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=lScgAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com.br/books?id=lScgAQAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=lScgAQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=lScgAQAAQBAJ",
      },
      layerInfo: {
        layers: [
          {
            layerId: "geo",
            volumeAnnotationsVersion: "72",
          },
        ],
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 39.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=lScgAQAAQBAJ&rdid=book-lScgAQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 39900000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Cidade_dos_ossos_Os_instrumentos_mortais-sample-epub.acsm?id=lScgAQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Cidade_dos_ossos_Os_instrumentos_mortais-sample-pdf.acsm?id=lScgAQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=lScgAQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
  ],
};

export default mock;
