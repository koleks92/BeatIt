import { Pressable, StyleSheet, Dimensions, Image } from "react-native";

const scrW = Dimensions.get("window").width;

function ButtonPadsChanger({ iconSize, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.iconContainer}>
            <Image
                source={require("../../assets/icons/edit.png")}
                resizeMode="contain"
                style={{ height: iconSize }}
            />
        </Pressable>
    );
}

export default ButtonPadsChanger;

const styles = StyleSheet.create({

});
