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
import Modal from "react-native-modal";

const { height } = Dimensions.get("window"); // Get screen height

const Cards = ({ activeCategory = [] }) => {
  const [openModals, setOpenModals] = useState({}); // Store modal states

  const toggleModal = (index) => {
    setOpenModals((prev) => ({ ...prev, [index]: !prev[index] })); //
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
                <TouchableOpacity onPress={() => toggleModal(index)}>
                  <Ionicons name="bookmark" size={30} color={Color.blue} />
                </TouchableOpacity>
              </View>

              {/* Modal */}
              <Modal
                isVisible={openModals[index]}
                onBackdropPress={() => toggleModal(index)}
              >
                <View
                  style={{
                    padding: 20,
                    backgroundColor: Color.lightestGray,
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    alignItems: "center",
                    marginTop:660,
                    height:200
                  }}
                >
                  <Text>Opened!</Text>
                  <TouchableOpacity
                    onPress={() => toggleModal(index)}
                    style={{ backgroundColor: Color.lightGray, padding: 10, borderRadius:5, marginTop:70, marginLeft:240 }}
                  >
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cards;
