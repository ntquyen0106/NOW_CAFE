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
                style={[styles.input, styles.halfInput, styles.genderPicker]} // Decrease height of the gender picker
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
                  style={[styles.input, { flex: 0.3 }]}
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
    padding: 12,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  memberStatus: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
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
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  formSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 12,
    padding: 15,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  editLink: {
    color: '#D83C3D',
    fontSize: 14,
  },
  formGroup: {
    gap: 15,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F9F6F0',
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    width: '90%',
  },
  halfInput: {
    flex: 1,
  },
  genderPicker: {
    height: 45, // Decrease height of the gender picker
    
  },
  datePickerButton: {
    height: 45, // Increase the size of date picker button
  },
  phoneSection: {
    marginBottom: 15,
  },
  emailSection: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: 10,
  },
  phoneInput: {
    flex: 1,
  },
  verifyButton: {
    backgroundColor: '#D83C3D',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  verifyText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
