import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const Index = () => {
  const [retrivedItems, setRetrivedItems] = useState([]);

  useFocusEffect(
    useCallback(() => {
      retrieveData();
    }, [])
  )

  const retrieveData = async () => {
    try {
      const storedItem = await AsyncStorage.getItem("storedItem");
      console.log("Raw stored data:", storedItem);
      if (storedItem !== null) {
        const parsedData = JSON.parse(storedItem);
        console.log("Parsed data:", parsedData);
        console.log("Is array?", Array.isArray(parsedData));
        console.log("Data length:", Array.isArray(parsedData) ? parsedData.length : 1);
        setRetrivedItems(Array.isArray(parsedData) ? parsedData : [parsedData]);
      } else {
        console.log("Data hadn't found");
        setRetrivedItems([]);
      }
    } catch (error) {
      console.log(error);
      setRetrivedItems([]);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      {retrivedItems.length > 0 ? (
        <FlatList
          data={retrivedItems}
          keyExtractor={(item, index) => item?.title || index.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#E8F9FF",
                borderRadius: 10,
                borderColor: "#C4D9FF",
                borderWidth: 0.8,
                elevation: 3,
                marginBottom: 15,
              }}
            >
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                {item?.urlToImage ? (
                  <Image
                    style={{
                      height: 120,
                      width: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                    source={{ uri: item.urlToImage }}
                  />
                ) : (
                  <Text>No Image Available</Text>
                )}
              </View>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: 5,
                }}
              >
                Author: {item?.author || "No Author"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  textAlign: "justify",
                  lineHeight: 22,
                  color: "#444",
                }}
              >
                {item?.description || "No description available"}
              </Text>
            </View>
          )}
        />
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>No Saved Items</Text>
        </View>
      )}
    </View>
  );
};

export default Index;
