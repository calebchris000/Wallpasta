import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useStore } from "@/app/core/store";

export const Card = ({ image }: { image: any }) => {
  const router = useRouter();
  useEffect(() => {
    async function resolveImage() {
      if (image.startsWith("https://")) {
        setImage(image);
      } else {
        const loaded = await Image.resolveAssetSource(image);
        if (loaded) {
          setImage(loaded.uri);
        }
      }
    }
    resolveImage();
  }, []);
  const [currentImage, setImage] = useState("assets/images/splash.png");
  const { setSelectedImage } = useStore();
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={{ borderRadius: 16, overflow: "hidden" }}
      onPress={() => {
        setSelectedImage(image);
        router.navigate("/view");
      }}
    >
      <ImageBackground
        source={{ uri: currentImage }}
        style={{
          backgroundColor: "gray",
          width: Dimensions.get("window").width * 0.48,
          height: Dimensions.get("window").height * 0.4,
        }}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "47%",
    aspectRatio: 2 / 3,
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
