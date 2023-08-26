import Icon from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, Pressable } from "react-native";
import { colors, spacing } from "../styles/base";
import { useState } from "react";

export default function Rating() {
  const starSize = 16;
  const [rate, setRate] = useState(0);

  const updateRate = (rateVal: number) => {};
  const stars = new Array(5).fill(0);

  return (
    <View style={styles.ratingContainer}>
      {stars.map((_, i) =>
        rate >= i + 1 ? (
          <Pressable onPress={() => setRate(i + 1)} key={"star" + i}>
            <Icon name="star" solid size={starSize} color={colors.yellow} />
          </Pressable>
        ) : (
          <Pressable onPress={() => setRate(i + 1)} key={"star" + i}>
            <Icon name="star" size={starSize} color={colors.gray} />
          </Pressable>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    marginVertical: spacing.sm,
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
});
