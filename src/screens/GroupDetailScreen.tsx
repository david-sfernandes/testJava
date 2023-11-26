import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import MembersList from "../components/MembersList";
import NoteCard from "../components/NoteCard";
import useGroups from "../hooks/useGroups";
import {
  bookContainer,
  bookImage,
  bookTitle,
  colors,
  dimensions,
  fonts,
  spacing,
} from "../styles/base";

type Props = NativeStackScreenProps<NavigationProps, "GroupDetails">;

export default function GroupDetailScreen({ route }: Props) {
  const { group } = route.params;
  const [showMembers, setShowMembers] = useState(false);
  const groups = useGroups();

  return (
    <>
      <BaseView>
        <View style={styles.main}>
          <View style={styles.headerContainer}>
            <View style={[bookContainer, { width: 70, height: 100 }]}>
              {group.libraryBook.book.cover ? (
                <Image
                  source={{ uri: group.libraryBook.book.cover }}
                  style={bookImage}
                />
              ) : (
                <Text style={bookTitle}>{group.libraryBook.book.title}</Text>
              )}
            </View>
            <View style={styles.textBox}>
              <Text style={fonts.h1} numberOfLines={2} ellipsizeMode="tail">
                {group.libraryBook.book.title}
              </Text>
              <Text style={fonts.h3}>Membros: {group.members.length + 1}</Text>
              <Text style={fonts.default}>Criador: {group.owner}</Text>
            </View>
          </View>
          <View style={styles.btnBox}>
            <BtnPrimary
              flex
              onPress={() => setShowMembers(true)}
              text="Membros"
              icon="account-multiple"
            />
            <BtnSecondary
              flex
              text="Sair"
              icon="door-open"
              onPress={() => groups.leave(group.id)}
            />
          </View>
          <Text style={[fonts.h4, styles.sectionTitle]}>Anotações</Text>
          <View style={{ marginHorizontal: -spacing.md }}>
            {group.annotations.map((annotation) => (
              <View key={annotation.id}>
                <Text style={[fonts.default, styles.annotationCreator]}>
                  {annotation.userEmail}
                </Text>
                <NoteCard
                  annotation={annotation}
                  key={annotation.id}
                  setAnnotation={() => {}}
                  setOpen={() => {}}
                />
              </View>
            ))}
          </View>
        </View>
      </BaseView>
      {showMembers && (
        <MembersList
          isOpen={showMembers}
          setOpen={setShowMembers}
          members={group.members}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    marginHorizontal: 16,
  },
  image: {
    width: 70,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.semiTransparent,
  },
  annotationCreator: {
    color: "#ffffffaa",
    marginStart: spacing.md,
    marginBottom: 0,
    marginTop: 4,
  },
  btnBox: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    marginTop: spacing.sm,
  },
  img: {
    width: 70,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.semiTransparent,
  },
  main: {
    marginTop: 30,
    paddingHorizontal: spacing.md,
  },
  textBox: {
    width: dimensions.fullWidth - 70 - 16 - 50,
  },
});
