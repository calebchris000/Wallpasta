import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Share,
  View,
} from "react-native";

import placeholder from "@/assets/images/placeholder.png";
import { useContext, useEffect, useState } from "react";
import { useStore } from "@/app/core/store";
import { usePathname, useRouter } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ViewWallpaper() {
  const { showTab, showNavbar, setShowNavbar, setShowTab, selectedImage } =
    useStore();
  const [renderedImage, setRenderedImage] = useState<any>(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const visibility = NavigationBar.useVisibility();
  const route = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function checkFavourite() {
      const favourites = await AsyncStorage.getItem("favourites");
      if (favourites) {
        const parsedFavourites = JSON.parse(favourites);
        setIsFavourite(
          parsedFavourites.some(
            (fav: { url: string }) => fav.url === selectedImage,
          ),
        );
      }
    }
    checkFavourite();
  }, []);

  useEffect(() => {
    setShowTab(false);
    setShowNavbar(false);
    async function hideNavbar() {
      if (Platform.OS === "android") {
        StatusBar.setHidden(true, "fade");
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
      }
    }
    hideNavbar();
  }, [route]);

  useEffect(() => {
    const getImageInJPEG = async () => {
      try {
        const response = await fetch(selectedImage);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          const base64data = reader.result;
          setRenderedImage(base64data);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error getting image in JPEG:", error);
      }
    };

    getImageInJPEG();
  }, [selectedImage]);

  async function handleShare() {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      const filePath = `${FileSystem.cacheDirectory}/tempImage.png`;
      try {
        await FileSystem.writeAsStringAsync(
          filePath,
          renderedImage.split(",")[1],
          {
            encoding: FileSystem.EncodingType.Base64,
          },
        );
        try {
        } catch (err) {
          console.log(err);
        }
      } catch (error) {
        console.error("Error writing image file:", error);
      }
    }
  }

  async function handleLike() {
    const favourites = await AsyncStorage.getItem("favourites");
    if (!favourites) {
      await AsyncStorage.setItem(
        "favourites",
        JSON.stringify([{ url: selectedImage }]),
      );
    } else {
      const parsed = JSON.parse(favourites) as { url: string }[];
      const exists = parsed.find((c) => c.url === selectedImage);
      console.log(exists);
      if (!exists) {
        await AsyncStorage.setItem(
          "favourites",
          JSON.stringify([...parsed, { url: selectedImage }]),
        );
        setIsFavourite(true);
      } else {
        const filtered = parsed.filter((c) => c.url !== selectedImage);
        await AsyncStorage.setItem("favourites", JSON.stringify(filtered));
        setIsFavourite(false);
      }
    }
  }

  return (
    <SafeAreaView style={styles.parent}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{ uri: renderedImage } ?? placeholder}
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
          <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
            {isFavourite ? (
              <Ionicons name="heart" size={32} color="red" />
            ) : (
              <Ionicons name="heart-outline" size={32} color="white" />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
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
