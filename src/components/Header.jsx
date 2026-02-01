import { View, Text, StatusBar } from "react-native";
import Color from "./constants/Color";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
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
      <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} />
      <Ionicons name="arrow-back" size={25} color="black" />
      <Text
        style={{ fontSize: 30, fontWeight: "bold", color: Color.primary }}
      >
        The Insider
      </Text>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
};

export default Header;
