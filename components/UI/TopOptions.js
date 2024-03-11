import { View, StyleSheet, Dimensions } from "react-native";
import Metronome from "../Metronome/Metronome";

const scrH = Dimensions.get("window").height;

function TopOptions({ children }) {
    const iconSize = scrH * 0.04;

    return <View style={styles.root}>{children}</View>;
}

export default TopOptions;

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: scrH * 0.01,
        maxHeight: scrH * 0.05,
    },
});
