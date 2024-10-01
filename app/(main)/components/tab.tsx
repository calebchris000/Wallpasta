import { Ionicons as Icon } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === "home" && styles.selectedTab]}
        onPress={() => setSelectedTab("home")}
      >
        <Icon
          name="home"
          size={24}
          color={selectedTab === "home" ? "#007AFF" : "#8E8E93"}
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
        style={[styles.tab, selectedTab === "search" && styles.selectedTab]}
        onPress={() => setSelectedTab("search")}
      >
        <Icon
          name="search"
          size={24}
          color={selectedTab === "search" ? "#007AFF" : "#8E8E93"}
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
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "#D1D1D6",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTab: {
    borderTopWidth: 2,
    borderTopColor: "#007AFF",
  },
  tabText: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 4,
  },
  selectedTabText: {
    color: "#007AFF",
  },
});
