import { useRef } from "react";
import { Animated, Easing, View } from "react-native";

import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemeView from "@/presentation/shared/ThemeView";
import { useAnimation } from "@/hooks/useAnimation";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemeView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity, //animatedOpacity
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />

      <ThemeButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700,
          });
        }}
      >
        FadeIn
      </ThemeButton>

      <ThemeButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
