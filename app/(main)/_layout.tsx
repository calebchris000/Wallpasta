import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { useStore } from "../core/store";

export default function Layout() {
  const { showTab } = useStore();
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(wallpapers)"
        options={{
          title: "Wallpapers",
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
