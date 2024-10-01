import { Colors } from "@/constants/Colors";
import { Ionicons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab]}
        onPress={() => {
          setSelectedTab("home");
          navigation.navigate("index");
        }}
      >
        <Icon
          name="home-outline"
          size={24}
          color={selectedTab === "home" ? "#fff" : "#8E8E93"}
        />
        <Text
          style={[
            styles.tabText,
            selectedTab === "home" && styles.selectedTabText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab]}
        onPress={() => {
          setSelectedTab("search");
          navigation.navigate("(search)");
        }}
      >
        <Icon
          name="search"
          size={24}
          color={selectedTab === "search" ? "#fff" : "#8E8E93"}
        />
        <Text
          style={[
            styles.tabText,
            selectedTab === "search" && styles.selectedTabText,
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab]}
        onPress={() => {
          setSelectedTab("heart");
          navigation.navigate("(favourite)");
        }}
      >
        <Icon
          name="heart-outline"
          size={24}
          color={selectedTab === "heart" ? "#fff" : "#8E8E93"}
        />
        <Text
          style={[
            styles.tabText,
            selectedTab === "heart" && styles.selectedTabText,
          ]}
        >
          Favourite
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 84,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 32,
    position: "absolute",
    bottom: "1%",
    left: "1%",
    right: "1%",
    width: Dimensions.get("screen").width * 0.98,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 4,
  },
  selectedTabText: {
    color: "#fff",
  },
});
