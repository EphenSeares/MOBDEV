import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SpotifyLogin from "./screen/SpotifyLogin";
import SpotifySignup from "./screen/SpotifySignup";
import Playlist from "./screen/Playlist";
import Home from "./screen/Home";
import Settings from "./screen/Settings";
import CustomDrawer from "./screen/CustomDrawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Screens
function DrawerScreens() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#000", width: 260 },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Playlist" component={Playlist} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SpotifyLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SpotifyLogin" component={SpotifyLogin} />
        <Stack.Screen name="SpotifySignup" component={SpotifySignup} />
        <Stack.Screen name="MainApp" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
