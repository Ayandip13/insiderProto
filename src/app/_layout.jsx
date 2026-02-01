import { Drawer } from "expo-router/drawer";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="Home/index"
        screenOptions={{
          headerShown: false, // Hide the default header
        }}
      >
        <Drawer.Screen
          name="Home/index"
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="Saved/index"
          options={{
            drawerLabel: "Saved",
          }}
        />
      </Drawer>
      <Toast />
    </GestureHandlerRootView>
  );
}
