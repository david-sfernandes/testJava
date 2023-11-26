import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import useGroups from "../../hooks/useGroups";
import useLibrary from "../../hooks/useLibrary";
import { useGroupBook } from "../../store/groupBook";
import {
  bookContainer,
  bookImage,
  bookTitle,
  colors,
  fonts,
} from "../../styles/base";
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
    <ScrollView horizontal style={styles.bookList}>
      {books.map((book) => (
        <Book data={book} key={book.id} />
      ))}
    </ScrollView>
  );
}

function Book({ data }: { data: BookDB }) {
  const { bookId, setBookId } = useGroupBook();
  const image = data.book.cover ? { uri: data.book.cover } : null;
  const selectedStyle =
    bookId == data.id ? { borderColor: "#ffffffbb", borderWidth: 3 } : {};

  return (
    <TouchableOpacity
      onPress={() => setBookId(data.id)}
      style={[bookContainer, selectedStyle, { width: 70, height: 100 }]}
    >
      {image ? (
        <Image source={image} style={bookImage} />
      ) : (
        <Text style={[bookTitle, { fontSize: 10 }]}>{data.book.title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookList: {
    gap: 8,
    paddingBottom: 0,
    marginBottom: 0,
    height: 100,
    maxHeight: 112,
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
