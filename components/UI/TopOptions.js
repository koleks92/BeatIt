import { View, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Metronome from "../Metronome/Metronome";
import ButtonPadsChanger from "./ButtonPadsChanger";
import Octaves from "../Octaves/Octaves";
import GoBack from "./GoBack";

const scrH = Dimensions.get("window").height;

function TopOptions({ mode }) {
    const iconSize = scrH * 0.04;
    const navigation = useNavigation();

    function changerPadHandler() {
        navigation.navigate("PadsChangerScreen");
    }

    function goBackHandler() {
        navigation.goBack();
    }

    if (mode === "pads") {
        return (
            <View style={styles.root}>
                <View style={styles.childrenContainer}>
                    <ButtonPadsChanger
                        iconSize={iconSize}
                        onPress={changerPadHandler}
                    />
                </View>
                <View style={styles.childrenContainer}>
                    <Metronome iconSize={iconSize} />
                </View>
            </View>
        );
    }

    if (mode === "piano") {
        return (
            <View style={styles.root}>
                <View style={styles.childrenContainer}>
                    <Octaves iconSize={iconSize} />
                </View>
                <View style={styles.childrenContainer}>
                    <Metronome iconSize={iconSize} />
                </View>
            </View>
        );
    }

    if (mode === "changer") {
        return (
            <View style={styles.root}>
                <GoBack iconSize={iconSize * 2} onPress={goBackHandler} />
            </View>
        );
    }
}

export default TopOptions;

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    childrenContainer: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
});
