import React from "react";
import { Text, View } from "react-native";

const RegisterForm = () => {
  return (
    <View className="w-[85%] flex flex-col lg:gap-4 gap-3">
      <Text className="font-KelsonExtraBold text-3xl lg:text-5xl uppercase text-center text-foreground">
        Register
      </Text>
      <Text className="font-KelsonRegular text-md landscape:text-lg opacity-55 text-center text-foreground">
        Welcome to AstroAI - Let&apos;s get you started on your journey to the
        future.
      </Text>
    </View>
  );
};

export default RegisterForm;
