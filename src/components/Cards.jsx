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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const { height } = Dimensions.get("window"); // Get screen height

const Cards = ({ activeCategory = [] }) => {
  const [openModals, setOpenModals] = useState({}); // Store modal states

  const toastMessageHandle = () => {
    Toast.show({
      type: "success",
      text1: "Saved!",
      position: "bottom",
    });
  };

  // const toggleModal = (index) => {
  //   setOpenModals((prev) => ({ ...prev, [index]: !prev[index] })); //
  // };

  const storeData = async (item) => {
    try {
      await AsyncStorage.setItem("storedItem", JSON.stringify(item));
      console.log("Data stored in localstorage");
    } catch (error) {
      console.log("Data haven't stored in localstorage");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={activeCategory}
        keyExtractor={(item, index) => item?.title || index.toString()}
        pagingEnabled
        snapToAlignment="end"
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (!item.urlToImage) return null;

          return (
            <View
              style={{
                height,
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
              <View
                style={{
                  height: 0.5,
                  backgroundColor: Color.blue,
                  width: 200,
                  marginTop: 10,
                }}
              />
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

              {/* Read More & Bookmark */}
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 320,
                  marginTop: 20,
                }}
              >
                {/* Read More */}
                <TouchableOpacity onPress={() => Linking.openURL(item?.url)}>
                  <Text style={{ color: Color.primary, fontSize: 22 }}>
                    Read More...
                  </Text>
                </TouchableOpacity>

                {/* Bookmark */}
                <TouchableOpacity
                  onPress={() => {
                    toastMessageHandle();
                    storeData(item);
                  }}
                >
                  <Ionicons name="bookmark" size={30} color={Color.blue} />
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
