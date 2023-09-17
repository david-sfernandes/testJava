import React from "react";
import { Pressable, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { colors } from "../styles/base";
import Rating from "./Rating";

const HEIGHT = 260;
const OVERDRAG = -20;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function BottomSheet({ isOpen, setOpen, children }) {
  const offset = useSharedValue(0);
  const toggleSheet = () => {
    setOpen(!isOpen);
    offset.value = 0;
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;

      const clamp = Math.max(OVERDRAG, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(HEIGHT, {}, () => {
          runOnJS(toggleSheet)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <>
      <AnimatedPressable
        style={styles.backdrop}
        entering={FadeIn}
        exiting={FadeOut}
        onPress={toggleSheet}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, translateY]}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    zIndex: 1,
    padding: 16,
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.darkGray,

    height: HEIGHT,
    bottom: OVERDRAG * 1.1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000088",
    zIndex: 1,
  },
});
