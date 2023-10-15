import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { fonts } from "../styles/base";

export default function BookMainInfo({ book }: { book: Book }) {
  return (
    <View style={{ flex: 1 }}>
      <Text variant="headlineLarge" style={fonts.h1}>
        {book.volumeInfo.title}
      </Text>
      {book.volumeInfo.subtitle && (
        <Text style={[fonts.h4, styles.subtitle]}>
          {book.volumeInfo.subtitle}
        </Text>
      )}
      <View style={styles.middleInfo}>
        <Text variant="headlineSmall" style={[fonts.h4, { flex: 1 }]}>
          {book.volumeInfo.authors[0]}
        </Text>
        <Text style={[fonts.default, styles.subtitle]} variant="bodySmall">
          pgs. {book.volumeInfo.pageCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: { color: "#ffffffaa", fontWeight: "normal", marginTop: 10 },
  middleInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
