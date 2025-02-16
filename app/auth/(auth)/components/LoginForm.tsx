import React from "react";
import { Text, View } from "react-native";

const LoginForm = () => {
  return (
    <View className="w-[85%] flex flex-col lg:gap-4 gap-3">
      <Text className="font-KelsonExtraBold text-3xl lg:text-5xl uppercase text-center text-foreground">
        Login
      </Text>
      <Text className="font-KelsonRegular text-md landscape:text-lg opacity-55 text-center text-foreground">
        Welcome back! Login to your account to continue your journey.
      </Text>
    </View>
  );
};

export default LoginForm;
