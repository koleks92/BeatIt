// Shows pads/mpc sceeen

// Shows pads/mpc sceeen

import { View, Dimensions, StyleSheet } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Pads from "../components/Pads/Pads";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import TopOptions from "../components/UI/TopOptions";
import Metronome from "../components/Metronome/Metronome";
import PadsChanger from "../components/UI/ButtonPadsChanger";
import { useNavigation } from "@react-navigation/native";

const scrH = Dimensions.get("window").height;

function PadsScreen() {
    const insets = useSafeAreaInsets();
    const { padsFiles } = useContext(SoundsContext);
    const navigation = useNavigation();

    const iconSize = scrH * 0.04;

    function onPress() {
        navigation.navigate("PadsChangerScreen");
    }

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
                        <PadsChanger iconSize={iconSize} onPress={onPress} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Metronome iconSize={iconSize} />
                    </View>
                </TopOptions>
                <Pads sounds={padsFiles} />
            </View>
        </Background>
    );
}

export default PadsScreen;

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
})
