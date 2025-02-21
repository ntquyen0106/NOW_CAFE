import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  Picker,
  Platform,
} from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ProfileScreen({ navigation }) {
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [phoneArea, setPhoneArea] = useState("+84");
  const [phoneNumber, setPhoneNumber] = useState("");

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

        <View style={styles.formSection}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Thông Tin Chung</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Sửa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Tên"
                placeholderTextColor="#999"
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Họ"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputRow}>
              <Picker
                selectedValue={gender}
                style={[styles.input, styles.halfInput, styles.genderPicker]}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item label="Chọn Giới Tính" value="" />
                <Picker.Item label="Nam" value="male" />
                <Picker.Item label="Nữ" value="female" />
                <Picker.Item label="Khác" value="other" />
              </Picker>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Năm Sinh"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={birthYear}
                onChangeText={setBirthYear}
              />
            </View>

            <View style={styles.phoneSection}>
              <Text style={styles.inputLabel}>Số Điện Thoại</Text>
              <View style={styles.phoneRow}>
                <Picker
                  selectedValue={phoneArea}
                  style={[styles.input, styles.phoneAreaPicker]}
                  onValueChange={(itemValue) => setPhoneArea(itemValue)}
                >
                  <Picker.Item label="+84" value="+84" />
                  <Picker.Item label="+1" value="+1" />
                  <Picker.Item label="+44" value="+44" />
                </Picker>
                <TextInput
                  style={[styles.input, styles.phoneInput]}
                  placeholder="Số Điện Thoại"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
            </View>

            <View style={styles.emailSection}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyText}>Xác Nhận</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 80,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  profileSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  memberStatus: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
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
    marginBottom: 12,
  },
  balanceText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  formSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 5,
    padding: 20,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  editLink: {
    color: '#D83C3D',
    fontSize: 16,
  },
  formGroup: {
    gap: 20,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F9F6F0',
    padding: 13, 
    borderRadius: 8,
    fontSize: 16,
    width: '100%',
  },
  halfInput: {
    flex: 1,
  },
  genderPicker: {
    height: 50, 
    paddingLeft: 10,
  },
  phoneSection: {
    marginBottom: 10,
  },
  emailSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: 15,
  },
  phoneAreaPicker: {
    flex: 0.3,
    height: 50, 
  },
  phoneInput: {
    flex: 1,
    padding: 13, 
  },
  verifyButton: {
    backgroundColor: '#D83C3D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});