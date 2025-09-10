import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.option}>
          <Feather name="user" size={22} color="#1DB954" />
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Feather name="bell" size={22} color="#1DB954" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Feather name="lock" size={22} color="#1DB954" />
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="info-outline" size={22} color="#1DB954" />
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.logout]} onPress={() => navigation.navigate("SpotifyLogin")}>
          <AntDesign name="logout" size={22} color="red" />
          <Text style={[styles.optionText, { color: "red" }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingTop: 40 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 15, marginBottom: 20 },
  headerText: { color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 15 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  option: { flexDirection: "row", alignItems: "center", backgroundColor: "#111", padding: 15, borderRadius: 10, marginBottom: 15 },
  optionText: { color: "white", fontSize: 16, marginLeft: 15 },
  logout: { marginTop: 20, backgroundColor: "#1a1a1a" },
});

export default Settings;
