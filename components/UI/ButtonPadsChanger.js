import { Pressable, StyleSheet, Dimensions, Image, View } from "react-native";

const scrW = Dimensions.get("window").width;

function ButtonPadsChanger({ iconSize, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image
                source={require("../../assets/icons/edit.png")}
                resizeMode="contain"
                style={[{ height: iconSize }, styles.imageStyling]}
            />
        </Pressable>
    );
}

export default ButtonPadsChanger;

const styles = StyleSheet.create({
    imageStyling: {
        maxWidth: "100%",
    },
});
