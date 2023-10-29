import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useGroups from "../../hooks/useGroups";
import useLibrary from "../../hooks/useLibrary";
import { useGroupBook } from "../../store/groupBook";
import { colors, fonts } from "../../styles/base";
import BottomSheet from "../BottomSheet";
import BtnPrimary from "../BtnPrimary";
import Notification from "../Notification";

type CreateGroupFormProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export default function CreateGroupForm({
  isOpen,
  setOpen,
}: CreateGroupFormProps) {
  const [userLibrary, setUserLibrary] = useState<BookDB[]>([]);
  const [option, setOption] = useState<number>();
  const library = useLibrary();
  const { bookId } = useGroupBook();
  const [text, setText] = useState("");
  const [isTextValid, setIsTextValid] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const groups = useGroups();

  const handleText = (text: string) => {
    let t = text.trim();
    if (t.length >= 4) setIsTextValid(true);
    setText(t);
  };

  const createGroup = () => {
    if (!bookId || !isTextValid) return;
    groups
      .create(bookId, text)
      .then((res) => {
        if (res.status == 400) return;
        setNotification("Grupo criado com sucesso!");
        setShowNotification(true);
        setOpen(false);
      })
      .catch((err) => {
        console.log("Error on create group: ", err);
        setNotification("Erro ao criar grupo!");
        setShowNotification(true);
      });
  };

  useEffect(() => {
    library
      .getBooks()
      .then((res) => {
        console.log("User library: ", res);
        if (res.status != 400) {
          setUserLibrary(res);
        }
      })
      .catch((err) => console.log("Error on get books: ", err));
  }, []);

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={335}>
      <Text style={fonts.default}>
        Selecione o livro que será compatilhada as anotações:
      </Text>
      <BookList books={userLibrary} />
      <Text style={fonts.default}>
        Digite a senha do grupo para que outros usuários possam entrar:
      </Text>
      <TextInput
        value={text}
        multiline={true}
        style={[styles.input]}
        placeholder="Senha deve ter no mínimo 4 caracteres"
        onChangeText={(text) => handleText(text)}
        placeholderTextColor={colors.semiTransparent}
        keyboardType="numeric"
      />
      <BtnPrimary
        onPress={() => createGroup()}
        text="Criar grupo"
        disabled={!bookId || !isTextValid}
      />
      <Notification
        visible={showNotification}
        setVisible={setShowNotification}
        icon="users"
        text={notification}
      />
    </BottomSheet>
  );
}

function BookList({ books }: { books: BookDB[] }) {
  return (
    <View style={styles.bookList}>
      {books.map((book) => (
        <Book data={book} key={book.id} />
      ))}
    </View>
  );
}

function Book({ data }: { data: BookDB }) {
  const { bookId, setBookId } = useGroupBook();
  const image = data.book.cover
    ? { uri: data.book.cover }
    : require("../../assets/placeholder.png");
  const selectedStyle =
    bookId == data.id ? { borderColor: "#ffffffbb", borderWidth: 3 } : {};

  return (
    <TouchableOpacity
      onPress={() => setBookId(data.id)}
      style={[styles.bookContainer, selectedStyle]}
    >
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 70,
    height: 100,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bookList: {
    rowGap: 8,
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: 17,
    flexDirection: "row",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    borderColor: "white",
  },
});
