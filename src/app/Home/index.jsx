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

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "react-native";

const COLORS = {
  // primary: "#DC2626",
  // accent: "#991B1B",
  // background: "#FEF2F2"

  // primary: "#EAB308",
  // accent: "#A16207",
  // background: "#FEFCE8"

  // primary: "#F59E0B",
  // accent: "#B45309",
  // background: "#FFFBEB"

  primary: "#29c0a7ff",
  primary2: "#E6FFFA",
  accent: "#0F766E",
  background: "#F7F9F6",

  // primary: "#A78BFA",
  // background: "#FAFAFF",
  // accent: "#5B21B6",

  // primary: "#38BDF8",
  // background: "#F9FBFF",
  // accent: "#1E40AF",

  // primary: "#FB7185",
  // background: "#F5F5F5",
  // accent: "#BE123C",

  // primary: "#6B4E3D",
  // background: "#FAF3E8",
  // accent: "#2F6B4F",
};

const books = [
  {
    id: "1",
    title: "Atomic Habits",
    price: "₹399",
    urlToImage: "https://www.oskareggert.com/content/images/size/w2000/2024/02/image_67203329.JPG",
    author: "James Clear",
    decs: "Let's build a practical guide to building good habits and breaking bad ones."
  },
  {
    id: "2",
    title: "Rich Dad Poor Dad",
    price: "₹299",
    urlToImage: "https://cdn.penguin.co.in/wp-content/uploads/2023/12/9781612681139-1-scaled.jpg",
    author: "Robert Kiyosaki",
    decs: "A practical guide to building good habits and breaking bad ones."
  },
  {
    id: "3",
    title: "Ikigai",
    price: "₹249",
    urlToImage: "https://corporategiftsbyconfetti.in/cdn/shop/files/71YPkVyl_DL._SL1200.jpg?v=1698923673&width=2048",
    author: "Héctor García",
    decs: "A practical guide to building good habits and breaking bad ones."
  },
  {
    id: "4",
    title: "Deep Work",
    price: "₹349",
    urlToImage: "https://tldv.io/wp-content/uploads/2021/06/Deep-Work-by-Cal-Newport-Book.jpg",
    author: "Cal Newport",
    decs: "A practical guide to building good habits and breaking bad ones."
  },
];

const categories = ["Fiction", "Self Help", "Comics", "Study", "Used Books"];

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmart 📚</Text>
        <Text style={styles.headerSub}>Fresh reads every day</Text>

        <TextInput
          placeholder="Search books..."
          placeholderTextColor="#666"
          style={styles.search}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO BANNER */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Discover Your Next Book</Text>
          <Text style={styles.heroSub}>Trending reads curated for you</Text>

          <TouchableOpacity style={styles.heroBtn}>
            <Text style={styles.heroBtnText}>Explore Now</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catRow}>
          {categories.map((cat) => (
            <View key={cat} style={styles.catChip}>
              <Text style={styles.catText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>

        {/* PROMO */}
        <View style={styles.promo}>
          <Text style={styles.promoText}>🔥 Flat 30% off on Bestsellers</Text>
        </View>

        {/* FEATURED BOOKS (HORIZONTAL) */}
        <Text style={styles.sectionTitle}>Featured</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
          {books.map((item) => (
            <View key={item.id} style={styles.featureCard}>
              <Image source={{ uri: item.urlToImage }} resizeMode="cover" style={{ height: 100, width: 100, borderRadius: 10 }} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>

        {/* GRID PRODUCTS */}
        <Text style={styles.sectionTitle}>All Books</Text>
        <FlatList
          data={books}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.urlToImage }} resizeMode="cover" style={{ height: 100, width: 150, borderRadius: 10 }} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>

              <TouchableOpacity
                onPress={() => router.push({
                  pathname: "/Saved",
                  params: { item: JSON.stringify(item) }
                })}
                style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )
          }
        />
        {/* FROM YOUR COLLEGE */}
        <Text style={styles.sectionTitle}>From Your College</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
        >
          {books.map((item) => (
            <TouchableOpacity key={item.id} style={styles.collegeCard} activeOpacity={0.85}>

              {/* IMAGE */}
              <Image source={{ uri: item.urlToImage }} style={styles.collegeImage} />

              {/* BADGE */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Campus</Text>
              </View>

              {/* CONTENT */}
              <View style={styles.collegeContent}>
                <View>
                  <Text numberOfLines={2} style={styles.collegeTitle}>
                    {item.title}
                  </Text>
                  <View style={{ height: 0.7, backgroundColor: "green", width: "70%", marginTop: 3 }} />
                </View>

                <Text style={styles.author}>{item.author}</Text>

                <Text style={styles.decs} numberOfLines={2}>{item.decs}</Text>

                <View style={styles.sellerRow}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>R</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.sellerName}>Rahul D.</Text>
                  </View>

                  {/* QUICK ACTION */}
                  <TouchableOpacity style={styles.quickBtn}>
                    <Text style={styles.quickBtnText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* DEAL SECTION */}
        <View style={styles.dealBox}>
          <Text style={styles.dealTitle}>Deal of the Day</Text>
          <Text style={styles.dealText}>Get "Deep Work" at just ₹199 today</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Grab Deal</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Bookmart © 2026</Text>
        </View>

      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    backgroundColor: COLORS.accent,
    padding: 20,
    paddingTop: 55,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  headerTitle: {
    color: COLORS.primary2,
    fontSize: 26,
    fontWeight: "700",
  },

  headerSub: {
    color: COLORS.primary2,
    marginTop: 4,
  },

  list: {
    padding: 10,
  },

  card: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 4,
    padding: 10,
    borderRadius: 16,
    elevation: 3,
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: COLORS.background,
    fontWeight: "700",
  },

  search: {
    backgroundColor: COLORS.background,
    marginTop: 14,
    padding: 12,
    borderRadius: 14,
  },

  catRow: {
    marginHorizontal: 15,
  },

  catChip: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },

  catText: {
    color: COLORS.background,
    fontWeight: "600",
  },

  promo: {
    backgroundColor: COLORS.accent,
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },

  promoText: {
    color: "#E6FFFA",
    fontSize: 16,
    fontWeight: "700",
  },

  fakeImage: {
    height: 100,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 10,
  },

  hero: {
    backgroundColor: COLORS.primary,
    margin: 16,
    borderRadius: 20,
    padding: 20,
  },

  heroTitle: {
    color: "#E6FFFA",
    fontSize: 20,
    fontWeight: "700",
  },

  heroSub: {
    color: "#E6FFFA",
    marginTop: 6,
  },

  heroBtn: {
    backgroundColor: "#E6FFFA",
    marginTop: 14,
    padding: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  heroBtnText: {
    color: COLORS.primary,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 16,
    color: COLORS.accent,
  },

  featureCard: {
    backgroundColor: "#fff",
    width: 140,
    marginRight: 10,
    padding: 10,
    borderRadius: 16,
    elevation: 2,
    marginBottom: 10,
  },

  dealBox: {
    backgroundColor: COLORS.accent,
    margin: 12,
    padding: 20,
    borderRadius: 16,
  },

  dealTitle: {
    color: "#E6FFFA",
    fontSize: 18,
    fontWeight: "700",
  },

  dealText: {
    color: "#E6FFFA",
    marginVertical: 6,
  },

  footer: {
    padding: 20,
    alignItems: "center",
  },

  footerText: {
    color: "#6B7280",
  },


  collegeCard: {
    flexDirection: "row",
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,
    marginRight: 14,

    // depth
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  collegeImage: {
    width: 85,
    height: 115,
    borderRadius: 12,
  },

  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },

  collegeContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  collegeTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
  },

  author: {
    fontSize: 13,
    color: "#555",
  },

  decs: {
    fontSize: 12,
    color: "#6B7280",
  },

  sellerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  sellerName: {
    fontSize: 12,
    fontWeight: "600",
  },

  collegeTag: {
    fontSize: 11,
    color: "#6B7280",
  },

  quickBtn: {
    backgroundColor: COLORS.primary2,
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  quickBtnText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
