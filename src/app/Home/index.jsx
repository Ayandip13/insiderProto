import { View, Text, StatusBar } from "react-native";
import React from "react";
import Color from "../../components/constants/Color.js";
import { Ionicons } from "@expo/vector-icons";
import CategoryList from "../../components/CategoryList.jsx";

const HomePage = () => {
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
        <StatusBar backgroundColor="#fff" />
        <Ionicons name="arrow-back" size={25} color="black" />
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: Color.primary }}
        >
          The Insider
        </Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <CategoryList />
    </View>
  );
};

export default HomePage;
