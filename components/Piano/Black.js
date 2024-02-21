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
blackWidth = scrW * 0.5;
blackHeight = scrW * 0.8 * 0.25 / 2;

function Black({ onBegin, onEnd, maxDuration = 10000 }) {
  const [isPressed, setPressed] = useState(false);
  const tapGesture = Gesture.Tap()
    .maxDuration(maxDuration)
    .onBegin(() => {
      setPressed(true);
      onBegin();
    })
    .onEnd(() => {
      setPressed(false);
      onEnd();
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={tapGesture}>
        <View
          style={[styles.black, isPressed && styles.blackOuterPressed]}
        ></View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default Black;

const styles = StyleSheet.create({
  black: {
    height: blackHeight,
    width: blackWidth,
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 4,
  },
  blackOuterPressed: {
    opacity: 0.99,
    transform: [{ scale: 0.99 }]
  },
});
