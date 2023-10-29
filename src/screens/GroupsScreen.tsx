import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseView from "../components/BaseView";
import BtnPrimary from "../components/BtnPrimary";
import GroupCard from "../components/GroupCard";
import useGroups from "../hooks/useGroups";
import { fonts } from "../styles/base";

export default function GroupsScreen() {
  const [groupsMember, setGroupsMember] = useState<Group[]>([]);
  const [groupsOwner, setGroupsOwner] = useState<Group[]>([]);
  const groupsAPI = useGroups();

  useEffect(() => {
    groupsAPI
      .getByOwner()
      .then((res) => {
        if (res.status == 400) return;
        setGroupsOwner(res);
      })
      .catch((err) => console.log("Error on get groups (Owner): ", err));

    groupsAPI
      .getByMembers()
      .then((res) => {
        if (res.status == 400) return;
        setGroupsMember(res);
      })
      .catch((err) => console.log("Error on get groups (Members): ", err));
  }, []);

  return (
    <BaseView
      activeNav
      img={{
        uri: "https://i.pinimg.com/564x/1d/66/8b/1d668b02c6a5e1bf7d452296cb14ab8f.jpg",
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={[fonts.h2]}>Grupos</Text>
        <BtnPrimary text="Criar grupo" icon="plus" onPress={() => {}} />
      </View>
      {groupsOwner.length == 0 && groupsMember.length == 0 && (
        <Text style={styles.sectionTitle}>Você não está em nenhum grupo</Text>
      )}
      {groupsOwner.length > 0 && (
        <Text style={styles.sectionTitle}>Grupos que você criou</Text>
      )}
      {groupsOwner.map((group) => (
        <GroupCard
          img={group.libraryBook.book.cover}
          author={group.owner}
          members={group.members.length + 1}
          name={group.libraryBook.book.title}
          key={group.id + group.libraryBook.book.title}
        />
      ))}
      {groupsMember.length > 0 && (
        <Text style={styles.sectionTitle}>Grupos que você participa</Text>
      )}
      {groupsMember.map((group) => (
        <GroupCard
          img={group.libraryBook.book.cover}
          author={group.owner}
          members={group.members.length + 1}
          name={group.libraryBook.book.title}
          key={group.id + group.libraryBook.book.title}
        />
      ))}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  sectionTitle: {
    ...fonts.h4,
    marginHorizontal: 16,
    marginBottom: 3,
    marginTop: 8,
  },
});
