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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Navbar user={{ name: "Selenay", avatarUrl: "https://i.pravatar.cc/150" }} />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          <Text style={styles.memberStatus}>THÀNH VIÊN</Text>
          
          <View style={styles.balanceContainer}>
            <View style={styles.balanceItem}>
              <Image source={require("../assets/icons/drips.png")} style={styles.icon} />
              <Text style={styles.balanceText}>DRIPS: 0</Text>
            </View>
            <View style={styles.balanceItem}>
              <Image source={require("../assets/icons/prepay.png")} style={styles.icon} />
              <Text style={styles.balanceText}>Trả trước: 0đ</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tài Khoản</Text>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
            <Image source={require("../assets/icons/profile.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Hồ Sơ</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Setting')}>
            <Image source={require("../assets/icons/setting.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Cài Đặt</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông Tin Chung</Text>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Terms')}>
            <Image source={require("../assets/icons/clause.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Điều khoản dịch vụ</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Policy')}>
            <Image source={require("../assets/icons/clause.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Chính sách bảo mật</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image source={require("../assets/icons/introduce.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Giới Thiệu Về Phiên Bản Ứng Dụng</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trung Tâm Trợ Giúp</Text>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Question')}>
            <Image source={require("../assets/icons/question.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Câu hỏi thường gặp</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image source={require("../assets/icons/respone.png")} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Phản hồi & Hỗ trợ</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>ĐĂNG XUẤT</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9F6F0",
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 100, // Increased from 60 to avoid Navbar overlap
  },
  scrollContent: {
    paddingBottom: 10,
  },
  profileSection: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  memberStatus: {
    fontSize: 15,
    color: '#666',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginTop: 5,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  balanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  balanceText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  menuItemText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#D83C3D',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },
});