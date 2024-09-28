import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "./components/card";
import { Skeleton } from "./components/skeleton";
import { useState } from "react";
import splash from '@/assets/images/splash.png'
export default function Wallpapers() {
  const [loading, setLoading] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.parent}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {[...Array(10).fill(0)].map(() => (
            <Card image={splash} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
