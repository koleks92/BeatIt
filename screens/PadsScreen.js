// Shows pads/mpc sceeen

// Shows pads/mpc sceeen

import { View, Dimensions, StyleSheet } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Pads from "../components/Pads/Pads";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import TopOptions from "../components/UI/TopOptions";


const scrH = Dimensions.get("window").height;

function PadsScreen() {
    const insets = useSafeAreaInsets();
    const { padsFiles } = useContext(SoundsContext);

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
                <TopOptions mode="pads"/>
                    
                <Pads sounds={padsFiles} />
            </View>
        </Background>
    );
}

export default PadsScreen;

const styles = StyleSheet.create({

});
