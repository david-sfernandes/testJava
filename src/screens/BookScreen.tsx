import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import BaseView from "../components/BaseView";
import BookMainInfo from "../components/BookMainInfo";
import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import GoBack from "../components/GoBack";
import OpenAR from "../components/OpenAR";
import StatusForm from "../components/forms/StatusForm";
import { colors, fonts, spacing } from "../styles/base";
import useLibrary from "../hooks/useLibrary";
import useAnnotations from "../hooks/useAnnotations";

type Props = NativeStackScreenProps<NavigationProps, "Book">;

const options = {
  READED: "Lidos",
  WANT_TO_READ: "Quero Ler",
  READING: "Lendo",
};

export default function BookScreen({ route }: Props) {
  const navigation = useNavigation<NavigationProps>();
  const { book } = route.params;
  const img = book.volumeInfo.imageLinks?.thumbnail
    ? { uri: book.volumeInfo.imageLinks.thumbnail }
    : null;
  const isbn =
    book.volumeInfo?.industryIdentifiers?.find(
      (identifier) => identifier.type === "ISBN_13"
    )?.identifier || book.volumeInfo.industryIdentifiers[0].identifier;

  const [showModal, setShowModal] = useState(false);
  const [isOnLibrary, setIsOnLibrary] = useState(false);
  const [libraryData, setLibraryData] = useState<BookDB>();
  const [annotationList, setAnnotationList] = useState<ARAnnotation[]>([]);
  const [isAddLoading, setIsAddLoading] = useState(false);
  const isFocused = useIsFocused();

  const library = useLibrary();
  const annotations = useAnnotations();

  const checkIfBookIsOnLibrary = async () => {
    console.log("Checking library...");
    library
      .checkLibrary(isbn)
      .then((res: BookDB) => {
        setIsOnLibrary(Boolean(res.status));
        setLibraryData(res);
      })
      .catch((err) => {
        console.log("Error on check library: ", err);
      });
  };

  const handleAddBook = () => {
    setIsAddLoading(true);
    library
      .addBook(isbn)
      .then(() => {
        // @ts-ignore: suppress param type
        navigation.navigate("Book", { book });
      })
      .catch((err) => {
        console.log("Error on add book: ", err);
      });
  };

  useEffect(() => {
    checkIfBookIsOnLibrary();
    annotations
      .getAnnotationsByIsbn(isbn)
      .then((res) => {
        if (res.status >= 400) return;
        const annotations = (res as Annotation[]).map((annotation) => ({
          id: annotation.id.toString(),
          anchor: annotation.imgUrl,
          text: annotation.annotationUrl,
        }));

        setAnnotationList(annotations);
      })
      .catch((err) => {
        console.log("Error on get annotations: ", err);
      });
  }, [isFocused, route.params]);

  return (
    <>
      <BaseView img={img}>
        <GoBack />
        <View style={styles.main}>
          <View style={styles.container}>
            {(libraryData && libraryData.status) && (
              <Pressable
                style={styles.status}
                onPress={() => setShowModal(true)}
              >
                <Text style={{ fontSize: 12 }}>
                  {options[libraryData.status]}
                </Text>
              </Pressable>
            )}
            <BookMainInfo book={book} />
          </View>
          <View style={styles.btnBox}>
            {isOnLibrary ? (
              <>
                <BtnSecondary
                  flex
                  text="Anotaçôes"
                  icon="sticker-text"
                  onPress={() =>
                    // @ts-ignore: suppress param type
                    navigation.navigate("Annotations", { libraryData })
                  }
                />
                {annotationList.length > 0 && (
                  <BtnPrimary
                    flex
                    text="Ver"
                    icon="camera"
                    onPress={() => OpenAR(annotationList)}
                  />
                )}
              </>
            ) : (
              <BtnPrimary
                flex
                disabled={isAddLoading}
                text={isAddLoading ? "Adicionando..." : "Adicionar"}
                icon="plus"
                onPress={handleAddBook}
              />
            )}
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[fonts.h3, styles.description]}>Descrição</Text>
          <Text
            style={[fonts.default, { textAlign: "justify" }]}
            variant="bodySmall"
          >
            {book.volumeInfo.description || "Não há descrição disponível"}
          </Text>
        </View>
      </BaseView>
      {showModal && (
        <StatusForm
          isOpen={showModal}
          setOpen={setShowModal}
          libraryData={libraryData}
          callback={checkIfBookIsOnLibrary}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    position: "relative",
    backgroundColor: colors.black,
  },
  main: {
    marginTop: 120,
    paddingHorizontal: spacing.lg,
  },
  descriptionContainer: {
    paddingHorizontal: spacing.lg,
    marginBottom: 30,
  },
  btnBox: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    marginTop: spacing.sm,
  },
  description: { marginTop: spacing.md, marginBottom: spacing.xs },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  goBack: {
    position: "absolute",
    top: 45,
    left: spacing.lg,
  },
  status: {
    backgroundColor: "#ffffffdd",
    color: "black",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
