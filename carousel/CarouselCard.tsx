import { StyleSheet, View } from "react-native";
import { CarouselElementProps } from "../types/carousel-types";
import Animated, { useAnimatedStyle, interpolate } from "react-native-reanimated";

function CarouselCard({children, style = {}, width, index, x}: CarouselElementProps) {
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
          x.value,
          [(index - 2) * width, (index - 1) * width, index * width],
          [0.8, 1, 0.8],
        );
        return {
          transform: [{scale}],
        };
      });

      
    return <View style={[{width: width}]}>
        <Animated.View style={[animatedStyle, style]}>
            {children}
        </Animated.View>
    </View>
}

export default CarouselCard;