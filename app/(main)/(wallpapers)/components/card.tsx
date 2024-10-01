import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import placeholder from "@/assets/images/placeholder.png";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Card = ({ image }: { image: any }) => {
  useEffect(() => {

    async function resolveImage() {
      const loaded = await Image.resolveAssetSource(image);
      if(loaded) {
        setImage(loaded)
      }
    }
    resolveImage()
    
  }, [])
  const [currentImage, setImage] = useState(placeholder);
  const navigation = useNavigation<any>()

  return (
    <TouchableOpacity
      style={{ borderRadius: 16, overflow: "hidden" }}
      onPress={() => {
        navigation.navigate('(view)')
      }}
    >
      <ImageBackground
        source={currentImage}
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
