import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SpotifyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("MainApp"); 
  };

  return (
    <LinearGradient
      colors={["#1f1f1fff", "#000000ff"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/174/174872.png" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Spotify</Text>

      {/* Username Input */}
      <LinearGradient colors={["#000000ff", "#1f1f1fff"]} style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </LinearGradient>

      {/* Password Input */}
      <LinearGradient colors={["#000000ff", "#252525ff"]} style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </LinearGradient>

      <Text style={styles.forgot}>Forgot password?</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Be Correct With</Text>

      {/* Social Icons */}
      <View style={styles.icons}>
        <View style={styles.socialIcon}>
          <FontAwesome name="facebook" size={22} color="white" />
        </View>
        <View style={styles.socialIcon}>
          <AntDesign name="google" size={22} color="white" />
        </View>
      </View>

      {/* Sign up redirect */}
      <TouchableOpacity onPress={() => navigation.navigate("SpotifySignup")}>
        <Text style={styles.signup}>
          Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 130,
    height: 130,
    marginTop: -40,
    marginBottom: 5,
    tintColor: "#1DB954",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 100,
  },

  inputWrapper: {
    width: "95%",
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "white",
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#888",
    fontSize: 12,
    marginRight: 15,
    marginBottom: 40,
  },

  signInButton: {
    backgroundColor: "#1DB954",
    width: "95%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  or: {
    color: "#18d860",
    marginBottom: 10,
  },

  icons: {
    flexDirection: "row",
    marginBottom: 30,
  },
  socialIcon: {
    width: 35,
    height: 35,
    borderRadius: 22.5,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 13,
    marginTop: 4,
  },

  signup: {
    color: "#4e4e4eff",
  },
  signupLink: {
    color: "#1DB954",
    fontWeight: "bold",
  },
});

export default SpotifyLogin;
