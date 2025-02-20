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
  StatusBar
} from "react-native";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />

              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity 
                  style={styles.eyeButton} 
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image 
                    source={require("../assets/icons/eye-icon.png")}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginButton}>
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
    marginLeft: normalize(4),
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#230C02',
    
    fontSize: normalize(16),
    color: '#230C02',
    marginBottom: normalize(20),
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeButton: {
    position: 'absolute',
    right: 0,
    bottom: normalize(28),
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
    color: "#230C02",
    fontSize: normalize(14),
    textDecorationLine: 'underline', 
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
    color: "#834D1E",
    fontSize: normalize(14),
  },
  signupLink: {
    color: "#3B2F2F",
    fontSize: normalize(14),
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;