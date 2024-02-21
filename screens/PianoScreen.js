// Shows piano sceeen

import { View } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Piano from "../components/Piano/Piano";
import { PianoContext } from "../store/PianoContext";
import { useContext } from "react";



function PianoScreen() {
  const insets = useSafeAreaInsets();
  const pianoFiles = useContext(PianoContext);

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
        <Piano sounds={pianoFiles}/>
      </View>
    </Background>
  );
}

export default PianoScreen;
