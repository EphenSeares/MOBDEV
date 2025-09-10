import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // ✅ Icons
import { LinearGradient } from "expo-linear-gradient"; // ✅ Gradient

const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#121212", "#000"]} style={styles.container}>
      {/* Drawer Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={34} color="#fff" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Welcome To Spotify 🎶</Text>
      <Text style={styles.subtitle}>Your music, your vibe</Text>

      {/* Playlist Box */}
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Playlist")}
      >
        <FontAwesome name="music" size={32} color="#fff" style={{ marginBottom: 10 }} />
        <Text style={styles.boxText}>Playlist</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 40,
  },
  box: {
    width: width * 0.7,
    height: 140,
    backgroundColor: "#1DB954",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1DB954",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },
  boxText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
