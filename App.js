import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PadsScreen from "./screens/PadsScreen";
import PianoScreen from "./screens/PianoScreen";
import { Colors } from "./constants/colors";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bar }}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PADS") {
            iconName = focused
              ? require("./assets/icons/pads.png")
              : require("./assets/icons/pads.png");
          } else if (route.name === "PIANO") {
            iconName = focused
              ? require("./assets/icons/piano.png")
              : require("./assets/icons/piano.png");
          }

          return (
            <Image
              source={iconName}
              style={{ width: 42, height: 42, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: Colors.text,
        tabBarLabel: () => null, // Hide labels by returning null
        tabBarStyle: { backgroundColor: Colors.bar, height: 60 },
      })}
    >
      <Tab.Screen
        name="PADS"
        component={PadsScreen}
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
    </SafeAreaView>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Splash screen
  useEffect(() => {
    async function prepare() {
      try {
        console.log("SplashScreen");
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
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
