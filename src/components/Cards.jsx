import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const Cards = ({ activeCategory = [] }) => {
  //   console.log(activeCategory);
  return (
    <View>
      <FlatList
        style={{ marginHorizontal: 30 }}
        data={activeCategory}
        renderItem={({ item }) => (
          <View
            style={{
              height: 400,
              width: 300,
              backgroundColor: "#C4D9FF",
              marginTop: 50,
              //   marginHorizontal: 50,
            }}
          >
            <View style={{ paddingTop: 20, marginHorizontal: 50 }}>
              <Image
                style={{ height: 150, width: "100%" }}
                source={{ uri: item.urlToImage }}
              />
            </View>
            <Text style={{ paddingTop: 50 }}>{item?.title}</Text>
            <Text style={{ paddingTop: 100 }}>{item?.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cards;
