import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "./components/card";
import { Skeleton } from "./components/skeleton";
import { useEffect, useState } from "react";
import splash from "@/assets/images/splash.png";
import { useStore } from "@/app/core/store";
import * as NavigationBar from "expo-navigation-bar";
import { usePathname } from "expo-router";
import { Tab } from "../components/tab";
export default function Wallpapers() {
  const [loading, setLoading] = useState(false);
  const route = usePathname();

  const { setShowNavbar, setShowTab } = useStore();

  useEffect(() => {
    if (route !== "/view") {
      setShowTab(true);
    }
    if (route !== "/view") {
      setShowNavbar(true);
    }
    async function showNavigation() {
      if (Platform.OS === "android") {
        await NavigationBar.setVisibilityAsync("visible");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
      }
    }
    showNavigation();
  }, [route]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.parent}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {[...Array(10).fill(0)].map((_, index) => (
              <Card key={index} image={splash} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 120,
  },
});
