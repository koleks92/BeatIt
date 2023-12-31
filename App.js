import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import PadsScreen from "./screens/PadsScreen";
import PianoScreen from "./screens/PianoScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PadsScreen} />
      <Tab.Screen name="Settings" component={PianoScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Splash screen
  useEffect(() => {
    async function prepare() {
      try {
        console.log("SplashScreen")
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
    <PaperProvider>
    <NavigationContainer>
      <MyTabs />
</NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
