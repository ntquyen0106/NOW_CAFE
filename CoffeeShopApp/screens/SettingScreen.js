import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  Image 
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icons
import Footer from "../components/Footer"; // Footer đã có sẵn trong dự án của bạn

const { width, height } = Dimensions.get("window");

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#230C02" />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Cài Đặt Tài Khoản</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="trash-2" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.menuItemText1}>Xóa Tài Khoản</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Bảo Mật</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ChangePassword')}>
              <Feather name="lock" size={24} color="#230C02" style={styles.icon} />
              <Text style={styles.menuItemText2}>Thay Đổi Mật Khẩu</Text>
              <Feather name="chevron-right" size={24} color="#230C02" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Footer />
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
    left: 15,
    zIndex: 1,
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  settingsSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5EDE0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  menuItemText1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F71515',
  },
  menuItemText2: {
    fontSize: 16,
    fontWeight: '600',
    
  },
});
