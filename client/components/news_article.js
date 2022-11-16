import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

// An card component for displaying a news article with image, title, and description
const NewsArticle = (props) => {
  return (
    <View style={{ flex: 1, padding: 24, borderWidth:1, marginVertical:5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom:5 }}>{props.title}</Text>
        <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: props.image }}
        />
        <Text style={{ fontSize: 14, fontWeight: "normal", marginTop:3 }}>{props.description}</Text>
    </View>
  );
};

export default NewsArticle;
