// import { View, Text, StatusBar } from "react-native";
// import React, { useEffect, useState } from "react";
// import CategoryList from "../../components/CategoryList.jsx";
// import Cards from "../../components/Cards.jsx";
// import Header from "../../components/Header.jsx";
// import Color from "../../components/constants/Color.js";

// const HomePage = () => {
//   const [active, setActive] = useState({ id: 1, name: "Latest" });
//   const [newsData, setNewsData] = useState([]);
//   const API_KEY = "f7e2bafc620c48abb4b8b8502c5c9513";

//   const searchString = active ? active.name : "all";

//   const getData = async () => {
//     try {
//       const resp = await fetch(
//         `https://newsapi.org/v2/everything?q=${searchString}&apiKey=${API_KEY}`
//       );
//       const data = await resp.json();
//       // console.log(data);
//       setNewsData(data.articles);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (active) {
//       getData();
//     }
//   }, [active]);

//   return (
//     <View style={{ backgroundColor: Color.light, flex: 1 }}>
//       <Header />
//       <CategoryList active={active} setActive={setActive} />
//       <Cards activeCategory={newsData} />
//     </View>
//   );
// };

// export default HomePage;

import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

const books = [
  {
    id: "1",
    title: "The War of the Worlds",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: "2",
    title: "Project Hail Mary",
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
  },
  {
    id: "3",
    title: "1984",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: "4",
    title: "The Martian Chronicles",
    image: "https://covers.openlibrary.org/b/id/11153216-L.jpg",
  },
  {
    id: "5",
    title: "The War of the Worlds",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: "6",
    title: "Project Hail Mary",
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
  },
  {
    id: "7",
    title: "1984",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: "8",
    title: "The Martian Chronicles",
    image: "https://covers.openlibrary.org/b/id/11153216-L.jpg",
  },
];

const listData = [
  { id: "header", type: "header" },
  ...books,
];

export default function SciFiScreen() {
  const renderItem = ({ item, index }) => {
    // 👉 HEADER ITEM
    if (item.type === "header") {
      return (
        <View
          style={{
            width: CARD_WIDTH,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "800",
            }}
          >
            Science{"\n"}Fiction
          </Text>

          <Text
            style={{
              color: "#666",
              marginTop: 8,
            }}
          >
            The Art of the Possible
          </Text>
        </View>
      );
    }

    // 👉 BOOK CARD
    return (
      <View
        style={{
          width: CARD_WIDTH,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 12,
          marginBottom: 20,

          // 🔥 important tweak
          marginTop: index % 2 !== 0 ? 30 : 0,

          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          {item.title}
        </Text>

        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: 160,
            borderRadius: 12,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#0a8f83",
              fontWeight: "600",
            }}
          >
            ₹ 290
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#0a8f83",
              borderRadius: 20,
              padding: 6,
            }}
          >
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
        padding: 16,
      }}
    >

      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


