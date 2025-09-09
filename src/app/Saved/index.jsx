import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [retrivedItem, setRetrivedItem] = useState(null);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const storedItem = await AsyncStorage.getItem("storedItem");
      if (storedItem !== null) {
        const parsedData = JSON.parse(storedItem);
        setRetrivedItem(Array.isArray(parsedData) ? parsedData[0] : parsedData);
      } else {
        console.log("Data hadn't found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 20,
      }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    >
      <View
        style={{
          width: "90%",
          padding: 10,
          backgroundColor: "#E8F9FF",
          borderRadius: 10,
          borderColor: "#C4D9FF",
          borderWidth: 0.8,
          elevation: 3,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          {retrivedItem?.urlToImage ? (
            <Image
              style={{
                height: 120,
                width: "100%",
                borderRadius: 10,
                resizeMode: "cover",
              }}
              source={{ uri: retrivedItem.urlToImage }}
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
          Author: {retrivedItem?.author || "No Author"}
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: "justify",
            lineHeight: 22,
            color: "#444",
          }}
        >
          {retrivedItem?.description || "No description available"}
        </Text>
      </View>
    </View>
  );
};

export default Index;
