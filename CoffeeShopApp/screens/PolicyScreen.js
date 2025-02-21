import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from "react-native";
import { Feather } from "@expo/vector-icons"; 
import Footer from "../components/Footer"; // Import Footer component

const { width, height } = Dimensions.get("window");

export default function PolicyScreen({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#230C02" />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Chính Sách Bảo Mật</Text>
          
          <Text style={styles.contentText}>
            Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng của chúng tôi.
          </Text>

          <Text style={styles.contentText}>
            Khi bạn đăng ký tài khoản, chúng tôi sẽ thu thập thông tin cá nhân như tên, địa chỉ email và số điện thoại của bạn. Chúng tôi sử dụng thông tin này để cung cấp và cải thiện dịch vụ của chúng tôi, liên hệ với bạn về tài khoản của bạn và gửi cho bạn các thông báo quan trọng.
          </Text>

          <Text style={styles.contentText}>
            Chúng tôi sẽ không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào mà không có sự đồng ý của bạn, trừ khi được yêu cầu bởi pháp luật hoặc để bảo vệ quyền lợi của chúng tôi.
          </Text>

          <Text style={styles.contentText}>
            Bạn có quyền truy cập, cập nhật và xóa thông tin cá nhân của mình bất cứ lúc nào bằng cách đăng nhập vào tài khoản của bạn và chỉnh sửa thông tin cá nhân của bạn hoặc liên hệ với chúng tôi.
          </Text>
        </ScrollView>

        <Footer /> {/* Add Footer component */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F9F6F0",
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  mainContainer: {
    flex: 1,
    marginTop: 50, // Adjust to move content below the back button
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
});