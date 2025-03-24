import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import Color from "./constants/Color";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window"); // Get screen height

const Cards = ({ activeCategory = [] }) => {
  const [save, setSave] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={activeCategory}
        keyExtractor={(item, index) => item?.title || index.toString()}
        pagingEnabled // Ensures only one card shows at a time
        snapToAlignment="end" // Ensures snapping to each card
        snapToInterval={height} // Each card will take up full screen height
        decelerationRate="fast" // Smooth scrolling effect
        // contentContainerStyle={{ paddingBottom: height }} // Prevents extra spacing at the bottom
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (!item.urlToImage) return null;

          return (
            <View
              style={{
                height, // Full screen height
                width: "100%",
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ marginTop: -30 }}>
                <Image
                  style={{ height: 220, width: 320, borderRadius: 10 }}
                  source={{ uri: item.urlToImage }}
                  // resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 22,
                  paddingHorizontal: 15,
                  fontWeight: "bold",
                }}
              >
                {item?.title}
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 18,
                  paddingHorizontal: 17,
                  color: "#183B4E",
                  textAlign: "center",
                }}
              >
                {item?.description}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{ top: 105, left: 105 }}
                  onPress={() => Linking.openURL(item?.url)}
                >
                  <Text style={{ color: Color.primary, fontSize: 24 }}>
                    Read More
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSave((prev) => !prev)}>
                  <Ionicons
                    style={{ top: 97, right: 165 }}
                    name={save ? "bookmark-sharp" : "bookmark-outline"}
                    size={30}
                    color={Color.gray}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cards;
