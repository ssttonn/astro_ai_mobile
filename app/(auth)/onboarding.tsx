import { Button, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appearance } from "react-native";
import Lottie from "lottie-react-native";
import Assets from "@/constants/assets";

const OnboardingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center gap-4 p-4 lg:flex-row flex-col">
      <View className="flex-1 bg-backgroundLight rounded-common p-4">
        <Lottie
          style={{ width: "100%", aspectRatio: 1, alignSelf: "center" }}
          source={Assets.animations.AI1Animation}
          autoPlay
          loop
        />
      </View>
      <View className="flex-1 flex-col p-4">
        <Text className="font-KelsonBold text-3xl text-center">
          Welcome to the Future
        </Text>
        <Text className="font-KelsonRegular text-lg opacity-55 text-center">
          Experience the power of AI-driven solutions designed to simplify your
          world.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
