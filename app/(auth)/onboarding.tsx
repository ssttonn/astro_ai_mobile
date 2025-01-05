import OnboardingSegment, {
  OnboardingSegmentProps,
} from "@/components/auth/OnboardingSegment";
import Assets from "@/constants/assets";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const onboardingData = useMemo<OnboardingSegmentProps[]>(
    () => [
      {
        id: "onboarding-0",
        animationData: Assets.animations.AI1Animation,
        title: "Welcome to the Future",
        description:
          "Experience the power of AI-driven solutions designed to simplify your world.",
        buttonTitle: "Next",
      },
      {
        id: "onboarding-1",
        animationData: Assets.animations.AI2Animation,
        title: "Powered by Intelligence",
        description:
          "Tap into cutting-edge AI technology to enhance your productivity and decision-making.",
        buttonTitle: "Next",
      },
      {
        id: "onboarding-2",
        animationData: Assets.animations.AI3Animation,
        title: "Your AI Assistant Awaits",
        description:
          "Let advanced algorithms work for you—delivering personalized insights and assistance.",
        buttonTitle: "Get Started",
      },
    ],
    []
  );

  return (
    <SafeAreaView className="flex-1 flex flex-row bg-background justify-center items-center gap-4 p-4">
      <OnboardingSegment
        key={onboardingData[0].id}
        {...onboardingData[0]}
        className="shrink-0"
        onButtonClick={() => {}}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
