import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import splash from "@/assets/images/splash.png";
import { useContext, useEffect } from "react";
import { useStore } from "@/app/core/store";
import { usePathname } from "expo-router";
export default function ViewWallpaper() {
  const { setShowNavbar, setShowTab } = useStore();
  const route = usePathname();

  useEffect(() => {
    setShowNavbar(false);
    setShowTab(false);
  }, [route]);
  return (
    <SafeAreaView style={styles.parent}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={splash}
      ></ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    zIndex: 1000,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
