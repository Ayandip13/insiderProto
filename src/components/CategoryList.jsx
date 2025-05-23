import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Color from "../components/constants/Color.js";

const CategoryList = ({ active, setActive }) => {
  const categoryList = [
    { id: 1, name: "Latest" },
    { id: 2, name: "World" },
    { id: 3, name: "Business" },
    { id: 4, name: "Football" },
    { id: 5, name: "Movie" },
    { id: 6, name: "Geopolitics" },
    { id: 7, name: "Health" },
  ];

  // console.log(active);

  return (
    <View style={{ marginLeft: 22, marginRight:22 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categoryList}
        renderItem={({ item }) => {
          const isActive = item.id === active?.id; // Safe check
          return (
            <TouchableOpacity onPress={() => setActive(item)}>
              <Text
                style={{
                  fontSize: 18,
                  color: isActive ? Color.primary : Color.gray,
                  fontWeight: "800",
                  marginTop: 10,
                  marginHorizontal: 12,
                  marginBottom: 40,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryList;
