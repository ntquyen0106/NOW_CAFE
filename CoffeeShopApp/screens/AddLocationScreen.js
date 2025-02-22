import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Switch 
} from "react-native";
import Footer from "../components/Footer";
import { Feather } from "@expo/vector-icons";

export default function AddDeliveryLocationScreen({ navigation }) {
  const [isDefault, setIsDefault] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.mainContainer}>
      {/* Thanh điều hướng */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New address</Text>
      </View>

      {/* Form nhập địa chỉ */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Full name" value={name} onChangeText={setName} />
          <TextInput style={styles.input} placeholder="Phone number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
          <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
        </View>

        {/* Chọn làm địa chỉ mặc định */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Set as default address</Text>
          <Switch value={isDefault} onValueChange={setIsDefault} />
        </View>

        {/* Nút hoàn thành */}
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeText}>HOÀN THÀNH</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Footer selected="cart" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9E8D9",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    borderColor: "#E0C3A5",
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 14,
  },
  completeButton: {
    backgroundColor: "#E0C3A5",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  completeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
