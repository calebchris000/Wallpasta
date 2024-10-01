import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import splash from "@/assets/images/splash.png";
import { useContext, useEffect } from "react";
import { useStore } from "@/app/core/store";
import { usePathname, useRouter } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ViewWallpaper() {
  const { setShowNavbar, setShowTab } = useStore();
  const visibility = NavigationBar.useVisibility();
  const route = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function hideNavbar() {
      setShowNavbar(false);
      setShowTab(false);

      if (Platform.OS === "android") {
        StatusBar.setHidden(true, "fade");
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
      }
    }
    hideNavbar();
  }, [route]);

  return (
    <SafeAreaView style={styles.parent}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={splash}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-outline" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="download-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    padding: 10,
  },
  iconContainer: {
    position: "absolute",
    bottom: 64,
    left: 0,
    right: 0,
    gap: 28,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
