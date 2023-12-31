import { useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import BaseView from "../components/BaseView";
import GoBack from "../components/GoBack";
import NoteCard from "../components/NoteCard";
import AnnotationForm from "../components/forms/AnnotationForm";
import ImgForm from "../components/forms/ImgForm";
import useAnnotations from "../hooks/useAnnotations";
import { colors, fonts, spacing } from "../styles/base";

const AddNote = ({ onClick }: { onClick: () => void }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable style={styles.addNote} onPress={() => onClick()}>
        <Icon name="plus" solid size={12} color="black" />
        <Text style={styles.addNoteText}>Adicionar</Text>
      </Pressable>
    </View>
  );
};

type Props = NativeStackScreenProps<NavigationProps, "Annotations">;

export default function AnnotationsScreen({ route }: Props) {
  const { libraryData } = route.params;
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const annotations = useAnnotations();
  const [annotationList, setAnnotationList] = useState<Annotation[]>([]);
  const [currentAnnotation, setCurrentAnnotation] = useState<Annotation>();
  const [showAnnotationForm, setShowAnnotationForm] = useState(false);
  const isFocused = useIsFocused();
  const img = libraryData.book.cover ? { uri: libraryData.book.cover } : null;

  useEffect(() => {
    annotations
      .getAnnotationsByIsbn(libraryData.isbn)
      .then((res) => {
        if (res.status >= 400) return;
        setAnnotationList(res);
      })
      .catch((err) => {
        console.log("Error on get annotations: ", err);
      });
  }, [isOpen, isFocused]);

  return (
    <>
      <BaseView img={img}>
        <GoBack />
        <View style={styles.main}>
          <Text style={fonts.h1}>{libraryData.book.title}</Text>
          <Text style={[fonts.h3, styles.author]}>
            {libraryData.book.author}
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
              Anotações: {annotationList.length}
            </Text>
            <Icon name="eye" solid size={25} color="white" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          {annotationList.map((annotation) => (
            <NoteCard
              key={annotation.id}
              annotation={annotation}
              setAnnotation={setCurrentAnnotation}
              setOpen={setShowAnnotationForm}
            />
          ))}
        </View>
      </BaseView>
      <AddNote onClick={toggleModal} />
      {isOpen && (
        <ImgForm
          isOpen={isOpen}
          setOpen={setIsOpen}
          libraryData={libraryData}
        />
      )}
      {showAnnotationForm && currentAnnotation && (
        <AnnotationForm
          isOpen={showAnnotationForm}
          setOpen={setShowAnnotationForm}
          annotation={currentAnnotation}
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
