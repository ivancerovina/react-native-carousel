import { ReactElement, ReactNode } from "react";
import {
  ColorValue,
  ViewStyle,
} from "react-native";
import Animated, {
  AnimatedRef,
  SharedValue,
} from "react-native-reanimated";

/**
 * Props for the Carousel component.
 */
export type CarouselProps = {
  /** Array of data items to be rendered in the carousel. */
  data: any[];
  /** Function that returns a React element to render for each item in the `data` array. */
  renderItem: (data: any) => ReactElement;
  /** Function that extracts a unique key for each item in the `data` array. */
  keyExtractor: (data: any) => React.Key;
  /** The percentage of the screen width that each card should occupy. */
  cardSizePercent: number;
  /** If `true`, disables touch interactions on the carousel. */
  touchDisabled?: boolean;
  /** **TODO** If `true`, enables infinite scrolling in the carousel. */
  infiniteScroll?: boolean;
  /** If `true`, displays navigation buttons (left and right arrows). */
  buttons?: boolean;
  /** Style for the navigation buttons. */
  buttonStyle?: ViewStyle;
  /** Custom content for the left navigation button. */
  leftButtonContent?: ReactElement;
  /** Custom content for the right navigation button. */
  rightButtonContent?: ReactElement;
  /** If `true`, displays pagination dots at the bottom of the carousel. */
  pagination?: boolean;
  /** Color of the pagination dots. */
  paginationColor?: ColorValue;
  /** Style for the carousel cards. */
  cardStyle?: ViewStyle;
  /** Additional style for the carousel container. */
  style?: ViewStyle;
};

/**
 * Props for the individual carousel element.
 */
export type CarouselElementProps = {
  /** Children of the carousel element. */
  children?: ReactNode;
  /** Style for the carousel element. */
  style?: ViewStyle;
  /** Width of the carousel element. */
  width: number;
  /** Index of the carousel element. */
  index: number;
  /** Shared value representing the current scroll position of the carousel. */
  x: SharedValue<number>;
};

/**
 * Props for the carousel pagination component.
 */
export type CarouselPaginationProps = {
  /** Array of data items to be rendered in the carousel. */
  data: any[];
  /** Shared value representing the current scroll position of the carousel. */
  x: SharedValue<number>;
  /** Size of each carousel element. */
  size: number;
  /** Color of the pagination dots. */
  color?: ColorValue;
};

/**
 * Props for an individual pagination dot.
 */
export type DotProps = {
  /** Shared value representing the current scroll position of the carousel. */
  x: SharedValue<number>;
  /** Index of the pagination dot. */
  index: number;
  /** Size of the pagination dot. */
  size: number;
  /** Color of the pagination dot. */
  color?: ColorValue;
};

/**
 * Props for CarouselButtons component.
 */
export type CarouselButtonsProps = {
  /** Value representing whether the user is currently scrolling the carousel */
  scrolling: boolean;
  /** Reference to the carousel's scroll view element */
  scrollViewRef: AnimatedRef<Animated.ScrollView>;
    /** Shared value representing the current scroll position of the carousel. */
  x: SharedValue<number>;
    /** Width of the carousel element. */
  width: number;
    /** Style for the navigation buttons. */
  buttonStyle?: ViewStyle;
  /** Custom content for the left navigation button. */
  leftButtonContent?: ReactElement;
  /** Custom content for the right navigation button. */
  rightButtonContent?: ReactElement;
};
