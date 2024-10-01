import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
