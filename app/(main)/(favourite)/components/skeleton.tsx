import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import { useEffect, useRef } from "react";

export const Skeleton = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  const animatedStyle = {
    backgroundColor: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#808080", "#A9A9A9"],
    }),
  };

  return (
    <ScrollView contentContainerStyle={styles.parent}>
      {Array(18)
        .fill(0)
        .map((_, id) => (
          <Animated.View
            key={id}
            style={[styles.card, animatedStyle]}
          ></Animated.View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    height: Dimensions.get("window").height * 0.4,
    borderRadius: 16,
    width: "47%", // Adjust this value to control the width of each card
  },
});
