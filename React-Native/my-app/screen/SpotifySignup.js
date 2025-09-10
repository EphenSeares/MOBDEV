import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SpotifySignup = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [gender, setGender] = useState("");

  const navigation = useNavigation();

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
      <LinearGradient
        colors={["#000000ff", "#1f1f1fff"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </LinearGradient>

      {/* Full Name Input */}
      <LinearGradient
        colors={["#000000ff", "#1f1f1fff"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
        />
      </LinearGradient>

      {/* Password Input */}
      <LinearGradient
        colors={["#000000ff", "#252525ff"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </LinearGradient>

      <View style={styles.dobRow}>
        <Text style={styles.label}>Date of Birth:</Text>
        <View style={styles.dobContainer}>
          <LinearGradient
            colors={["#000000ff", "#1f1f1fff"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.dobInputWrapper}
          >
            <TextInput
              style={styles.dobInput}
              placeholder="DD"
              placeholderTextColor="#999"
              maxLength={2}
              keyboardType="numeric"
              value={dobDay}
              onChangeText={setDobDay}
            />
          </LinearGradient>

          <LinearGradient
            colors={["#000000ff", "#1f1f1fff"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.dobInputWrapper}
          >
            <TextInput
              style={styles.dobInput}
              placeholder="MM"
              placeholderTextColor="#999"
              maxLength={2}
              keyboardType="numeric"
              value={dobMonth}
              onChangeText={setDobMonth}
            />
          </LinearGradient>

          <LinearGradient
            colors={["#000000ff", "#1f1f1fff"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.dobInputWrapper}
          >
            <TextInput
              style={styles.dobInput}
              placeholder="YY"
              placeholderTextColor="#999"
              maxLength={2}
              keyboardType="numeric"
              value={dobYear}
              onChangeText={setDobYear}
            />
          </LinearGradient>
        </View>
      </View>

      <View style={styles.genderRow}>
        <View style={styles.genderWrapper}>
          <TouchableOpacity
            style={[styles.genderCircle, gender === "Male" && styles.genderSelected]}
            onPress={() => setGender("Male")}
          />
          <Text style={styles.genderLabel}>Male</Text>
        </View>

        <View style={styles.genderWrapper}>
          <TouchableOpacity
            style={[styles.genderCircle, gender === "Female" && styles.genderSelected]}
            onPress={() => setGender("Female")}
          />
          <Text style={styles.genderLabel}>Female</Text>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign up with</Text>

      {/* Social Icons */}
      <View style={styles.icons}>
        <View style={styles.socialIcon}>
          <FontAwesome name="facebook" size={22} color="white" />
        </View>
        <View style={styles.socialIcon}>
          <AntDesign name="google" size={22} color="white" />
        </View>
      </View>

      {/* Login redirect */}
      <TouchableOpacity onPress={() => navigation.navigate("SpotifyLogin")}>
        <Text style={styles.signup}>
          Already have an account?{" "}
          <Text style={styles.signupLink}>Log In</Text>
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
    width: 100,
    height: 100,
    marginBottom: 5,
    marginTop: -40,
    tintColor: "#1DB954",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 50,
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

  dobRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    marginBottom: 15,
  },
  label: {
    color: "#18d860",
    fontWeight: "bold",
  },
  dobContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  dobInputWrapper: {
    width: 60,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  dobInput: {
    textAlign: "center",
    color: "white",
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  genderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  genderCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: "#444",
    backgroundColor: "#111",
    marginRight: 8,
    shadowColor: "#fff",
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 2.3,
    elevation: 4,
  },
  genderSelected: {
    backgroundColor: "#1DB954",
  },
  genderLabel: {
    color: "white",
    fontWeight: "bold",
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
    shadowColor: "#fff",
    shadowOffset: { width: -5, height: -7 },
    shadowOpacity: 0.2,
    shadowRadius: 2.3,
    elevation: 4,
  },

  // Signup Text
  signup: {
    color: "#4e4e4eff",
  },
  signupLink: {
    color: "#1DB954",
    fontWeight: "bold",
  },
});


export default SpotifySignup;
