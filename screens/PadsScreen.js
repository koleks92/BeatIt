// Shows pads/mpc sceeen

import { Text, View } from "react-native";
import Background from "../components/UI/Background";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Pads from "../components/Pads/Pads";
import { Audio } from  'expo-av';
import { useState, useEffect } from "react";


function PadsScreen({ route }) {
  const insets = useSafeAreaInsets();
  const { padsFiles } = route.params; // Load pads sounds files

  

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
        <Pads sounds = {padsFiles}/>
      </View>
    </Background>
  );
}

export default PadsScreen;
