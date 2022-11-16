import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { REACT_APP_BACKEND_URL } from "@env";
import NewsArticle from "./news_article";

const NewsList = () => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      let response = await fetch(`${REACT_APP_BACKEND_URL}/news/all`);
      let json = await response.json();
      setNews(json);
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size='large'/>
      ) : (
        news.map((article) => (
          <NewsArticle
            title={article.title}
            image={article.urlToImage}
            description={article.description}
            key={article.title}
          />
        ))
      )}
    </ScrollView>
  );
};

export default NewsList;
