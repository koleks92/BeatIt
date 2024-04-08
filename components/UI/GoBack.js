import { Pressable, StyleSheet, Image } from "react-native";


function GoBack({iconSize, onPress}) {

    return (
        <Pressable onPress={onPress} style={styles.iconContainer}>
            <Image
                source={require("../../assets/icons/goback.png")}
                resizeMode="contain"
                style={{ height: iconSize }}
            />
        </Pressable>
    );
}

export default GoBack;

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});
