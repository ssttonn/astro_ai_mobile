import LottieView from "lottie-react-native";
import React, { memo } from "react";
import { Text, View } from "react-native";
import MainButton from "../../../../components/common/MainButton";

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
      className={`flex size-full portrait:flex-col flex-row items-stretch justify-center gap-4 p-4 ${className}`}
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
      <View className="shrink-0 landscape:flex-1 flex-col landscape:p-4 p-4 flex justify-start landscape:justify-center items-center gap-4">
        <Text className="font-KelsonBold text-3xl text-center text-foreground">
          {title}
        </Text>
        <Text className="font-KelsonRegular text-lg opacity-55 text-center text-foreground">
          {description}
        </Text>
        <MainButton
          containerClassName="w-full"
          title={buttonTitle.toUpperCase()}
          onPress={onButtonClick}
        />
      </View>
    </View>
  );
};

export default memo(OnboardingSegment);
