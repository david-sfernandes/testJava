import React from "react";
import BaseView from "../components/BaseView";
import { StyleSheet, Text, View } from "react-native";
import GroupCard from "../components/GroupCard";
import { fonts } from "../styles/base";
import PrimaryBtn from "../components/PrimaryBtn";

export default function GroupsScreen() {
  return (
    <BaseView
      activeNav
      img={{
        uri: "https://i.pinimg.com/564x/1d/66/8b/1d668b02c6a5e1bf7d452296cb14ab8f.jpg",
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={[fonts.h2]}>Grupos</Text>
        <PrimaryBtn text="Criar grupo" icon="plus" />
      </View>
      <GroupCard img="https://www.liveborders.org.uk/wp-content/uploads/2019/02/Reading-group-e1677601344349.jpg"/>
      <GroupCard img="https://suaescolaideal.com.br/blog/wp-content/uploads/2021/03/Conhe%C3%A7a-as-vantagens-de-estudar-em-grupo.jpg"/>
      <GroupCard img="https://www.liveborders.org.uk/wp-content/uploads/2019/02/Reading-group-e1677601344349.jpg"/>
      <GroupCard img="https://suaescolaideal.com.br/blog/wp-content/uploads/2021/03/Conhe%C3%A7a-as-vantagens-de-estudar-em-grupo.jpg"/>
      <GroupCard img="https://www.liveborders.org.uk/wp-content/uploads/2019/02/Reading-group-e1677601344349.jpg"/>
      <GroupCard img="https://suaescolaideal.com.br/blog/wp-content/uploads/2021/03/Conhe%C3%A7a-as-vantagens-de-estudar-em-grupo.jpg"/>
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
});
