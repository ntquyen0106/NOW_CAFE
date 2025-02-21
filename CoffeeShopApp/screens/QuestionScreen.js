import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Feather } from "@expo/vector-icons"; 

const { width, height } = Dimensions.get("window");

export default function FaqScreen() {
  const [activeIndex, setActiveIndex] = useState(null);  // Track which question is open

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If the same question is clicked, close it
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Câu Hỏi Thường Gặp</Text>

      {/* Order Section */}
      <View style={styles.tab}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>HOÀN TIỀN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>KHÁC</Text>
        </TouchableOpacity>
      </View>

      {/* Frequently Asked Questions */}
      <View style={styles.faqSection}>
        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(0)} // Toggle answer for the first question
        >
          <Text style={styles.faqQuestion}>Làm cách nào để đặt hàng?</Text>
          <Feather
            name={activeIndex === 0 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndex === 0 && (
          <Text style={styles.faqAnswer}>
            Để làm, cỡ đá một cách các món trong menu mặt trước, thích món nào chọn món đó...
          </Text>
        )}

        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(1)} // Toggle answer for the second question
        >
          <Text style={styles.faqQuestion}>Tại sao ứng dụng yêu cầu vị trí?</Text>
          <Feather
            name={activeIndex === 1 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndex === 1 && (
          <Text style={styles.faqAnswer}>
            Vì để chúng tôi có thể cung cấp các món ăn tại khu vực bạn đang sinh sống...
          </Text>
        )}

        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(2)} // Toggle answer for the third question
        >
          <Text style={styles.faqQuestion}>Làm cách nào để nhận món tại cửa hàng?</Text>
          <Feather
            name={activeIndex === 2 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndex === 2 && (
          <Text style={styles.faqAnswer}>
            Bạn có thể đến trực tiếp quầy nhận món khi có thông báo...
          </Text>
        )}

        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(3)} // Toggle answer for the fourth question
        >
          <Text style={styles.faqQuestion}>Có thể lên lịch nhận thức uống không?</Text>
          <Feather
            name={activeIndex === 3 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndex === 3 && (
          <Text style={styles.faqAnswer}>
            Có, bạn có thể đặt trước giờ nhận thức uống qua ứng dụng...
          </Text>
        )}

        <TouchableOpacity
          style={styles.faqItem}
          onPress={() => toggleAnswer(4)} // Toggle answer for the fifth question
        >
          <Text style={styles.faqQuestion}>Nên làm gì nếu đã thanh toán qua thẻ nhưng đơn hàng không được tạo?</Text>
          <Feather
            name={activeIndex === 4 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#230C02"
          />
        </TouchableOpacity>
        {activeIndex === 4 && (
          <Text style={styles.faqAnswer}>
            Nếu gặp sự cố, bạn có thể liên hệ với chúng tôi để được hỗ trợ xử lý...
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F6F0",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  tab: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabItem: {
    marginRight: 15,
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#230C02",
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
    marginBottom: 10,
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
    marginTop: 5,
  },
});
