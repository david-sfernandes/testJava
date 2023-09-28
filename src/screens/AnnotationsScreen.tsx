import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import BaseView from "../components/BaseView";
import ImgForm from "../components/ImgForm";
import NoteCard from "../components/NoteCard";
import { colors, fonts, spacing } from "../styles/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const AddNote = ({ onClick }: { onClick: () => void }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable style={styles.addNote} onPress={() => onClick()}>
        <Icon name="plus" solid size={20} color="black" />
        <Text style={styles.addNoteText}>Adicionar</Text>
      </Pressable>
    </View>
  );
};

type Props = NativeStackScreenProps<NavigationProps, "Book">;

export default function AnnotationsScreen({ route }: Props) {
  const { book } = route.params;
  const mock = new Array(15).fill(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <BaseView img={{ uri: book.volumeInfo.imageLinks?.thumbnail }}>
        <View style={styles.main}>
          <Text style={fonts.h1}>{book.volumeInfo.title}</Text>
          <Text style={[fonts.h3, styles.author]}>
            {book.volumeInfo.authors[0]}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ ...fonts.h4, color: "#eeeeeecc" }}>
              Anotações: 15
            </Text>
            <Icon name="eye" solid size={25} color="white" />
          </View>
        </View>
        <View
          style={{
            marginBottom: 50,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          {mock.map((_, i) => (
            <NoteCard key={i} />
          ))}
        </View>
      </BaseView>
      <AddNote onClick={toggleModal} />
      {isOpen && <ImgForm isOpen={isOpen} setOpen={setIsOpen} />}
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
  addNote: {
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 30,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.xs,
    gap: 5,
    zIndex: 50,
  },
  addNoteText: {
    fontSize: 12,
    color: "black",
  },
  author: {
    marginTop: 0,
  },
});
