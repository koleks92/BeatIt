import { ImageBackground, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function Background({ children }) {
  return (
    <View style={styles.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.background, Colors.bar]}
        style={styles.root}
      >
        <ImageBackground
          source={require("../../assets/background.jpg")}
          resizeMode="cover"
          style={styles.root}
          imageStyle={styles.backgroundImage}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

export default Background;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.2,
  },
});
