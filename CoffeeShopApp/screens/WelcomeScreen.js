import React from "react";
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from "react-native";

// Lấy kích thước màn hình
const { width, height } = Dimensions.get("window");

// Tính toán tỷ lệ scale dựa trên màn hình chuẩn (ví dụ: iPhone 8)
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

// Hàm để tính toán kích thước responsive
const normalize = (size) => {
  return Math.round(scale * size);
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <ImageBackground
        source={require("../assets/images/bg-welcome.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>COFFEE SHOP</Text>
            <Text style={styles.subtitle}>Enjoy the drink coffee.</Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    minHeight: height,
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(30),
    paddingHorizontal: normalize(20),
    marginTop: normalize(70),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: normalize(100),
  },
  title: {
    fontSize: normalize(40),
    fontWeight: "bold",
    color: "#230C02",
    marginBottom: normalize(20),
    textAlign: "center",
  },
  subtitle: {
    fontSize: normalize(18),
    color: "#230C02",
    marginBottom: normalize(30),
    textAlign: "center",
  },
  button: {
    width: normalize(250),
    backgroundColor: "#3B2F2F",
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(50),
    borderRadius: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(100),
  },
  buttonText: {
    color: "#EEDDC9",
    fontWeight: "bold",
    fontSize: normalize(16),
    textAlign: 'center',
  },
});

export default WelcomeScreen;
