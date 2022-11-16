import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Nav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>House of X Assignment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Nav;
