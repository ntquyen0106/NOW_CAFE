import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Footer from "../components/Footer";

const { width, height } = Dimensions.get("window");

export default function FaqScreen({ navigation }) {
  const [activeIndices, setActiveIndices] = useState({
    "ĐẶT HÀNG": [],
    "HOÀN TIỀN": [],
    "KHÁC": [],
  }); // Track which questions are open for each tab
  const [activeTab, setActiveTab] = useState("ĐẶT HÀNG"); // Track active tab

  const toggleAnswer = (index) => {
    const indices = activeIndices[activeTab];
    if (indices.includes(index)) {
      setActiveIndices({
        ...activeIndices,
        [activeTab]: indices.filter((i) => i !== index), // Close the question
      });
    } else {
      setActiveIndices({
        ...activeIndices,
        [activeTab]: [...indices, index], // Open the question
      });
    }
  };

  const renderQuestions = () => {
    const questions = {
      "ĐẶT HÀNG": [
        { question: "Làm cách nào để đặt hàng?", answer: "Để làm, cỡ đá một cách các món trong menu mặt trước, thích món nào chọn món đó..." },
        { question: "Tại sao ứng dụng yêu cầu vị trí?", answer: "Vì để chúng tôi có thể cung cấp các món ăn tại khu vực bạn đang sinh sống..." },
        { question: "Làm cách nào để nhận món tại cửa hàng?", answer: "Bạn có thể đến trực tiếp quầy nhận món khi có thông báo..." },
        { question: "Có thể lên lịch nhận thức uống không?", answer: "Có, bạn có thể đặt trước giờ nhận thức uống qua ứng dụng..." },
        { question: "Nên làm gì nếu đã thanh toán qua thẻ nhưng đơn hàng không được tạo?", answer: "Nếu gặp sự cố, bạn có thể liên hệ với chúng tôi để được hỗ trợ xử lý..." },
      ],
      "HOÀN TIỀN": [
        { question: "Làm cách nào để yêu cầu hoàn tiền?", answer: "Bạn có thể yêu cầu hoàn tiền qua mục hỗ trợ trong ứng dụng..." },
        { question: "Thời gian hoàn tiền mất bao lâu?", answer: "Thời gian hoàn tiền thường mất từ 5-7 ngày làm việc..." },
      ],
      "KHÁC": [
        { question: "Làm cách nào để thay đổi thông tin tài khoản?", answer: "Bạn có thể thay đổi thông tin tài khoản trong mục cài đặt..." },
        { question: "Làm cách nào để liên hệ với bộ phận hỗ trợ?", answer: "Bạn có thể liên hệ với bộ phận hỗ trợ qua mục liên hệ trong ứng dụng..." },
      ],
    };

    return questions[activeTab].map((item, index) => (
      <View key={index}>
        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(index)}
        >
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <Feather
            name={activeIndices[activeTab].includes(index) ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndices[activeTab].includes(index) && (
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        )}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#230C02" />
      </TouchableOpacity>

      <Text style={styles.title}>Câu Hỏi Thường Gặp</Text>

      <View style={styles.tab}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "ĐẶT HÀNG" && styles.activeTabItem]}
          onPress={() => setActiveTab("ĐẶT HÀNG")}
        >
          <Text style={[styles.tabText, activeTab === "ĐẶT HÀNG" && styles.activeTabText]}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "HOÀN TIỀN" && styles.activeTabItem]}
          onPress={() => setActiveTab("HOÀN TIỀN")}
        >
          <Text style={[styles.tabText, activeTab === "HOÀN TIỀN" && styles.activeTabText]}>HOÀN TIỀN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "KHÁC" && styles.activeTabItem]}
          onPress={() => setActiveTab("KHÁC")}
        >
          <Text style={[styles.tabText, activeTab === "KHÁC" && styles.activeTabText]}>KHÁC</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView style={styles.faqSection}>
          {renderQuestions()}
        </ScrollView>
      </View>
      
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F6F0",
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  tab: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'center',
  },
  tabItem: {
    marginRight: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#FFFACD",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#230C02",
  },
  activeTabItem: {
    backgroundColor: "#FFD700", 
  },
  activeTabText: {
    color: "#D83C3D",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  faqSection: {
    marginBottom: 20,
  },
  faqItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  faqQuestion: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#666",
    marginLeft: 20,
    backgroundColor: "#F9F6F0", 
    padding: 15,
    borderRadius: 8,
  },
});