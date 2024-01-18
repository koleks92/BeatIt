import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const scrW = Dimensions.get("window").width;

function Pad({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.padOuter,
        pressed ? styles.padOuterPressed : null,
      ]}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.background, Colors.bar]}
        style={styles.root}
      >
        <View style={styles.padInner}></View>
      </LinearGradient>
    </Pressable>
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
