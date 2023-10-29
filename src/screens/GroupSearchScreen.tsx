import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import BaseView from "../components/BaseView";
import BtnSecondary from "../components/BtnSecondary";
import GroupCard from "../components/GroupCard";
import EnterGroupForm from "../components/forms/EnterGroupForm";
import useGroups from "../hooks/useGroups";
import { dimensions, fonts } from "../styles/base";
import SearchGroup from "../components/SearchGroup";

type Props = NativeStackScreenProps<NavigationProps, "GroupSearch">;

export default function GroupSearchScreen({ route }: Props) {
  const owner = route.params.owner;
  const [groupsOwner, setGroupsOwner] = useState<Group[]>([]);
  const groupsAPI = useGroups();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    groupsAPI
      .getByOwner(owner)
      .then((res) => {
        if (res.status == 400) return;
        setGroupsOwner(res);
      })
      .catch((err) => console.log("Error on get groups (Owner): ", err));
  }, [showModal]);

  return (
    <>
      <BaseView
        img={{
          uri: "https://i.pinimg.com/564x/1d/66/8b/1d668b02c6a5e1bf7d452296cb14ab8f.jpg",
        }}
      >
        <View
          style={{
            minHeight: dimensions.fullHeight * 0.8,
          }}
        >
          <View style={styles.headerContainer}>
            <Text style={[fonts.h2]}>Busca por grupos</Text>
          </View>
          <SearchGroup />
          {groupsOwner.length == 0 && (
            <Text style={styles.sectionTitle}>
              Você encontramos nenhum grupo criado por {owner}
            </Text>
          )}
          {groupsOwner.length > 0 && (
            <Text style={styles.sectionTitle}>Grupos criados por {owner}</Text>
          )}
          {groupsOwner.map((group) => (
            <GroupCard
              id={group.id}
              onPress={() => setShowModal(true)}
              img={group.libraryBook.book.cover}
              author={group.owner}
              members={group.members.length + 1}
              name={group.libraryBook.book.title}
              key={group.id + group.libraryBook.book.title}
            />
          ))}
        </View>
      </BaseView>
      {showModal && (
        <EnterGroupForm setOpen={setShowModal} isOpen={showModal} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    width: "100%",
    gap: 5,
  },
  sectionTitle: {
    ...fonts.h4,
    marginHorizontal: 16,
    marginBottom: 3,
    marginTop: 8,
  },
  input: {
    display: "flex",
    flex: 1,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 35,
    fontSize: 13,
    color: "black",
  },
});
