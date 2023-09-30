import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import BackgroundImage from "../components/BackgroundGradient";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import { colors, fonts, spacing } from "../styles/base";
import GoBack from "../components/GoBack";

type Props = NativeStackScreenProps<NavigationProps, "Book">;

export default function BookScreen({ route }: Props) {
  const navigation = useNavigation();
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundImage img={{ uri: book.volumeInfo.imageLinks?.thumbnail }} />
      <ScrollView>
        <GoBack />
        <View style={styles.main}>
          <View style={styles.container}>
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
                <Text
                  style={[fonts.default, styles.subtitle]}
                  variant="bodySmall"
                >
                  pgs. {book.volumeInfo.pageCount}
                </Text>
              </View>
            </View>
            <Icon name="heart" solid size={30} color={colors.red} />
          </View>
          <View style={styles.btnBox}>
            <SecondaryBtn
              text="Anotaçôes"
              icon="sticker-text"
              // @ts-ignore: suppress param type
              onPress={() => navigation.navigate("Annotations", { book })}
            />
            <PrimaryBtn
              text="Ver"
              icon="camera"
              // @ts-ignore: suppress param type
              onPress={() => navigation.navigate("AR")}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[fonts.h3, styles.description]}>Descrição</Text>
          <Text style={fonts.default} variant="bodySmall">
            {book.volumeInfo.description || "Descrição não está disponível"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    position: "relative",
    backgroundColor: colors.black,
  },
  main: {
    marginTop: 120,
    paddingHorizontal: spacing.lg,
  },
  descriptionContainer: {
    paddingHorizontal: spacing.lg,
    marginBottom: 30,
  },
  btnBox: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    marginTop: spacing.sm,
  },
  description: { marginTop: spacing.md, marginBottom: spacing.xs },
  subtitle: { color: "#ffffffaa", fontWeight: "normal", marginTop: 10 },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  middleInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  goBack: {
    position: "absolute",
    top: 45,
    left: spacing.lg,
  },
});
