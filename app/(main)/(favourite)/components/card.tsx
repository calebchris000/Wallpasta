import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import placeholder from "@/assets/images/placeholder.png";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export const Card = ({ image }: { image: any }) => {
  useEffect(() => {
    async function resolveImage() {
      const loaded = await Image.resolveAssetSource(image);
      if (loaded) {
        setImage(loaded);
      }
    }
    resolveImage();
  }, []);
  const [currentImage, setImage] = useState(placeholder);
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={{ borderRadius: 16, overflow: "hidden" }}
      onPress={() => {
        router.navigate("/(main)/(wallpapers)/(view)/view");
      }}
    >
      <ImageBackground
        source={currentImage}
        style={{
          backgroundColor: "gray",
          width: Dimensions.get("window").width * 0.48,
          height: Dimensions.get("window").height * 0.4,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 99,
            padding: 8,
          }}
        >
          <Ionicons name="heart" size={20} color="red" />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "47%", // Adjust this value to control the width of each card
    aspectRatio: 2 / 3, // Maintain a 2:3 aspect ratio
    marginBottom: 10,
    height: Dimensions.get("window").height * 0.4,
  },
  imageBackground: {
    overflow: "hidden",
    flex: 1,
    display: "flex",
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 16,
  },
  parent: {},
});
