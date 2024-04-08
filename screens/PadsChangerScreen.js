// Pads changer screen

// Shows pads/mpc sceeen

import { View } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Pads from "../components/Pads/Pads";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import TopOptions from "../components/UI/TopOptions";




function PadsChangerScreen() {
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
                <TopOptions mode="changer" />
                <Pads changer={true} sounds={padsFiles} />
            </View>
        </Background>
    );
}

export default PadsChangerScreen;
