import { Category } from "@/components/category";
import { Colors } from "@/constants/Colors";
import { ScrollView, View, StyleSheet } from "react-native";
import nature from "@/assets/images/categories/nature.jpg";
import sports from "@/assets/images/categories/sports.jpg";
import space from "@/assets/images/categories/space.jpg";
import cars from "@/assets/images/categories/cars.jpg";
import animals from "@/assets/images/categories/animals.jpg";
import spiritual from "@/assets/images/categories/spiritual.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect } from "react";
import { useStore } from "../core/store";
import { Tab } from "./components/tab";
import { useRoute } from "@react-navigation/native";
import { usePathname } from "expo-router";
export default function HomePage() {
  const { setShowNavbar } = useStore();
  const route = usePathname();

  useEffect(() => {
    setShowNavbar(true);
  }, [route]);

  const categories = [
    [
      {
        id: 1,
        title: "Nature",
        image: nature,
      },
      {
        id: 2,
        title: "Sports",
        image: sports,
      },
    ],
    [
      {
        id: 3,
        title: "Space",
        image: space,
      },
      { id: 4, title: "Cars", image: cars },
    ],
    [
      {
        id: 5,
        title: "Animals",
        image: animals,
      },
      {
        id: 6,
        title: "Spiritual",
        image: spiritual,
      },
    ],
  ];
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: Colors.dark.background,
        }}
      >
        <View style={{ flex: 1, marginTop: 20 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>

        <View
          style={{
            display: "flex",
            gap: 24,
            maxWidth: 500,
          }}
        >
          {categories.map((category) => (
            <View
              key={category[0].id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                paddingHorizontal: 24,
              }}
            >
              <Category
                key={category[0].id}
                title={category[0].title}
                image={category[0].image}
              />
              <Category
                key={category[1].id}
                title={category[1].title}
                image={category[1].image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Tab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: Colors.dark.accent,
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 32,
  },
  harmburger: {
    fontSize: 32,
    fontWeight: "700",

    color: Colors.dark.text,
  },
  heroText: {
    color: Colors.dark.text,
    fontSize: 28,
    fontWeight: "700",
    transform: "translateX(-12px)",
  },
  content: { flex: 1 },
});
