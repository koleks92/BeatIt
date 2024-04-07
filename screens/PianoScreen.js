// Shows piano sceeen

import { View, Dimensions, StyleSheet } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Piano from "../components/Piano/Piano";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import Metronome from "../components/Metronome/Metronome";
import TopOptions from "../components/UI/TopOptions";
import Octaves from "../components/Octaves/Octaves";

const scrH = Dimensions.get("window").height;

function PianoScreen() {
    const insets = useSafeAreaInsets();
    const { pianoFiles } = useContext(SoundsContext);

    const iconSize = scrH * 0.04;

    return (
        <Background>
            <View
                style={{
                    flex: 1,
                    // Paddings to handle safe area
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }}
            >
                <TopOptions>
                    <View style={styles.iconContainer}>
                        <Octaves iconSize={iconSize} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Metronome iconSize={iconSize} />
                    </View>
                </TopOptions>
                <Piano sounds={pianoFiles} />
            </View>
        </Background>
    );
}

export default PianoScreen;

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
})
