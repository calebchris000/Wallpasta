import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="wallpapers"
        options={{ title: "Wallpapers", headerShown: false }}
      />
    </Stack>
  );
}
