import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import ThemeView from "@/presentation/shared/ThemeView";
import ThemeText from "@/presentation/shared/ThemeText";
import { allRoutes } from "@/constants/Routes";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
              }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
