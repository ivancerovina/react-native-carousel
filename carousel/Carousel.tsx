import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { CarouselProps } from "../types/carousel-types";
import { useState } from "react";
import CarouselCard from "./CarouselCard";
import { useWindowDimensions, View } from "react-native";
import CarouselPagination from "./CarouselPagination";
import CarouselButtons from "./CarouselButtons";

function Carousel({
  renderItem,
  keyExtractor,
  cardStyle,
  cardSizePercent,
  touchDisabled,
  infiniteScroll, // TODO Create infinite scrolling
  buttons,
  buttonStyle,
  leftButtonContent,
  rightButtonContent,
  pagination,
  paginationColor,
  data,
  style = {},
}: CarouselProps) {
  if (!cardSizePercent || cardSizePercent < 1 || cardSizePercent > 100) {
    throw new Error(
      "Invalid card size in Carousel element. Property `cardSizePercent` must be between 1 and 100."
    );
  }

  const [newData, setNewData] = useState([
    { spacer: "true" },
    ...data,
    { spacer: "true" },
  ]);

  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const { width } = useWindowDimensions();
  const SIZE = width * (cardSizePercent / 100);
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const [scrolling, setScrolling] = useState(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },

    onMomentumEnd: (event) => {
      offsetX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[style, { position: "relative" }]}>
      <Animated.ScrollView
        pagingEnabled
        ref={scrollViewRef}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        scrollEnabled={!touchDisabled}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollBegin={() => setScrolling(true)}
        onMomentumScrollEnd={() => setScrolling(false)}
      >
        {newData.map((item, index) => {
          if (item.spacer) {
            return <View style={{ width: SPACER }}></View>;
          }
          return (
            <CarouselCard
              width={SIZE}
              style={cardStyle}
              key={keyExtractor(item)}
              index={index}
              x={x}
            >
              {renderItem(item)}
            </CarouselCard>
          );
        })}
      </Animated.ScrollView>
      {pagination && (
        <CarouselPagination
          data={data}
          x={x}
          size={SIZE}
          color={paginationColor}
        />
      )}
      {buttons && (
        <CarouselButtons
          scrolling={scrolling}
          scrollViewRef={scrollViewRef}
          x={x}
          width={SIZE}
          buttonStyle={buttonStyle}
          leftButtonContent={leftButtonContent}
          rightButtonContent={rightButtonContent}
        />
      )}
    </View>
  );
}

export default Carousel;
