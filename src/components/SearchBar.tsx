import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, dimensions, spacing } from "../styles/base";
import { useNavigation } from "@react-navigation/native";

export default function SearchBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color={colors.darkGray} />
        <TextInput
          placeholder="Pesquisar"
          style={styles.input}
          onSubmitEditing={({nativeEvent}) => {
            // @ts-ignore: suppress param type
            navigation.navigate("Search", { value: nativeEvent.text });
          }}
        />
      </View>
      <Icon name="barcode" size={20} color="white" style={styles.barcode} />
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
    marginHorizontal: spacing.md,
    width: dimensions.fullWidth - spacing.md * 2,
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
    paddingVertical: 6,
  },
  barcode: {
    marginLeft: spacing.sm,
  },
});
