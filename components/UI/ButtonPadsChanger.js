import { Pressable, StyleSheet, Dimensions, Image } from "react-native";

const scrW = Dimensions.get("window").width;

function ButtonPadsChanger({ iconSize, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image
                source={require("../../assets/icons/edit.png")}
                resizeMode="contain"
                style={{ height: iconSize }}
            />
        </Pressable>
    );
}

export default ButtonPadsChanger;
