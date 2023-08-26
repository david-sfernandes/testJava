import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet } from "react-native";

export default function Book({ cover }: { cover: string }) {
  const navigation = useNavigation();
  return (
    <Pressable
    onPress={() => {
        console.log("a")
        // @ts-ignore: suppress param type
        navigation.navigate("Book")
      }}
      style={styles.bookContainer}
    >
      <Image
        source={{ uri: `https://covers.openlibrary.org/b/olid/${cover}-M.jpg` }}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 100,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
