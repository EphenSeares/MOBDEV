import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const CustomDrawer = (props) => {
  const { navigation } = props;

  return (
    <LinearGradient colors={["#0f0f0f", "#000"]} style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <LinearGradient colors={["#1DB954", "#1ed760"]} style={styles.profileCircle}>
            <Text style={styles.profileText}>HM</Text>
          </LinearGradient>
          <Text style={styles.username}>Honoka Masuda</Text>
          <Text style={styles.subtitle}>Premium Account</Text>
        </View>

        {/* Drawer Items */}
        <View style={styles.drawerItems}>
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => alert("Add Account pressed")}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="person-add" size={20} color="white" />
            </View>
            <Text style={styles.itemText}>Add Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => alert("What’s New pressed")}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="newspaper-outline" size={20} color="white" />
            </View>
            <Text style={styles.itemText}>What’s New</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => alert("Recent pressed")}
          >
            <View style={styles.iconCircle}>
              <MaterialIcons name="history" size={20} color="white" />
            </View>
            <Text style={styles.itemText}>Recent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="settings-outline" size={20} color="white" />
            </View>
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 MyMusic App</Text>
        </View> */}
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#1DB954",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  profileText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 3,
  },
  drawerItems: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 25,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "500",
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingVertical: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#555",
    fontSize: 12,
  },
});

export default CustomDrawer;
