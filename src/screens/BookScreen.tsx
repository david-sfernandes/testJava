import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import BackgroundImage from "../components/BackgroundGradient";
import Rating from "../components/Rating";
import { colors, fonts, spacing } from "../styles/base";

type Props = NativeStackScreenProps<NavigationProps, "Book">;

export default function BookScreen({ route }: Props) {
  const navigation = useNavigation();
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundImage img={{ uri: book.volumeInfo.imageLinks?.thumbnail }} />
      <ScrollView>
        <View style={styles.main}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text variant="headlineLarge" style={fonts.h1}>
                {book.volumeInfo.title}
              </Text>
              <Text variant="headlineSmall" style={fonts.h4}>
                {book.volumeInfo.authors[0]}
              </Text>
              <Rating />
            </View>
            <Icon name="heart" solid size={30} color={colors.red} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Button
              // @ts-ignore: suppress param type
              onPress={() => navigation.navigate("Annotations", { book })}
              mode="contained"
              icon="sticker-text"
              textColor="white"
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "white",
                flex: 1,
              }}
            >
              Anotações
            </Button>
            <Button
              // @ts-ignore: suppress param type
              onPress={() => navigation.navigate("AR")}
              mode="contained"
              icon="camera"
              textColor="black"
              style={{
                backgroundColor: "white",
                flex: 1,
              }}
            >
              Ver
            </Button>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={fonts.h3}>Descrição</Text>
          <Text style={fonts.default}>
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
});
