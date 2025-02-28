import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert

} from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icons

const { width, height } = Dimensions.get("window");
const scale = Math.min(width, height) / 375;

const normalize = (size) => {
  const newSize = size * scale;
  if (width > 550) {
    return Math.round(newSize * 0.8);
  }
  return Math.round(newSize);
};

const OrDivider = () => {
  return (
    <View style={styles.orDividerContainer}>
      <View style={styles.orDividerLine} />
      <Text style={styles.orDividerText}>Or continue with</Text>
      <View style={styles.orDividerLine} />
    </View>
  );
};

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập tên đăng nhập và mật khẩu!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: username, passWord: password }), // Nếu API nhận passWord thì giữ nguyên
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.success) {
        Alert.alert("Thành công", "Đăng nhập thành công!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Thất bại", data.message || "Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      Alert.alert(
        "Lỗi",
        error.message.includes("Network request failed")
          ? "Không thể kết nối đến server! Vui lòng kiểm tra mạng."
          : "Đã có lỗi xảy ra, vui lòng thử lại sau."
      );
    }
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        contentContainerStyle={styles.container}
        bounces={false}
      >
        <ImageBackground
          source={require("../assets/images/bg-welcome.png")} 
          style={styles.background}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image 
              source={require("../assets/icons/back-arrow.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.title}>Back!</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                underlineColorAndroid="transparent" // Bỏ viền ô khi nhấp chuột vào
              />

              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  underlineColorAndroid="transparent" 
                />
                <TouchableOpacity 
                  style={styles.eyeButton} 
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather 
                    name={showPassword ? "eye" : "eye-off"} 
                    size={24} 
                    color="#230C02" 
                    style={styles.eyeIcon} 
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginButton}
              onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <OrDivider />

              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image 
                    source={require("../assets/icons/google.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image 
                    source={require("../assets/icons/facebook.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image 
                    source={require("../assets/icons/apple.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.signupLink}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEDDC9',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flexGrow: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: normalize(30),
    left: normalize(20),
    zIndex: 1,
  },
  backIcon: {
    width: normalize(20),
    height: normalize(20),
    tintColor: "#230C02",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
  },
  textContainer: {
    alignItems: 'flex-start', 
    width: '100%',
    marginBottom: normalize(20),
    marginTop: normalize(270),
  },
  title: {
    fontSize: normalize(32),
    fontWeight: "bold",
    color: "#230C02",
    lineHeight: normalize(40),
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start', 
  },
  inputLabel: {
    color: '#230C02',
    fontSize: normalize(15),
    marginBottom: normalize(8),
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#230C02',
    fontSize: normalize(16),
    color: '#230C02',
    marginBottom: normalize(20),
    outlineStyle: 'none',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeButton: {
    position: 'absolute',
    right: normalize(0), 
    bottom: normalize(25), 
  },
  eyeIcon: {
    width: normalize(24), 
    height: normalize(24), 
    tintColor: '#230C02',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginBottom: normalize(30),
  },
  forgotPasswordText: {
    color: "#834D1E",
    fontSize: normalize(14),
    textDecorationLine: 'underline', 
    fontWeight: "bold",
  },
  loginButton: {
    width: '100%',
    backgroundColor: "#3B2F2F",
    paddingVertical: normalize(15),
    borderRadius: normalize(30),
    alignItems: 'center',
    marginBottom: normalize(30),
  },
  loginButtonText: {
    color: "#EEDDC9",
    fontWeight: "600",
    fontSize: normalize(16),
  },
  orDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  orDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#230C02',
  },
  orDividerText: {
    color: "#230C02",
    fontSize: normalize(14),
    marginHorizontal: normalize(15),
    fontWeight: "bold",
  },
  socialButtonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  socialButton: {
    width: normalize(40),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
  },
  signupContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  signupText: {
    color: "#3B2F2F",
    fontSize: normalize(14),
    fontWeight: "bold",
  },
  signupLink: {
    color: "#834D1E",
    fontSize: normalize(14),
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;