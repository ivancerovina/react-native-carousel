import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarouselButtonsProps } from "../types/carousel-types";

function CarouselButtons({
  scrolling,
  scrollViewRef,
  x,
  width,
  buttonStyle,
  leftButtonContent,
  rightButtonContent,
}: CarouselButtonsProps) {
  const scrollToNext = () => {
    if (scrolling) return;

    scrollViewRef.current?.scrollTo({
      x: Math.round(x.value / width) * width + width,
      animated: true,
    });
  };

  const scrollToPrevious = () => {
    if (scrolling) return;

    scrollViewRef.current?.scrollTo({
      x: Math.round(x.value / width) * width - width,
      animated: true,
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={scrollToPrevious}
        style={[styles.left, buttonStyle]}
      >
        {leftButtonContent ?? <Text>←</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={scrollToNext}
        style={[styles.right, buttonStyle]}
      >
        {rightButtonContent ?? <Text>→</Text>}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  left: {
    position: "absolute",
    left: 0,
    top: "500%",
  },

  right: {
    position: "absolute",
    right: 0,
    zIndex: 5,
    top: "50%",
  },
});

export default CarouselButtons;
