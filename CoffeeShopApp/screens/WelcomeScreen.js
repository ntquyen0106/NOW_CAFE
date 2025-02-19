import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/bg-welcome.png")}
      style={styles.background}
    >
      <View style={styles.overlay} />
      
      {/* Nội dung */}
      <View style={styles.content}>
        <Text style={styles.title}>COFFEE SHOP</Text>
        <Text style={styles.subtitle}>Enjoy the drink coffee.</Text>

        {/* Nút "SHOP NOW" */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// **Styles**
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Hiệu ứng làm mờ ảnh nền
  },
  content: {
    alignItems: "center",
    position: "absolute",
    bottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3B2F2F",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#3B2F2F",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#3B2F2F",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default WelcomeScreen;
