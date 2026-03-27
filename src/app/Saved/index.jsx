// import { View, Text, Image, FlatList } from "react-native";
// import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFocusEffect } from "@react-navigation/native";
// import { useCallback } from "react";

// const Index = () => {
//   const [retrivedItems, setRetrivedItems] = useState([]);

//   useFocusEffect(
//     useCallback(() => {
//       retrieveData();
//     }, [])
//   )

//   const retrieveData = async () => {
//     try {
//       const storedItem = await AsyncStorage.getItem("storedItem");
//       console.log("Raw stored data:", storedItem);
//       if (storedItem !== null) {
//         const parsedData = JSON.parse(storedItem);
//         console.log("Parsed data:", parsedData);
//         console.log("Is array?", Array.isArray(parsedData));
//         console.log("Data length:", Array.isArray(parsedData) ? parsedData.length : 1);
//         setRetrivedItems(Array.isArray(parsedData) ? parsedData : [parsedData]);
//       } else {
//         console.log("Data hadn't found");
//         setRetrivedItems([]);
//       }
//     } catch (error) {
//       console.log(error);
//       setRetrivedItems([]);
//     }
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingTop: 20,
//       }}
//     >
//       {retrivedItems.length > 0 ? (
//         <FlatList
//           data={retrivedItems}
//           keyExtractor={(item, index) => item?.title || index.toString()}
//           contentContainerStyle={{ paddingHorizontal: 20 }}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <View
//               style={{
//                 width: "100%",
//                 padding: 10,
//                 backgroundColor: "#E8F9FF",
//                 borderRadius: 10,
//                 borderColor: "#C4D9FF",
//                 borderWidth: 0.8,
//                 elevation: 3,
//                 marginBottom: 15,
//               }}
//             >
//               <View style={{ alignItems: "center", marginBottom: 10 }}>
//                 {item?.urlToImage ? (
//                   <Image
//                     style={{
//                       height: 120,
//                       width: "100%",
//                       borderRadius: 10,
//                       resizeMode: "cover",
//                     }}
//                     source={{ uri: item.urlToImage }}
//                   />
//                 ) : (
//                   <Text>No Image Available</Text>
//                 )}
//               </View>

//               <Text
//                 style={{
//                   fontSize: 14,
//                   fontWeight: "bold",
//                   color: "#333",
//                   marginBottom: 5,
//                 }}
//               >
//                 Author: {item?.author || "No Author"}
//               </Text>

//               <Text
//                 style={{
//                   fontSize: 15,
//                   textAlign: "justify",
//                   lineHeight: 22,
//                   color: "#444",
//                 }}
//               >
//                 {item?.description || "No description available"}
//               </Text>
//             </View>
//           )}
//         />
//       ) : (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//           <Text>No Saved Items</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Index;


import { useState } from "react";
import { ScrollView, TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

const COLORS = {
  primary: "#00B8B8",
  accent: "#008080",
  background: "#F7F9F6",
};

export default function ProductScreen() {
  const [count, setCount] = useState(0);
  const { item: itemString } = useLocalSearchParams();

  // Parse the stringified item object
  const item = itemString ? JSON.parse(itemString) : {};
  console.log(item);

  return (
    <>
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

      <ScrollView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item.urlToImage }}
            style={styles.imageBox}
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>Bestseller</Text>
          </View>
        </View>

        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ 4.8</Text>
          <Text style={styles.review}>(12,430 reviews)</Text>
        </View>

        {/* AUTHOR */}
        <Text style={styles.author}>by James Clear</Text>

        {/* PRICE */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.oldPrice}>₹599</Text>
          <Text style={styles.discount}>33% OFF</Text>
        </View>

        {/* DELIVERY */}
        <View style={styles.deliveryBox}>
          <Text style={styles.deliveryText}>🚚 Free delivery in 2 days</Text>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          Build good habits, break bad ones — simple and powerful system to improve your life every day.
        </Text>

        {/* QUANTITY */}
        <View style={styles.qtyRow}>
          <TouchableOpacity
            onPress={() => count > 0 && setCount(count - 1)}
            style={styles.qtyBtn}
          >
            <Text style={{ color: COLORS.background }}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{count}</Text>

          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={styles.qtyBtn}
          >
            <Text style={{ color: COLORS.background }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* WISHLIST */}
        <TouchableOpacity style={styles.wishlist}>
          <Text style={{ color: COLORS.accent }}>♡ Add to Wishlist</Text>
        </TouchableOpacity>

        {/* EXTRA INFO */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📦 Cash on Delivery Available</Text>
          <Text style={styles.infoText}>🔁 7 Days Replacement</Text>
          <Text style={styles.infoText}>🔒 Secure Payment</Text>
        </View>

        {/* REVIEWS */}
        <Text style={styles.sectionTitle}>Top Reviews</Text>

        <View style={styles.reviewCard}>
          <Text style={styles.reviewUser}>Rahul</Text>
          <Text style={styles.reviewText}>
            This book literally changed my mindset. Must read!
          </Text>
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.reviewUser}>Ananya</Text>
          <Text style={styles.reviewText}>
            Very practical and easy to understand.
          </Text>
        </View>

        {/* RELATED BOOKS */}
        <Text style={styles.sectionTitle}>You may also like</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.relatedCard}>
              <View style={styles.fakeImage} />
              <Text style={styles.bookTitle}>Book {i}</Text>
              <Text style={styles.price}>₹299</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* STICKY BOTTOM CTA */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  imageBox: {
    height: 220,
    backgroundColor: "#E5E7EB",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  rating: {
    fontWeight: "700",
  },

  review: {
    color: "#666",
  },

  deliveryBox: {
    backgroundColor: "#E6FFFA",
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },

  deliveryText: {
    color: COLORS.accent,
    fontWeight: "600",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  qtyBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },

  qty: {
    marginHorizontal: 14,
    fontSize: 18,
    fontWeight: "700",
  },

  wishlist: {
    marginTop: 10,
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  bottomPrice: {
    fontSize: 20,
    fontWeight: "700",
  },

  buyBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 14,
  },

  header: {
    backgroundColor: COLORS.accent,
    padding: 20,
    paddingTop: 55,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  headerTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "700",
  },

  headerSub: {
    color: "#D1FAF5",
    marginTop: 4,
  },

  search: {
    backgroundColor: COLORS.background,
    marginTop: 14,
    padding: 12,
    borderRadius: 14,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.accent,
  },

  price: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "700",
  },

  desc: {
    fontSize: 16,
    color: "#444",
    marginVertical: 16,
  },

  buyBtn: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  buyText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.background,
  },
  imageWrapper: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },

  author: {
    color: "#555",
    marginTop: 4,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#888",
  },

  discount: {
    color: COLORS.primary,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    color: COLORS.accent,
  },

  infoBox: {
    backgroundColor: "#E6FFFA",
    padding: 14,
    borderRadius: 14,
    marginTop: 14,
  },

  infoText: {
    color: COLORS.accent,
    marginBottom: 4,
  },

  reviewCard: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 14,
    marginTop: 10,
  },

  reviewUser: {
    fontWeight: "700",
  },

  reviewText: {
    color: "#444",
    marginTop: 4,
  },

  relatedCard: {
    width: 120,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 14,
    marginRight: 10,
  },
});
