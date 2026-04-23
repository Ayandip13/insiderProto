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

import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ScrollView, 
  StatusBar, 
  Dimensions 
} from "react-native";
import { useRouter } from "expo-router";
import PremiumHeader from "../../components/PremiumHeader";
import CategoryBar from "../../components/CategoryBar";
import BookCard from "../../components/BookCard";
import { THEMES } from "../../theme/themes";

const { width } = Dimensions.get('window');

const ALL_BOOKS = [
  {
    id: "1",
    title: "Atomic Habits",
    price: "₹399",
    urlToImage: "https://www.oskareggert.com/content/images/size/w2000/2024/02/image_67203329.JPG",
    author: "James Clear",
    category: "Study",
    condition: "New"
  },
  {
    id: "2",
    title: "Rich Dad Poor Dad",
    price: "₹299",
    urlToImage: "https://cdn.penguin.co.in/wp-content/uploads/2023/12/9781612681139-1-scaled.jpg",
    author: "Robert Kiyosaki",
    category: "Study",
    condition: "Used"
  },
  {
    id: "3",
    title: "The Silent Patient",
    price: "₹249",
    urlToImage: "https://m.media-amazon.com/images/I/81JJPDYEP-L._AC_UF1000,1000_QL80_.jpg",
    author: "Alex Michaelides",
    category: "Horror",
    condition: "New"
  },
  {
    id: "4",
    title: "The Guest List",
    price: "₹349",
    urlToImage: "https://m.media-amazon.com/images/I/81I6xSAtZ3L._AC_UF1000,1000_QL80_.jpg",
    author: "Lucy Foley",
    category: "Horror",
    condition: "New"
  },
  {
    id: "5",
    title: "Me Before You",
    price: "₹199",
    urlToImage: "https://m.media-amazon.com/images/I/81mXSp8RcrL._AC_UF1000,1000_QL80_.jpg",
    author: "Jojo Moyes",
    category: "Romance",
    condition: "New"
  },
  {
    id: "6",
    title: "The Hobbit",
    price: "₹450",
    urlToImage: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    condition: "New"
  },
  {
    id: "7",
    title: "Born a Crime",
    price: "₹275",
    urlToImage: "https://m.media-amazon.com/images/I/81S6eS7jMFL._AC_UF1000,1000_QL80_.jpg",
    author: "Trevor Noah",
    category: "Comedy",
    condition: "Used"
  },
  {
    id: "8",
    title: "Harry Potter",
    price: "₹599",
    urlToImage: "https://m.media-amazon.com/images/I/71X0Z787oLL._AC_UF1000,1000_QL80_.jpg",
    author: "J.K. Rowling",
    category: "Fantasy",
    condition: "New"
  }
];

const CATEGORIES = ["Fiction", "Romance", "Horror", "Comedy", "Study", "Fantasy"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Fiction");
  const [filteredBooks, setFilteredBooks] = useState(ALL_BOOKS);
  const router = useRouter();

  const theme = THEMES[activeCategory] || THEMES.Fiction;

  useEffect(() => {
    if (activeCategory === "Fiction") {
      setFilteredBooks(ALL_BOOKS);
    } else {
      setFilteredBooks(ALL_BOOKS.filter(b => b.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <PremiumHeader theme={theme} />
            <CategoryBar 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory}
              theme={theme}
            />
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {activeCategory === "Fiction" ? "Popular Books" : `${activeCategory} Reads`}
              </Text>
              <Text style={styles.sectionCount}>{filteredBooks.length} available</Text>
            </View>
          </>
        }
        renderItem={({ item }) => <BookCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },
  sectionCount: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  }
});

