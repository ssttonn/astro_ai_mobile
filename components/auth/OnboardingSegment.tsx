import LottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";
import MainButton from "../common/MainButton";

export interface OnboardingSegmentProps {
  id?: string;
  className?: string;
  animationData: any;
  title: string;
  description: string;
  buttonTitle: string;
  onButtonClick?: () => void;
}
const OnboardingSegment = ({
  id,
  className,
  animationData,
  title,
  description,
  buttonTitle,
  onButtonClick,
}: OnboardingSegmentProps) => {
  return (
    <View
      id={id}
      className={`size-full portrait:flex-row flex-col items-stretch justify-center gap-4 p-4 ${className}`}
    >
      <View className="flex-1 bg-backgroundLight rounded-common p-4">
        <LottieView
          key={id + "lottie"}
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
          source={animationData}
          autoPlay
          loop
        />
      </View>
      <View className="shrink-0 portrait:flex-1 flex-col lg:p-4 p-4 flex justify-start portrait:justify-center items-center gap-4">
        <Text className="font-KelsonBold text-3xl text-center">{title}</Text>
        <Text className="font-KelsonRegular text-lg opacity-55 text-center">
          {description}
        </Text>
        <MainButton
          containerClassName="w-full mt-4"
          title={buttonTitle.toUpperCase()}
          onPress={onButtonClick}
        />
      </View>
    </View>
  );
};

export default OnboardingSegment;
