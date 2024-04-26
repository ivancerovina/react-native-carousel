import Constants from "expo-constants";
import { Dimensions, StyleSheet, Text } from "react-native";
import Carousel from "./carousel/Carousel";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Data type for testing
type TData = { id: number; title: string; description: string };

const initialData: TData[] = [
  {
    id: 0,
    title: "Welcome to my amazing app",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi laboriosam ut deserunt, at mollitia earum!",
  },
  {
    id: 1,
    title: "Features",
    description: "We have 10 new features",
  },
  {
    id: 2,
    title: "Rate my app",
    description: "Rate my app on the Play Store",
  },
  {
    id: 3,
    title: "Have fun",
    description: "Lorem ipsum dolor sit amet.",
  },
];

export default function App() {
  const [data, setData] = useState(initialData);

  const renderItem = (data: any) => {
    return (
      <>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </>
    );
  };

  const keyExtractor = (data: TData) => {
    return data.id.toString();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Carousel
        cardSizePercent={70}
        buttons
        leftButtonContent={<ButtonLeft />}
        rightButtonContent={<ButtonRight />}
        pagination
        paginationColor={"blue"}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        cardStyle={{
          backgroundColor: "blue",
          height: 200,
          borderRadius: 20,
          padding: 20,
        }}
        style={{
          height: 300,
        }}
      />
    </GestureHandlerRootView>
  );
}

function ButtonLeft() {
  return <Text style={{ fontSize: 24 }}>LEFT</Text>;
}

function ButtonRight() {
  return <Text style={{ fontSize: 24 }}>RIGHT</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 100,
    width: Dimensions.get("window").width,
    height: "30%",
    backgroundColor: "lightgray",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginBottom: 32,
    textAlign: "center",
  },

  description: {
    color: "rgb(230, 230, 230)",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },

  list: {
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
});
