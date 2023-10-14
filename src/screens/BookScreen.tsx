import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import BackgroundImage from "../components/BgGradient";
import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import { colors, fonts, spacing } from "../styles/base";
import GoBack from "../components/GoBack";
import StatusForm from "../components/StatusForm";
import useLibrary from "../data/useLibrary";
import Chip from "../components/Chip";
import { Pressable } from "react-native";

type Props = NativeStackScreenProps<NavigationProps, "Book">;

const options = {
  READED: "Lidos",
  WANT_TO_READ: "Quero Ler",
  READING: "Lendo",
};

export default function BookScreen({ route }: Props) {
  const navigation = useNavigation();
  const { book } = route.params;
  const isbn =
    book.volumeInfo.industryIdentifiers.find(
      (identifier) => identifier.type === "ISBN_13"
    )?.identifier || book.volumeInfo.industryIdentifiers[0].identifier;

  const [showModal, setShowModal] = useState(false);
  const [isOnLibrary, setIsOnLibrary] = useState(false);
  const [libraryData, setLibraryData] = useState<BookDB>();
  const library = useLibrary();

  useEffect(() => {
    const checkIfBookIsOnLibrary = async () => {
      library
        .checkLibrary(isbn)
        .then((res: BookDB) => {
          console.log("Is on library: ", res);
          setIsOnLibrary(Boolean(res.status));
          setLibraryData(res);
        })
        .catch((err) => {
          console.log("Error on check library: ", err);
        });
    };

    checkIfBookIsOnLibrary();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <BackgroundImage img={{ uri: book.volumeInfo.imageLinks?.thumbnail }} />
        <ScrollView>
          <GoBack />
          <View style={styles.main}>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Text variant="headlineLarge" style={fonts.h1}>
                  {book.volumeInfo.title}
                </Text>
                {book.volumeInfo.subtitle && (
                  <Text style={[fonts.h4, styles.subtitle]}>
                    {book.volumeInfo.subtitle}
                  </Text>
                )}
                <View style={styles.middleInfo}>
                  <Text variant="headlineSmall" style={[fonts.h4, { flex: 1 }]}>
                    {book.volumeInfo.authors[0]}
                  </Text>
                  <Text
                    style={[fonts.default, styles.subtitle]}
                    variant="bodySmall"
                  >
                    pgs. {book.volumeInfo.pageCount}
                  </Text>
                </View>
              </View>
              {libraryData && (
                <Pressable
                  style={styles.status}
                  onPress={() => setShowModal(true)}
                >
                  <Text>{options[libraryData.status]}</Text>
                </Pressable>
              )}
            </View>
            <View style={styles.btnBox}>
              {isOnLibrary ? (
                <>
                  <BtnSecondary
                    flex
                    text="Anotaçôes"
                    icon="sticker-text"
                    // @ts-ignore: suppress param type
                    onPress={() => navigation.navigate("Annotations", { book })}
                  />
                  <BtnPrimary
                    flex
                    text="Ver"
                    icon="camera"
                    // @ts-ignore: suppress param type
                    onPress={() => navigation.navigate("AR")}
                  />
                </>
              ) : (
                <BtnPrimary
                  flex
                  text="Adicionar"
                  icon="plus"
                  onPress={() => {
                    library.addBook(isbn).then((res) => {
                      console.log(`Add book(${isbn}): `, res);
                      setIsOnLibrary(true);
                    });
                  }}
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
              {book.volumeInfo.description || "Descrição não está disponível"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      {showModal && libraryData && (
        <StatusForm
          isOpen={showModal}
          setOpen={setShowModal}
          libraryData={libraryData}
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
  subtitle: { color: "#ffffffaa", fontWeight: "normal", marginTop: 10 },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  middleInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  goBack: {
    position: "absolute",
    top: 45,
    left: spacing.lg,
  },
  status: {
    backgroundColor: "#ffffffcc",
    color: "black",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    right: 0,
  },
});
