import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { colors, fonts, spacing } from "../styles/base";
import BackgroundImage from "../components/BackgroundGradient";
import { useNavigation } from "@react-navigation/native";
import Rating from "../components/Rating";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function BookScreen() {
  const img = require("../assets/hobbit.jpg");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundImage img={img} />
      <ScrollView>
        <View style={styles.main}>
          <View style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <View style={{flex: 1}}>
              <Text variant="headlineLarge" style={fonts.h1}>
                Hobbit
              </Text>
              <Text variant="headlineSmall" style={fonts.h4}>
                J. R. R. Tolkien
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
              onPress={() => navigation.navigate("PictureFrom")}
              mode="contained"
              icon="plus"
              textColor="white"
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "white",
                flex: 1,
              }}
            >
              Adicionar
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
            Debool zaroo yib fergoob bum discufa badeesh flooz grauw wona nono
            apper zerpa. Woohoo wut dowl fleebs zorknu grobe krem squib grobel
            maboo snanna gork yibsy aut. Ne kweb oosh renato dwam flooz hopple
            bloo yib fro nooboo. Zaebeltooty euranka caba choba gork noop aut
            nib neib garsha chibna maboo wut fro. Neeba abanoop kowlenin swaybul
            whippna hooba myshuno.
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
          </Text>
          <Text style={fonts.default}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            repellat? Nesciunt earum autem voluptatum accusantium. Corrupti
            reiciendis, soluta esse, velit minima id suscipit mollitia omnis
            veniam in sit inventore animi!
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
