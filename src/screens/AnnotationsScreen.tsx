import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BaseView from "../components/BaseView";
import { colors, fonts, spacing } from "../styles/base";
import NoteCard from "../components/NoteCard";
import Icon from "react-native-vector-icons/FontAwesome5";
import Modal from "../components/Modal";

const AddNote = ({onClick}: {onClick: () => void}) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable style={styles.addNote} onPress={() => onClick()}>
        <Icon name="plus" solid size={20} color="black" />
        <Text style={styles.addNoteText}>Adicionar</Text>
      </Pressable>
    </View>
  );
};

export default function AnnotationsScreen() {
  const mock = new Array(15).fill(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <BaseView img={require("../assets/bg-home.png")}>
        <View style={styles.main}>
          <Text style={fonts.h1}>Nome do livro</Text>
          <Text style={{ ...fonts.h3, marginTop: 0 }}>Nome do autor</Text>
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
      <AddNote onClick={toggleModal}/>
      {isOpen && <Modal isOpen={isOpen} setOpen={setIsOpen}/>}
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
});
