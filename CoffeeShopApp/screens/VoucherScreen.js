import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from "react-native";
import Footer from "../components/Footer";
import { Feather } from "@expo/vector-icons";

const vouchers = [
  { id: 1, title: "Free ship: HAPY DAY", time: "Receive goods at 19:30-20:00", selected: true },
  { id: 2, title: "Free ship: HAPY DAY", time: "Receive goods at 19:30-20:00", selected: false },
  { id: 3, title: "Free ship: HAPY DAY", time: "Receive goods at 19:30-20:00", selected: false },
  { id: 4, title: "Discount 20%: WEEKEND", time: "Valid for orders over 100k", selected: false },
  { id: 5, title: "Buy 1 Get 1 Free", time: "Only valid on Friday", selected: false },
];

export default function VoucherScreen({ navigation }) {
  const [selectedVoucher, setSelectedVoucher] = useState(1);

  return (
    <View style={styles.mainContainer}>
      {/* Thanh điều hướng */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Voucher</Text>
      </View>

      {/* Danh sách voucher */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.voucherList}>
        {vouchers.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={[
              styles.voucherCard, 
              selectedVoucher === item.id && styles.selectedCard
            ]}
            onPress={() => setSelectedVoucher(item.id)}
          >
            <View style={styles.voucherRow}>
              <Image source={require("../assets/icons/free-ship.png")} style={styles.voucherIcon} />
              <View style={styles.voucherText}>
                <Text style={[styles.voucherTitle, selectedVoucher === item.id && styles.selectedText]}>
                  {item.title}
                </Text>
                <Text style={[styles.voucherTime, selectedVoucher === item.id && styles.selectedText]}>
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer selected="cart" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9E8D9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  voucherList: {
    paddingBottom: 20,
  },
  voucherCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#8B5A2B",
  },
  voucherRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  voucherIcon: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  voucherText: {
    flex: 1,
  },
  voucherTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  voucherTime: {
    fontSize: 14,
    color: "#555",
  },
  selectedText: {
    color: "#FFF",
  },
});
