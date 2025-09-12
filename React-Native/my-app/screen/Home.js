import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons"; // ✅ Icons
import { LinearGradient } from "expo-linear-gradient"; // ✅ Gradient

const { width } = Dimensions.get("window");

const playlists = [
  { id: "1", title: "Chill Vibes", image: "https://i.imgur.com/X1y1KXx.jpeg" },
  { id: "2", title: "Top Hits 2025", image: "https://i.imgur.com/nI4b1Y3.jpeg" },
  { id: "3", title: "Focus Flow", image: "https://i.imgur.com/Lz8Sc1w.jpeg" },
  { id: "4", title: "Workout Pump", image: "https://i.imgur.com/JUq6sX0.jpeg" },
];

const categories = [
  { id: "1", name: "Made For You", icon: "heart" },
  { id: "2", name: "Trending", icon: "fire" },
  { id: "3", name: "Podcasts", icon: "mic" },
  { id: "4", name: "New Releases", icon: "star" },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#121212", "#000"]} style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logo}>Spotify</Text>
        <TouchableOpacity style={styles.avatar}>
          <Text style={styles.avatarText}>SS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Greeting */}
        <Text style={styles.greeting}>Welcome to Spotify 🎶</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#aaa" style={{ marginLeft: 10 }} />
          <TextInput
            placeholder="Search music, artists, or podcasts"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoryRow}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryBox}>
              <FontAwesome name={cat.icon} size={22} color="#fff" />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Playlist Section */}
        <Text style={styles.sectionTitle}>Your Playlists</Text>
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.playlistCard}
              onPress={() => navigation.navigate("Playlist")}
            >
              <Image source={{ uri: item.image }} style={styles.playlistImage} />
              <Text style={styles.playlistText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Discover Weekly Box - placed ABOVE bottom nav */}
      <TouchableOpacity
        style={styles.bigBox}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Playlist")}
      >
        <LinearGradient
          colors={["#1DB954", "#191414"]}
          style={styles.bigBoxGradient}
        >
          <FontAwesome name="music" size={36} color="#fff" />
          <Text style={styles.bigBoxText}>Discover Weekly</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="library" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  logo: { fontSize: 22, fontWeight: "bold", color: "#1DB954" },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  greeting: { fontSize: 24, fontWeight: "bold", color: "#fff", marginLeft: 20 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 25,
    height: 45,
  },
  searchInput: { color: "#fff", marginLeft: 10, flex: 1 },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  categoryBox: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    width: width * 0.22,
  },
  categoryText: { color: "#fff", fontSize: 12, marginTop: 6 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
    marginBottom: 12,
  },
  playlistCard: {
    marginLeft: 20,
    alignItems: "center",
    width: 120,
  },
  playlistImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },
  playlistText: { color: "#fff", fontSize: 14, textAlign: "center" },
  bigBox: {
    position: "absolute",
    bottom: 70, // ✅ Positioned just above bottom nav
    left: 20,
    right: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  bigBoxGradient: {
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bigBoxText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#111",
    borderTopWidth: 0.5,
    borderTopColor: "#333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Home;
