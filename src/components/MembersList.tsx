import React from "react";
import BottomSheet from "./BottomSheet";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fonts } from "../styles/base";

type MembersListProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  members: String[];
};

export default function MembersList({
  isOpen,
  setOpen,
  members,
}: MembersListProps) {
  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={200}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Membros</Text>
        <View style={styles.divider} />
        <ScrollView style={{ width: "100%" }}>
          {members.length === 0 && (
            <Text style={styles.member}>Ainda não há membros</Text>
          )}
          {members.map((member, i) => (
            <Text key={`member-${i}`} style={styles.member}>
              {member}
            </Text>
          ))}
        </ScrollView>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  title: { ...fonts.h4, color: "#eeeeeecc" },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#eeeeee55",
    marginVertical: 10,
  },
  member: {
    ...fonts.default,
    color: "#eeeeeeaa",
    fontSize: 14,
    textAlign: "center",
  },
});
