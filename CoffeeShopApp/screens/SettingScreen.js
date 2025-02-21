import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  Modal 
} from "react-native";
import { Feather } from "@expo/vector-icons"; 
import Footer from "../components/Footer"; 

const { width, height } = Dimensions.get("window");

export default function SettingsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const confirmDeleteAccount = () => {
    setModalVisible(true);
  };

  const handleDeleteAccount = () => {
    console.log("Tài khoản đã bị xóa");
    setModalVisible(false);
  };

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#230C02" />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Cài Đặt Tài Khoản</Text>
            <TouchableOpacity style={styles.menuItem} onPress={confirmDeleteAccount}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Xác Nhận Xóa Tài Khoản</Text>
            <Text style={styles.modalSubText}>Bạn có chắc chắn muốn xóa tài khoản không?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.textStyle}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginRight: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSubText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: {
    backgroundColor: "#F71515",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});