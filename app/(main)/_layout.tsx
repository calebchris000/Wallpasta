import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
export default function Layout({ content }: { content: React.ReactNode }) {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
