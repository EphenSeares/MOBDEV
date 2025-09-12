import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const allSongs = [
  { id: "1", title: "Lost in Japan", artist: "Shawn Mendes", genre: "Pop", image: "https://i.imgur.com/hZ1V2qC.png", fav: true, history: false },
  { id: "2", title: "Better Together", artist: "Jack Johnson", genre: "Acoustic", image: "https://i.imgur.com/EvFhB8z.png", fav: false, history: true },
  { id: "3", title: "Ocean Eyes", artist: "Billie Eilish", genre: "Indie", image: "https://i.imgur.com/Hv4gIQD.png", fav: true, history: true },
  { id: "4", title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar, Giveon", genre: "R&B", image: "https://i.imgur.com/5D7iWUE.png", fav: false, history: true },
  { id: "5", title: "Blinding Lights", artist: "The Weeknd", genre: "Pop", image: "https://i.imgur.com/3yF3n9v.png", fav: true, history: false },
  { id: "6", title: "Levitating", artist: "Dua Lipa ft. DaBaby", genre: "Dance", image: "https://i.imgur.com/9mJ9HTh.png", fav: false, history: true },
  { id: "7", title: "Heat Waves", artist: "Glass Animals", genre: "Indie", image: "https://i.imgur.com/vyyqV9H.png", fav: false, history: false },
];

const genres = ["All", "Pop", "Acoustic", "Indie", "R&B", "Dance"];

const Playlist = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filterSongs = () => {
    let data = allSongs;
    if (activeTab === "Favorites") {
      data = data.filter((song) => song.fav);
    } else if (activeTab === "History") {
      data = data.filter((song) => song.history);
    }
    if (selectedGenre !== "All") {
      data = data.filter((song) => song.genre === selectedGenre);
    }
    return data;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.albumArt} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {item.artist}
        </Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Entypo name="dots-three-vertical" size={18} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/lpBl9oQ.jpeg" }}
          style={styles.headerImage}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.overlay}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={styles.backText}>Home</Text>
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.playlistName}>Chill Vibes</Text>
          <Text style={styles.playlistSubtitle}>
            {filterSongs().length} songs • Updated today
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {["All", "Favorites", "History"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Genre Filter (Horizontal Scroll) */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.genreScroll}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {genres.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.genreChip,
              selectedGenre === item && styles.activeGenreChip,
            ]}
            onPress={() => setSelectedGenre(item)}
          >
            <Text
              style={[
                styles.genreText,
                selectedGenre === item && styles.activeGenreText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Song List */}
      <FlatList
        data={filterSongs()}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    height: 220,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
  },
  headerContent: {
    position: "absolute",
    bottom: 20,
    left: 15,
  },
  playlistName: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  playlistSubtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    marginHorizontal: 15,
    padding: 5,
  },
  tabButton: {
    flex: 1, // fixed width (equal spacing)
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 15,
    marginHorizontal: 3,
  },
  activeTabButton: {
    backgroundColor: "#1DB954",
  },
  tabText: {
    color: "#aaa",
    fontSize: 14,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  genreScroll: {
    marginVertical: 10,
  },
  genreChip: {
    minWidth: 80, // fixed width so it won’t resize
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    marginRight: 10,
  },
  activeGenreChip: {
    backgroundColor: "#1DB954",
  },
  genreText: {
    color: "#aaa",
    fontSize: 14,
  },
  activeGenreText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 10,
  },
  albumArt: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  artist: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 2,
  },
  menuButton: {
    paddingHorizontal: 8,
  },
});

export default Playlist;
