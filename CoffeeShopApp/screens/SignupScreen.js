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
  ImageBackground
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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg-welcome.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require("../assets/icons/back-arrow.png")} style={styles.backIcon} />
          </TouchableOpacity>

          <View style={styles.innerContainer}>
            <Text style={styles.title}>Welcome Back!</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#B1A99F"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Number Phone"
              placeholderTextColor="#B1A99F"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#B1A99F"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#B1A99F"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>I have an account already? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signupLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: normalize(40),
    paddingHorizontal: normalize(20),
  },
  backButton: {
    position: 'absolute',
    top: normalize(30),
    left: normalize(20),
  },
  backIcon: {
    width: normalize(15),
    height: normalize(15),
    tintColor: "#230C02",
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: normalize(30),
    fontWeight: "bold",
    color: "#230C02",
    marginBottom: normalize(30),
  },
  input: {
    width: normalize(250),
    backgroundColor: "#F5F5F5",
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(15),
    borderRadius: normalize(30),
    marginVertical: normalize(10),
    fontSize: normalize(16),
  },
  button: {
    width: normalize(250),
    backgroundColor: "#3B2F2F",
    paddingVertical: normalize(15),
    borderRadius: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalize(20),
  },
  buttonText: {
    color: "#EEDDC9",
    fontWeight: "bold",
    fontSize: normalize(16),
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: normalize(20),
  },
  signupText: {
    color: "#230C02",
    fontSize: normalize(14),
  },
  signupLink: {
    color: "#3B2F2F",
    fontSize: normalize(14),
    fontWeight: "bold",
  },
});

export default SignUpScreen;
