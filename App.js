import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Dimensions, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PadsScreen from "./screens/PadsScreen";
import PianoScreen from "./screens/PianoScreen";
import { Colors } from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SoundsContextProvider from "./store/SoundsContex";

const Tab = createBottomTabNavigator();
const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height;

function Tabs() {
    return (
        <Tab.Navigator
        
            screenOptions={({ route }) => ({
                lazy: false, 
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
                    height: Platform.OS === "ios" ? scrH * 0.1 : scrH * 0.07,
                    borderTopWidth: 0,
                },
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
    );
}

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
          try {
              await new Promise((resolve) => setTimeout(resolve, 2000));
          } catch (e) {
              console.warn(e);
          } finally {
              setAppIsReady(true);
          }
      }
      prepare();
  }, []);

  useEffect(() => {
      async function hideSplashScreen() {
          if (appIsReady) {
              await SplashScreen.hideAsync();
          }
      }
      hideSplashScreen();
  }, [appIsReady]);

  if (!appIsReady) {
      return null;
  }

    return (
            <SoundsContextProvider>
                <StatusBar style="dark" />
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Tabs />
                    </NavigationContainer>
                </SafeAreaProvider>
            </SoundsContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
