// Shows piano sceeen

import { Text, View } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Piano from "../components/Piano/Piano";

function PianoScreen() {
  const insets = useSafeAreaInsets();

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
        <Piano />
      </View>
    </Background>
  );
}

export default PianoScreen;
