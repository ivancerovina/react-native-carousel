import { StyleSheet, View } from "react-native";
import { CarouselPaginationProps, DotProps } from "../types/carousel-types";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

function CarouselPagination({ data, x, size, color }: CarouselPaginationProps) {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        return <Dot key={i} x={x} index={i} size={size} color={color} />;
      })}
    </View>
  );
}

function Dot({ x, index, size, color }: DotProps) {
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [(index - 1) * size, index * size, (index + 1) * size],
      [10, 20, 10],
      Extrapolation.CLAMP
    );
    const opacityAnimation = interpolate(
      x.value,
      [(index - 1) * size, index * size, (index + 1) * size],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  return (
    <Animated.View
      style={[
        styles.dots,
        animatedDotStyle,
        { backgroundColor: color ?? "grey" },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  dots: {
    height: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

export default CarouselPagination;
