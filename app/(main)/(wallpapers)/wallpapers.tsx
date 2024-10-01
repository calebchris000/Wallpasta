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
import { useStore } from "@/app/core/store";
import * as NavigationBar from "expo-navigation-bar";
import { usePathname } from "expo-router";
import { GetImages } from "@/api/images";
import { imageResponseType } from "@/types";
export default function Wallpapers() {
  const [loading, setLoading] = useState(false);
  const route = usePathname();

  const { setShowNavbar, setShowTab, selectedCategory } = useStore();
  const [images, setImages] = useState<imageResponseType[] | []>([]);
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

  useEffect(() => {
    setLoading(true);
    GetImages({ category: selectedCategory })
      .then((d: any) => {
        setLoading(false);
        setImages(d);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e?.request?.responseURL || e?.message);
      });

    return () => {
      setImages([]);
      setLoading(true);
    };
  }, [route]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.parent}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {images.map((image, index) => (
              <Card key={index} image={image.url} />
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
