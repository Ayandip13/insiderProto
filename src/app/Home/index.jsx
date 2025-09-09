import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoryList.jsx";
import Cards from "../../components/Cards.jsx";
import Header from "../../components/Header.jsx";
import Color from "../../components/constants/Color.js";

const HomePage = () => {
  const [active, setActive] = useState({ id: 1, name: "Latest" });
  const [newsData, setNewsData] = useState([]);
  const API_KEY = "f7e2bafc620c48abb4b8b8502c5c9513";

  const searchString = active ? active.name : "all";

  const getData = async () => {
    try {
      const resp = await fetch(
        `https://newsapi.org/v2/everything?q=${searchString}&apiKey=${API_KEY}`
      );
      const data = await resp.json();
      // console.log(data);
      setNewsData(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (active) {
      getData();
    }
  }, [active]);

  return (
    <View style={{ backgroundColor: Color.light, flex: 1 }}>
      <Header />
      <CategoryList active={active} setActive={setActive} />
      <Cards activeCategory={newsData} />
    </View>
  );
};

export default HomePage;
