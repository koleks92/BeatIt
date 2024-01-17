// Shows pads/mpc sceeen

import { Text, View } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function PadsScreen() {
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
        <Text>Pads</Text>
      </View>
    </Background>
  );
}

export default PadsScreen;
