import { Drawer } from "expo-router/drawer";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
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
    </>
  );
}
