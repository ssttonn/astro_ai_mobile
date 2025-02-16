import Assets from "@/constants/assets";
import LottieView from "lottie-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const AuthScreen = () => {
  return (
    <SafeAreaView className="size-screen bg-background flex-col landscape:flex-row-reverse flex overflow-hidden landscape:justify-normal justify-center">
      <View className="landscape:flex-1 w-[50%] aspect-square landscape:self-stretch self-center rounded-common bg-backgroundLight m-6 landscape:ml-0">
        <LottieView
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
          source={Assets.animations.LogoAnimation}
          autoPlay
          loop
        />
      </View>
      <View className="landscape:flex-1 landscape:items-center landscape:shrink-0">
        <ScrollView horizontal pagingEnabled className="w-full">
          <View className="shrink-0 w-screen bg-yellow-100 items-center landscape:justify-center flex">
            <RegisterForm />
          </View>

          <View className="shrink-0 w-screen bg-blue-100 items-center landscape:justify-center flex">
            <LoginForm />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
