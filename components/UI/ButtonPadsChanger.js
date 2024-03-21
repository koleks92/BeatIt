import { Pressable, StyleSheet, Dimensions, Image } from "react-native";
import { Colors } from "../../constants/colors";

const scrW = Dimensions.get("window").width;

function ButtonPadsChanger({iconSize, onPress}) {

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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    metronomeContainer: {
        marginHorizontal: scrW * 0.1,
        marginVertical: scrW * 0.6,
        backgroundColor: Colors.bar,
        color: "white",
        borderRadius: 20,
        padding: scrW * 0.05,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        color: Colors.text2,
        fontSize: scrW * 0.07,
    },
    text: {
        color: Colors.text2,
        fontSize: scrW * 0.06,
    },
    bpmView: {
        justifyContent: "center",
        alignItems: "center",
        margin: scrW * 0.05,
        width: scrW * 0.12,
    },
    buttons: {
        flexDirection: "row",
        flex: 1,
    },
    buttonOn: {
        borderWidth: 3,
        borderColor: Colors.accent2,
    },
    buttonView: {
        flex: 1,
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});
