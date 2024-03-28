// Pads changer screen

// Shows pads/mpc sceeen

import { View, Dimensions } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Pads from "../components/Pads/Pads";
import { useContext } from "react";
import { SoundsContext } from "../store/SoundsContex";
import TopOptions from "../components/UI/TopOptions";
import ButtonClose from "../components/UI/ButtonClose";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/UI/GoBack";


const scrH = Dimensions.get("window").height;

function PadsChangerScreen() {
    const insets = useSafeAreaInsets();
    const { padsFiles } = useContext(SoundsContext);
    const navigation = useNavigation();

    const iconSize = scrH * 0.06;

    function onPress() {
        navigation.goBack();
    };

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
                    <GoBack iconSize={iconSize} onPress={onPress}/>
                </TopOptions>
                <Pads changer={true} sounds={padsFiles} />
            </View>
        </Background>
    );
}

export default PadsChangerScreen;
