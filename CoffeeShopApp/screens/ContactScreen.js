import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Footer from "../components/Footer";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function SupportScreen({ navigation }) {
  const [activeIndices, setActiveIndices] = useState([]); // Track which sections are open
  const [isChatVisible, setIsChatVisible] = useState(false); // Track chat visibility
  const [chatMessage, setChatMessage] = useState(""); // To store the message typed by the user
  const [chatHistory, setChatHistory] = useState([]); // To store chat history

  const toggleAnswer = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the section
    } else {
      setActiveIndices([...activeIndices, index]); // Open the section
    }
  };

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible); // Toggle chat window visibility
  };

  const handlePressOutside = () => {
    // Only dismiss keyboard when not interacting with chat
    if (!isChatVisible) {
      Keyboard.dismiss();
    }
  };

  const sendMessage = async () => {
    if (chatMessage.trim()) {
      const userMessage = chatMessage.trim();
      // Chỉ thêm tin nhắn người dùng một lần vào lịch sử
      const updatedHistory = [
        ...chatHistory,
        { sender: "user", message: userMessage },
      ];
      setChatHistory(updatedHistory);
      setChatMessage(""); // Xóa input sau khi gửi

      const botResponse = await getCohereResponse(userMessage); // Gọi API
      // Thêm phản hồi của bot vào lịch sử
      setChatHistory([
        ...updatedHistory,
        { sender: "bot", message: botResponse },
      ]);
    }
  };

  const getCohereResponse = async (userMessage) => {
    const API_KEY = "3LRgcGf1oXepT31AcVdu0a9L1uQnW8jAaqh8WjSP";
    const endpoint = "https://api.cohere.ai/v1/chat";

    try {
      const response = await axios.post(
        endpoint,
        {
          message: userMessage,
          chat_history: chatHistory.map((chat) => ({
            role: chat.sender === "user" ? "USER" : "CHATBOT",
            message: chat.message,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const botResponse = response.data.text;
      return botResponse;
    } catch (error) {
      console.error(
        "Error in Cohere API:",
        error.response?.data || error.message
      );
      return "Sorry, I couldn't process that right now.";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#230C02" />
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={handlePressOutside} accessible={false}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Hỗ Trợ</Text>

          <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {/* Support Sections */}
              <View style={styles.supportSection}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleAnswer(0)}
                >
                  <Feather
                    name="headphones"
                    size={24}
                    color="#230C02"
                    style={styles.icon}
                  />
                  <Text style={styles.itemText}>Customer Service</Text>
                  <Feather
                    name={
                      activeIndices.includes(0) ? "chevron-up" : "chevron-down"
                    }
                    size={24}
                    color="#230C02"
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                {activeIndices.includes(0) && (
                  <Text style={styles.answerText}>
                    Call us at{" "}
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL("tel:0838849375")}
                    >
                      0838849375
                    </Text>{" "}
                    or email{" "}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL("mailto:minhquang.yi@gmail.com")
                      }
                    >
                      minhquang.yi@gmail.com
                    </Text>{" "}
                    for assistance.
                  </Text>
                )}
              </View>

              <View style={styles.supportSection}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleAnswer(1)}
                >
                  <Feather
                    name="globe"
                    size={24}
                    color="#230C02"
                    style={styles.icon}
                  />
                  <Text style={styles.itemText}>Website</Text>
                  <Feather
                    name={
                      activeIndices.includes(1) ? "chevron-up" : "chevron-down"
                    }
                    size={24}
                    color="#230C02"
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                {activeIndices.includes(1) && (
                  <Text style={styles.answerText}>
                    Visit our website at{" "}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL("https://imissmycafe.com/")
                      }
                    >
                      https://imissmycafe.com/
                    </Text>{" "}
                    for more information.
                  </Text>
                )}
              </View>

              <View style={styles.supportSection}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleAnswer(2)}
                >
                  <Feather
                    name="facebook"
                    size={24}
                    color="#230C02"
                    style={styles.icon}
                  />
                  <Text style={styles.itemText}>Facebook</Text>
                  <Feather
                    name={
                      activeIndices.includes(2) ? "chevron-up" : "chevron-down"
                    }
                    size={24}
                    color="#230C02"
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                {activeIndices.includes(2) && (
                  <Text style={styles.answerText}>
                    Find us on Facebook:{" "}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.facebook.com/minhquang.tran.9822/"
                        )
                      }
                    >
                      https://www.facebook.com/minhquang.tran.9822/
                    </Text>
                  </Text>
                )}
              </View>

              <View style={styles.supportSection}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleAnswer(3)}
                >
                  <Feather
                    name="instagram"
                    size={24}
                    color="#230C02"
                    style={styles.icon}
                  />
                  <Text style={styles.itemText}>Instagram</Text>
                  <Feather
                    name={
                      activeIndices.includes(3) ? "chevron-up" : "chevron-down"
                    }
                    size={24}
                    color="#230C02"
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                {activeIndices.includes(3) && (
                  <Text style={styles.answerText}>
                    Follow us on Instagram:{" "}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.instagram.com/_minhhquag.263/"
                        )
                      }
                    >
                      https://www.instagram.com/_minhhquag.263/
                    </Text>
                  </Text>
                )}
              </View>
            </ScrollView>
          </View>

          <Footer />
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity style={styles.chatBubble} onPress={toggleChat}>
        <Feather name="message-circle" size={30} color="#fff" />
      </TouchableOpacity>

      {isChatVisible && (
        <View style={styles.chatWindowContainer}>
          <View style={styles.chatWindow}>
            <View style={styles.chatHeader}>
              <Text style={styles.chatHeaderText}>Chat với chúng tôi</Text>
              <TouchableOpacity onPress={toggleChat}>
                <Feather name="x" size={24} color="#230C02" />
              </TouchableOpacity>
            </View>
            <View style={styles.chatBody}>
              <ScrollView style={styles.chatHistory}>
                {chatHistory.map((chat, index) => (
                  <View
                    key={index}
                    style={
                      chat.sender === "user"
                        ? styles.userMessage
                        : styles.botMessage
                    }
                  >
                    <Text>{chat.message}</Text>
                  </View>
                ))}
              </ScrollView>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.chatInput}
                  placeholder="Nhập câu hỏi của bạn..."
                  value={chatMessage}
                  onChangeText={setChatMessage}
                  autoCapitalize="none"
                  multiline={false}
                  onSubmitEditing={sendMessage} // Thêm sự kiện onSubmitEditing
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={sendMessage}
                >
                  <Feather name="send" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.chatPointer} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F6F0",
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    marginTop: 30,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  supportSection: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  icon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  answerText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 40,
    marginTop: 5,
    paddingBottom: 10,
  },
  link: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
  chatBubble: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#D83C3D",
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  chatWindowContainer: {
    position: "absolute",
    bottom: 170,
    right: 20,
    zIndex: 2,
    alignItems: "flex-end",
  },
  chatWindow: {
    backgroundColor: "#fff",
    padding: 15,
    width: width * 0.8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Hiệu ứng bóng đổ trên Android
  },
  chatPointer: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 15,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#fff",
    marginRight: 20,
    marginTop: -1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 10,
  },
  chatHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  chatBody: {
    paddingVertical: 10,
  },
  chatHistory: {
    maxHeight: 250,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderRadius: 15,
    padding: 12,
    marginBottom: 8,
    marginLeft: 60, // Để tạo khoảng cách với bong bóng bot
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F0F0",
    borderRadius: 15,
    padding: 12,
    marginBottom: 8,
    marginRight: 60, // Để tạo khoảng cách với bong bóng user
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  chatInput: {
    flex: 1,
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    marginRight: 10,
    fontSize: 14,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sendButton: {
    backgroundColor: "#D83C3D",
    padding: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
