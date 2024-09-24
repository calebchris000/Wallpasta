import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import placeholder from "@/assets/images/placeholder.png";
import { useEffect, useState } from "react";
export const Category = ({ title, image }: { title: string; image: any }) => {
  const [currentImage, setImage] = useState(placeholder);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const loadedImage = await Image.resolveAssetSource(image);
        if (loadedImage) {
          setImage(loadedImage);
        }
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    };
    loadImage();
  }, []);
  return (
    <ImageBackground source={currentImage} style={style.imageBackground}>
      <View style={style.title}>
        <View style={style.titleOverlay}></View>
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  imageBackground: {
    overflow: "hidden",
    borderRadius: 24,
    flex: 1,
    height: 240,
  },
  title: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
  titleOverlay: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    opacity: 0.6,
    backgroundColor: "black",
    height: 56,
  },
});
