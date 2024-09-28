import { Ionicons } from "@expo/vector-icons";
import { View, Text, Dimensions } from "react-native";

export default function Search() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height - 200,
      }}
    >
      <Ionicons name="search" size={128} color="#636363" />
      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: "600",
          color: "#636363",
        }}
      >
        Start Searching
      </Text>
    </View>
  );
}
