import { View, Text, Pressable, StyleSheet, Dimensions} from "react-native";

const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height;

function Pad({ onPress }) {
  return (
    <View style={styles.padOuter}>
      <Pressable onPress={onPress} 
      style = {({pressed}) => [{width: scrW * 0.3, height: scrW * 0.3}, styles.padInner]}>
        </Pressable>
    </View>
  );
}

export default Pad;

const styles = StyleSheet.create({
    padOuter: {
        margin: scrW * 0.01,
        borderRadius: 10,
        overflow: 'hidden'
    },
    padInner: {
        backgroundColor: "#cccccc"
    }
})