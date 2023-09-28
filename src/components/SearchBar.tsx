import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, dimensions, spacing } from "../styles/base";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color={colors.darkGray} />
        <TextInput placeholder="Pesquisar" style={styles.input}/>
      </View>
      <Icon name="barcode" size={20} color="white" style={styles.barcode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginVertical: spacing.xs,
    marginHorizontal: spacing.lg,
    width: dimensions.fullWidth - spacing.lg * 2,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: spacing.xs,
    borderColor: colors.semiTransparent,
  },
  input: {
    flex: 1,
    marginLeft: spacing.xs,
  },
  magnify: {
    width: 25,
    height: 25,
  },
  barcode: {
    marginLeft: spacing.sm,
  },
});
