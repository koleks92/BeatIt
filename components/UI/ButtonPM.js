import { Pressable, Dimensions, Text, StyleSheet} from "react-native";
import { Colors } from "../../constants/colors";

const scrW = Dimensions.get("window").width;

function ButtonPM({ children, onPressIn, onPressOut }) {
    return (
        <Pressable style={styles.button} onPressIn={onPressIn} onPressOut={onPressOut} >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    )
};

export default ButtonPM;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: scrW * 0.03,
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.text2,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: "600",
        fontSize: scrW * 0.04,
    }
});