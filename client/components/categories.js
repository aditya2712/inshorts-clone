import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { REACT_APP_BACKEND_URL } from "@env";

const Categories = () => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let response = await fetch(`${REACT_APP_BACKEND_URL}/category/all`);
      let json = await response.json();

      let category_list = [];
      for (let key in json) {
        category_list.push(json[key]);
      }
      
      setCategories(category_list);
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : <Text>{categories}</Text>}
    </View>
  );
};

export default Categories;
