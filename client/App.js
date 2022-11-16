import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import NewsList from "./components/news_list";
import Nav from "./components/nav";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <NewsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
