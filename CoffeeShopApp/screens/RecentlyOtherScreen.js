import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const bill = {
  hoadon_id: "HD0001",
  user: {
    user_id: "user0001",
    name: "Tran Minh Quang",
    phoneNumber: "0123456789",
    address: "Ho Chi Minh, Vietnam",
  },
  ChiTietHoaDon: {
    chitiethoadon_id: "CTHD0001",
    SanPham: [
      {
        productId: "SP0001",
        name: "Cà phê sữa đá",
        quantity: 1,
        price: 25000,
      },
      {
        productId: "SP0002",
        name: "Cà phê sữa đá",
        quantity: 1,
        price: 25000,
      },
    ],
    dateCreated: "2024-02-18T10:00:00Z",
  },
  tongTien: 25000,
};

const product = {
  productId: "SP0001",
  name: "Cà phê sữa đá",
  quantity: 1,
  price: 25000,
};

const RecentlyOtherScreen = () => {
  const [activeTab, setActiveTab] = useState(true);
  const handleToggleTab = () => {
    setActiveTab(!activeTab);
  };

  const Item = ({ bill, status }) => {
    const numberProduct = bill.ChiTietHoaDon.SanPham.length;
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955485/B%C3%A1nh_tiramisu_mjr1rk.png",
          }}
          style={styles.image}
        />

        <View>
          <View style={styles.statusContainer}>
            <Text style={styles.nameText}>Order: {bill.hoadon_id}</Text>
            <Text style={[status === 'Packing' ? {backgroundColor: "#F2994A",} : {backgroundColor: '#32CD32'},
              styles.statusText
            ]}>
              
              {status}</Text>
          </View>

          <Text style={styles.inforText}>
            Date: {bill.ChiTietHoaDon.dateCreated}
          </Text>
          <Text style={styles.inforText}>Product({numberProduct})</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar user={{ name: "Hiep Hinh" }} />

      <View style={styles.toggleTabContainer}>
        <TouchableOpacity
          style={[
            { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
            activeTab ? [styles.selected, {}] : styles.unselected,
          ]}
          onPress={handleToggleTab}
        >
          <Text style={styles.textTab}>Recently</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
            activeTab ? styles.unselected : styles.selected,
          ]}
          onPress={handleToggleTab}
        >
          <Text style={styles.textTab}>Past Oders</Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung tab */}
      <View style={styles.contentConatiner}>
        {activeTab === true ? <Item bill={bill} status={'Packing'} /> : 
        <Item bill={bill} status={'Completed'} />
        }
      </View>
    </View>
  );
};

export default RecentlyOtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  // Chuyển tab
  toggleTabContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: "#230C02",
    padding: 10,

    width: 100,
    alignItems: "center",
  },
  unselected: {
    padding: 10,
    backgroundColor: "#EEDCC6",
    borderWidth: 1,
    width: 100,
    alignItems: "center",
  },
  textTab: {
    color: "white",
  },
  // Nội dung tab
  contentConatiner: {
    flex: 1,
    backgroundColor: "#230C02",
    padding: 20,
  },
  // item
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EEDCC6",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#967259",
  },
  statusText: {
    color: "#967259",
    width: 80,
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  inforText: {
    color: "#967259",
  },
});
