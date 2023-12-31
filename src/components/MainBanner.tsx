import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useUserStore } from "../store/userStore";
import { colors, dimensions, fonts, sizing, spacing } from "../styles/base";
import useLibrary from "../hooks/useLibrary";

export default function MainBanner() {
  const { displayName } = useUserStore();
  const library = useLibrary();

  const [read, setRead] = useState(0);
  const [reading, setReading] = useState(0);
  const [wantToRead, setWantToRead] = useState(0);

  useEffect(() => {
    library.getBooks().then((books) => {
      setRead(books.filter((book) => book.status === "READED").length);
      setReading(books.filter((book) => book.status === "READING").length);
      setWantToRead(
        books.filter((book) => book.status === "WANT_TO_READ").length
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/01/gradient-grainy-texture_23-2148976749-e1656080022483.jpg?fit=626%2C417&ssl=1",
        }}
        imageStyle={{ borderRadius: 20 }}
      >
        <Shadow
          style={styles.shadow}
          startColor="rgba(0, 0, 0, 0.2)"
          distance={6}
        >
          <View style={styles.contentBox}>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                ...fonts.h1,
              }}
            >
              Olá, {displayName.split(" ")[0]}
            </Text>
            <View style={styles.statBox}>
              <Stat title="Lidos" value={read.toString()} />
              <Stat title="Lendo" value={reading.toString()} />
              <Stat title="Quero ler" value={wantToRead.toString()} />
            </View>
          </View>
        </Shadow>
      </ImageBackground>
    </View>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={{ ...fonts.small, textAlign: "center" }}>{title}</Text>
      <Text style={{ ...fonts.h1, textAlign: "center" }}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    width: dimensions.fullWidth - 2 * spacing.md,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  shadow: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    tintColor: "#f10d0d",
  },
  statBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: spacing.xs,
    width: "100%",
    flex: 1,
  },
  stat: {
    textAlign: "center",
    width: "auto",
    flex: 1,
  },
});
