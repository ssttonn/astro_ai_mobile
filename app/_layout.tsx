import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    KelsonBold: require("../assets/fonts/Kelson-Bold.otf"),
    KelsonRegular: require("../assets/fonts/Kelson-Regular.otf"),
    KelsonLight: require("../assets/fonts/Kelson-Light.otf"),
    KelsonExtraBold: require("../assets/fonts/Kelson-ExtraBold.otf"),
    KelsonExtraLight: require("../assets/fonts/Kelson-ExtraLight.otf"),
    KelsomMedium: require("../assets/fonts/Kelson-Medium.otf"),
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="auth/(onboarding)"
      >
        <Stack.Screen name="auth/(onboarding)" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
