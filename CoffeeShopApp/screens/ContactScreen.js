import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons"; 
import Footer from "../components/Footer";

const { width, height } = Dimensions.get("window");

export default function SupportScreen({ navigation }) {
  const [activeIndices, setActiveIndices] = useState([]); // Track which sections are open

  const toggleAnswer = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the section
    } else {
      setActiveIndices([...activeIndices, index]); // Open the section
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

      <Text style={styles.title}>Hỗ Trợ</Text>

      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.supportSection}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleAnswer(0)}
            >
              <Feather name="headphones" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.itemText}>Customer Service</Text>
              <Feather 
                name={activeIndices.includes(0) ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#230C02" 
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            {activeIndices.includes(0) && (
              <Text style={styles.answerText}>
                Call us at <Text style={styles.link} onPress={() => Linking.openURL('tel:0838849375')}>0838849375</Text> or email <Text style={styles.link} onPress={() => Linking.openURL('mailto:minhquang.yi@gmail.com')}>minhquang.yi@gmail.com</Text> for assistance.
              </Text>
            )}
          </View>

          <View style={styles.supportSection}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleAnswer(1)}
            >
              <Feather name="globe" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.itemText}>Website</Text>
              <Feather 
                name={activeIndices.includes(1) ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#230C02" 
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            {activeIndices.includes(1) && (
              <Text style={styles.answerText}>
                Visit our website at <Text style={styles.link} onPress={() => Linking.openURL('https://imissmycafe.com/')}>https://imissmycafe.com/</Text> for more information.
              </Text>
            )}
          </View>

          <View style={styles.supportSection}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleAnswer(2)}
            >
              <Feather name="facebook" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.itemText}>Facebook</Text>
              <Feather 
                name={activeIndices.includes(2) ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#230C02" 
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            {activeIndices.includes(2) && (
              <Text style={styles.answerText}>
                Find us on Facebook: <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com/minhquang.tran.9822/')}>https://www.facebook.com/minhquang.tran.9822/</Text>
              </Text>
            )}
          </View>

          <View style={styles.supportSection}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleAnswer(3)}
            >
              <Feather name="instagram" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.itemText}>Instagram</Text>
              <Feather 
                name={activeIndices.includes(3) ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#230C02" 
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            {activeIndices.includes(3) && (
              <Text style={styles.answerText}>
                Follow us on Instagram: <Text style={styles.link} onPress={() => Linking.openURL('https://www.instagram.com/_minhhquag.263/')}>https://www.instagram.com/_minhhquag.263/</Text>
              </Text>
            )}
          </View>
        </ScrollView>
      </View>

      <Footer /> {/* Add Footer component */}
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
});