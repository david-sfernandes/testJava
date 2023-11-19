import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import NoteCard from "../components/NoteCard";
import { colors, fonts, spacing } from "../styles/base";

type Props = NativeStackScreenProps<NavigationProps, "GroupDetails">;

export default function GroupDetailScreen({ route }: Props) {
  const { group } = route.params;

  // print annotations length
  console.log(group.annotations.length);

  return (
    <>
      <BaseView>
        <View style={styles.main}>
          {/* group info */}
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: group.libraryBook.book.cover }}
              style={styles.img}
            />
            <View>
              <Text style={fonts.h1}>{group.libraryBook.book.title}</Text>
              <Text style={fonts.h3}>Membros: {group.members.length + 1}</Text>
              <Text style={fonts.default}>Criador: {group.owner}</Text>
            </View>
          </View>
          <View style={styles.btnBox}>
            {/* group members */}
            <BtnPrimary
              flex
              onPress={() => {}}
              text="Membros"
              icon="account-multiple"
            />
            {/* leave group button */}
            <BtnSecondary flex onPress={() => {}} text="Sair" icon="door-open" />
          </View>
          {/* annotations list */}
          <Text style={[fonts.h4, styles.sectionTitle]}>Anotações</Text>
          <View style={{marginHorizontal: -spacing.md}}>
            {group.annotations.map((annotation) => (
              <View key={annotation.id}>
                <Text style={[fonts.default, styles.annotationCreator]}>
                  {annotation.userEmail}
                </Text>
                <NoteCard annotation={annotation} key={annotation.id} setAnnotation={()=>{}} setOpen={()=>{}}/>
              </View>
            ))}
          </View>
        </View>
      </BaseView>
      
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    gap: 16
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
});
