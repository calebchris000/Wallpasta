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
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { CategoryType } from "@/types";
import { useStore } from "@/app/core/store";
export const Category = ({
  title,
  slug,
  image,
}: {
  title: string;
  image: any;
  slug: CategoryType;
}) => {
  const [currentImage, setImage] = useState(placeholder);
  const navigation = useNavigation<any>();
  const { setSelectedCategory } = useStore();
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
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        setSelectedCategory(slug);
        navigation.navigate("(wallpapers)");
      }}
    >
      <ImageBackground source={currentImage} style={style.imageBackground}>
        <View style={style.title}>
          <View style={style.titleOverlay}></View>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  imageBackground: {
    overflow: "hidden",
    borderRadius: 24,
    flex: 1,
    height: 280,
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
