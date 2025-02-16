import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" />
    </Stack>
  );
};

export default OnboardingLayout;
