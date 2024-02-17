import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PadsScreen from "./screens/PadsScreen";
import PianoScreen from "./screens/PianoScreen";
import { Colors } from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Audio } from 'expo-av'; 

const Tab = createBottomTabNavigator();
const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height;
const NUM_PADS = 15;
const padsFiles = Array.from({ length: NUM_PADS }, (_, index) => new Audio.Sound());

async function loadAudioFiles() {
  try {

    await padsFiles[0].loadAsync(require('./sounds/pads/bass_1.mp3'))
    await padsFiles[1].loadAsync(require('./sounds/pads/bass_2.mp3'))
    await padsFiles[2].loadAsync(require('./sounds/pads/bass_3.mp3'))
    await padsFiles[3].loadAsync(require('./sounds/pads/clap_1.mp3'))
    await padsFiles[4].loadAsync(require('./sounds/pads/clap_2.mp3'))
    await padsFiles[5].loadAsync(require('./sounds/pads/clap_3.mp3'))
    await padsFiles[6].loadAsync(require('./sounds/pads/hihat_1.mp3'))
    await padsFiles[7].loadAsync(require('./sounds/pads/hihat_2.mp3'))
    await padsFiles[8].loadAsync(require('./sounds/pads/hihat_3.mp3'))
    await padsFiles[9].loadAsync(require('./sounds/pads/kick_1.mp3'))
    await padsFiles[10].loadAsync(require('./sounds/pads/kick_2.mp3'))
    await padsFiles[11].loadAsync(require('./sounds/pads/kick_3.mp3'))
    await padsFiles[12].loadAsync(require('./sounds/pads/snare_1.mp3'))
    await padsFiles[13].loadAsync(require('./sounds/pads/snare_1.mp3'))
    await padsFiles[14].loadAsync(require('./sounds/pads/snare_1.mp3'))

    console.log("Sucessfull sounds loading!")
  } catch (error) {
    console.error('Error loading', error)
  }
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "PADS") {
            iconName = require("./assets/icons/pads.png");
          } else if (route.name === "PIANO") {
            iconName = require("./assets/icons/piano.png");
          }

          return (
            <Image
              source={iconName}
              style={{
                width: scrH * 0.05,
                height: scrH * 0.05,
                tintColor: color,
              }}
            />
          );
        },
        tabBarActiveTintColor: Colors.text,
        tabBarActiveBackgroundColor: Colors.background,
        tabBarLabel: () => null, // Hide labels by returning null
        tabBarStyle: {
          backgroundColor: Colors.bar,
          height: scrH * 0.07,
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="PADS"
        component={PadsScreen}
        initialParams={{ padsFiles }}
        options={{
          headerShown: false, // Hide the top label for this screen
        }}
      />
      <Tab.Screen
        name="PIANO"
        component={PianoScreen}
        options={{
          headerShown: false, // Hide the top label for this screen
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Splash screen
  useEffect(() => {
    async function prepare() {
      try {
        loadAudioFiles();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
