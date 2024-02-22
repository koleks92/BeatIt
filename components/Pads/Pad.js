import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Colors } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const scrW = Dimensions.get("window").width;

function Pad({ onBegin, onEnd, maxDuration = 10000 }) {
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
      onEnd();
    });

    return (
      <GestureHandlerRootView>
        <GestureDetector gesture={tapGesture}>
          <View style={[
        styles.padOuter, isPressed && styles.padOuterPressed]}>
            <LinearGradient
        // Background Linear Gradient
        colors={[Colors.background, Colors.bar]}
      >
        <View style={styles.padInner}></View>
      </LinearGradient>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    );
  
  
}

export default Pad;

const styles = StyleSheet.create({
  padOuter: {
    margin: scrW * 0.01,
    borderRadius: 10,
    borderColor: Colors.accent,
    borderWidth: 2,
    overflow: "hidden",
    width: scrW * 0.3,
    height: scrW * 0.3,
    elevation: 5,
  },
  padOuterPressed: {
    borderColor: Colors.accent2,
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  padInner: {
    width: scrW * 0.3,
    height: scrW * 0.3,
  },
  padInnerPressed: {
    opacity: 1,
  },
});
