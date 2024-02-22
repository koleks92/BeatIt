import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Colors } from "../../constants/colors";

// Dimensions in landscape mode !
// More comfortable for the user
const scrW = Dimensions.get("window").width;
whiteWidth = scrW * 0.8;
whiteHeight = whiteWidth * 0.25;

function White({ onBegin, onEnd, maxDuration = 10000, delay = 100 }) {
  const [isPressed, setPressed] = useState(false);
  const tapGesture = Gesture.Tap()
    .shouldCancelWhenOutside(false)
    .maxDuration(maxDuration)
    .onBegin(() => {
      setPressed(true);
      onBegin();
    })
    .onEnd(() => {
      setPressed(false);
      setTimeout(() => {
        // Delay to make sure that even with a very short tap, sound is played
        onEnd();
      }, delay);
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={tapGesture}>
        <View
          style={[styles.white, isPressed && styles.whiteOuterPressed]}
        ></View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default White;

const styles = StyleSheet.create({
  white: {
    height: whiteHeight,
    width: whiteWidth,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
  whiteOuterPressed: {
    opacity: 0.99,
    transform: [{ scale: 0.99 }],
  },
});
