import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons"; // icons
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const playlistData = [
  { id: "1", title: "Lost in Japan", artist: "Shawn Mendes", image: "https://i.imgur.com/hZ1V2qC.png" },
  { id: "2", title: "Better Together", artist: "Jack Johnson", image: "https://i.imgur.com/EvFhB8z.png" },
  { id: "3", title: "Ocean Eyes", artist: "Billie Eilish", image: "https://i.imgur.com/Hv4gIQD.png" },
  { id: "4", title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar, Giveon", image: "https://i.imgur.com/5D7iWUE.png" },
  { id: "5", title: "Blinding Lights", artist: "The Weeknd", image: "https://i.imgur.com/3yF3n9v.png" },
  { id: "6", title: "Levitating", artist: "Dua Lipa ft. DaBaby", image: "https://i.imgur.com/9mJ9HTh.png" },
  { id: "7", title: "Heat Waves", artist: "Glass Animals", image: "https://i.imgur.com/vyyqV9H.png" },
];

const Playlist = () => {
  const navigation = useNavigation();

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
      {/* Header with image */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/lpBl9oQ.jpeg" }}
          style={styles.headerImage}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.overlay}
        />
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={styles.backText}>Home</Text>
        </TouchableOpacity>
        {/* Playlist Info */}
        <View style={styles.headerContent}>
          <Text style={styles.playlistName}>Chill Vibes</Text>
          <Text style={styles.playlistSubtitle}>7 songs • Updated today</Text>
        </View>
      </View>

      {/* Song List */}
      <FlatList
        data={playlistData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
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
