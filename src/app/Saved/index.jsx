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
import { ScrollView, TextInput } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const COLORS = {
  primary: "#30E6C7",
  background: "#F7F9F6",
  accent: "#0F766E",
};

export default function ProductScreen() {
  const [count, setCount] = useState(0);
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
        {/* IMAGE PLACEHOLDER */}
        <View style={styles.imageBox}>
          <Text style={{ color: "#888" }}>Book Cover</Text>
        </View>

        {/* TITLE + RATING */}
        <Text style={styles.title}>Atomic Habits</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ 4.8</Text>
          <Text style={styles.review}>(12,430 reviews)</Text>
        </View>

        {/* PRICE */}
        <Text style={styles.price}>₹399</Text>

        {/* DELIVERY */}
        <View style={styles.deliveryBox}>
          <Text style={styles.deliveryText}>🚚 Free delivery in 2 days</Text>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          Build good habits, break bad ones — simple and powerful.
        </Text>

        {/* QUANTITY */}
        <View style={styles.qtyRow}>
          <TouchableOpacity onPress={() => { count > 0 && setCount(count - 1) }} style={styles.qtyBtn}><Text style={{ color: COLORS.background }}>-</Text></TouchableOpacity>
          <Text style={styles.qty}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.qtyBtn}><Text style={{ color: COLORS.background }}>+</Text></TouchableOpacity>
        </View>

        {/* WISHLIST */}
        <TouchableOpacity style={styles.wishlist}>
          <Text style={{ color: COLORS.accent }}>♡ Add to Wishlist</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* STICKY BOTTOM CTA */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>₹399</Text>
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
});
