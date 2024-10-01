import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

export const Skeleton = () => {
  return (
    <ScrollView contentContainerStyle={styles.parent}>
      {Array(18)
        .fill(0)
        .map((_, id) => (
          <View key={id} style={styles.card}></View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.3,
    backgroundColor: "gray",
  },
});
