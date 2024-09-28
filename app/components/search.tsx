import { Dimensions, StyleSheet, TextInput, View } from "react-native";
export const Search = ({ onInput }: { onInput: (value: string) => void }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => onInput(text)}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    height: 44,
    marginLeft: "auto",
    borderRadius: 4,
    width: Dimensions.get("window").width - 80,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    padding: 10,
    justifyContent: "center",
  },
});
