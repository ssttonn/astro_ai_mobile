import OnboardingSegment, {
  OnboardingSegmentProps,
} from "@/app/auth/(onboarding)/components/OnboardingSegment";
import Assets from "@/constants/assets";
import ScreenRoutes from "@/constants/screenRoutes";
import { router } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ScrollView, useWindowDimensions } from "react-native";
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

  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const window = useWindowDimensions();

  useEffect(() => {
    if (currentPage < onboardingData.length) {
      scrollRef.current?.scrollTo({
        x: currentPage * window.width,
        animated: true,
      });
    }
  }, [currentPage, onboardingData.length, scrollRef, window.width]);

  const onNext = useCallback(() => {
    if (currentPage === onboardingData.length - 1) {
      router.replace(ScreenRoutes.Auth);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, onboardingData.length, setCurrentPage]);

  return (
    <SafeAreaView>
      <ScrollView
        ref={scrollRef}
        className="size-full overflow-hidden"
        scrollEnabled={false}
        horizontal
        pagingEnabled
      >
        {onboardingData.map((data) => {
          return (
            <OnboardingSegment
              key={data.id}
              {...data}
              className="shrink-0 w-screen"
              onButtonClick={onNext}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
