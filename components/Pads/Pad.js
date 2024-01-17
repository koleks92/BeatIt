import { View, Text, Pressable, StyleSheet, Dimensions} from "react-native";
import { Colors } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";


const scrW = Dimensions.get("window").width;

function Pad({ onPress }) {
  return (
    <View style= {styles.padOuter}>
        <LinearGradient
        // Background Linear Gradient
        colors={[Colors.background, Colors.bar]}
        style={styles.root}
      >
      <Pressable onPress={onPress} 
      style = {({pressed}) => [{width: scrW * 0.3, height: scrW * 0.3}, styles.padInner]}>
        </Pressable>
        </LinearGradient>
    </View>
  );
}

export default Pad;

const styles = StyleSheet.create({
    padOuter: {
        margin: scrW * 0.01,
        borderRadius: 10,
        borderColor: Colors.accent ,
        borderWidth: 2,
        overflow: 'hidden',
    },
    padInner: {
        opacity: 0.0,
    }
})