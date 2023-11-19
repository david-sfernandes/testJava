import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnPrimary from "../components/BtnPrimary";
import GroupCard from "../components/GroupCard";
import SearchGroup from "../components/SearchGroup";
import CreateGroupForm from "../components/forms/CreateGroupForm";
import useGroups from "../hooks/useGroups";
import { dimensions, fonts } from "../styles/base";
import { useNavigation } from "@react-navigation/native";

export default function GroupsScreen() {
  const [groupsMember, setGroupsMember] = useState<Group[]>([]);
  const [groupsOwner, setGroupsOwner] = useState<Group[]>([]);
  const groupsAPI = useGroups();
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    groupsAPI
      .getByMembers()
      .then((res) => {
        if (res.status == 400) return;
        setGroupsMember(res);
      })
      .catch((err) => console.log("Error on get groups (Members): ", err));
  }, []);

  useEffect(() => {
    groupsAPI
      .getByOwner()
      .then((res) => {
        if (res.status == 400) return;
        setGroupsOwner(res);
      })
      .catch((err) => console.log("Error on get groups (Owner): ", err));
  }, [showModal]);

  return (
    <>
      <BaseView
        activeNav
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
            <Text style={[fonts.h2]}>Grupos</Text>
            <BtnPrimary
              text="Criar grupo"
              icon="plus"
              onPress={() => setShowModal(true)}
            />
          </View>
          <SearchGroup />
          {groupsOwner.length == 0 && groupsMember.length == 0 && (
            <Text style={styles.sectionTitle}>
              Você não está em nenhum grupo
            </Text>
          )}
          {groupsOwner.length > 0 && (
            <Text style={styles.sectionTitle}>Grupos que você criou</Text>
          )}
          {groupsOwner.map((group) => (
            <GroupCard
              id={group.id}
              img={group.libraryBook.book.cover}
              author={group.owner}
              members={group.members.length + 1}
              name={group.libraryBook.book.title}
              key={group.id + group.libraryBook.book.title}
              onPress={() =>
                // @ts-ignore
                navigation.navigate("GroupDetailsSearch", { group: group })
              }
            />
          ))}
          {groupsMember.length > 0 && (
            <Text style={styles.sectionTitle}>Grupos que você participa</Text>
          )}
          {groupsMember.map((group) => (
            <GroupCard
              id={group.id}
              author={group.owner}
              img={group.libraryBook.book.cover}
              members={group.members.length + 1}
              name={group.libraryBook.book.title}
              key={group.id + group.libraryBook.book.title}
              onPress={() =>
                // @ts-ignore
                navigation.navigate("GroupDetails", { group: group })
              }
            />
          ))}
        </View>
      </BaseView>
      {showModal && (
        <CreateGroupForm setOpen={setShowModal} isOpen={showModal} />
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
