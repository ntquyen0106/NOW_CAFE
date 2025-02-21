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

export default function TermsOfServiceScreen({ navigation }) {
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
          <Text style={styles.title}>Điều Khoản Dịch Vụ</Text>
          
          <Text style={styles.contentText}>
            Để sử dụng các chức năng mới nhất định của Ứng dụng của chúng tôi, bạn sẽ cần phải đăng ký tài khoản. Bạn đồng ý bảo mật mật khẩu của mình và sẽ chịu trách nhiệm cho tất cả các việc sử dụng tài khoản và mật khẩu của bạn.
            Chúng tôi có quyền xóa, thay lại, từ chối hoặc yêu cầu thay đổi tên người dùng mà bạn chọn nếu chúng tôi xác định, theo quyết định riêng của chúng tôi, tên người dùng đó không phù hợp hoặc bị phản đối.
          </Text>

          <Text style={styles.contentText}>
            Ngoài ra, bạn cam kết sẽ không sử dụng tài khoản của mình để vi phạm bất kỳ điều khoản nào trong dịch vụ hoặc sử dụng dịch vụ vào mục đích trái phép. Nếu có bất kỳ hành vi vi phạm nào, chúng tôi có quyền tạm dừng hoặc xóa tài khoản của bạn.
          </Text>

          <Text style={styles.contentText}>
            Bằng việc tiếp tục sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân theo tất cả các điều khoản và chính sách mà chúng tôi đề ra, bao gồm việc sử dụng dịch vụ đúng mục đích và không vi phạm quy định pháp lý của quốc gia.
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