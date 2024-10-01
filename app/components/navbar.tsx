import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Search } from "./search";
import { usePathname, useRouter } from "expo-router";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = useState("(main)");
  const route = useExpoRouter();
  const pathname = usePathname();
  useEffect(() => {
    const segments = route.routeInfo?.segments;
    if (segments) {
      const last = segments[segments.length - 1];
      setCurrentScreen(last);
    }
  }, [pathname, route.routeInfo?.segments]);
  return (
    <SafeAreaView style={styles.parent}>
      <Text style={styles.hamburger}>&#9776;</Text>

      <View
        style={{
          marginLeft: -10,
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {currentScreen === "(main)" || currentScreen === "favourite" ? (
          <Text
            style={{
              color: "white",
              transform: "translateX(-10px)",
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            {currentScreen === "(main)" ? "WallPasta" : "Favourite"}
          </Text>
        ) : (
          <Search
            onInput={(v) => {
              console.log(v);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#1f1f1f",
  },
  hamburger: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
});
