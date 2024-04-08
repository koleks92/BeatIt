// Shows piano sceeen

import { View, StyleSheet } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Piano from "../components/Piano/Piano";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import TopOptions from "../components/UI/TopOptions";


function PianoScreen() {
    const insets = useSafeAreaInsets();
    const { pianoFiles } = useContext(SoundsContext);

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
                <TopOptions mode="piano" />
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
});
