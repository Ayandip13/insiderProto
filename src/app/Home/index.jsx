import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../components/constants/Color.js";
import { Ionicons } from "@expo/vector-icons";
import CategoryList from "../../components/CategoryList.jsx";
import Cards from "../../components/Cards.jsx";

const HomePage = () => {
  const [active, setActive] = useState();
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
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <StatusBar barStyle={"dark-content"} />
        <Ionicons name="arrow-back" size={25} color="black" />
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: Color.primary }}
        >
          The Insider
        </Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <CategoryList active={active} setActive={setActive} />
      <Cards activeCategory={newsData} />
    </View>
  );
};

export default HomePage;
