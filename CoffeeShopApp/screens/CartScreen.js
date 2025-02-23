import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const user = {
  user_id: "user0005",
  name: "Hiep Hinh",
  phoneNumber: "0123456793",
  address: "Ho Chi Minh, Vietnam",
  points: 130,
  email: "hiep.hinh@gmail.com",
};

const cart = {
  giohang_id: "GH0001",
  User: {
    User_id: "user0001",
    name: "Tran Minh Quang",
    email: "quang.tran@gmail.com",
    phoneNumber: "0123456789",
  },
  SanPham: [
    {
      sanpham_id: "SP0011",
      name: "Bánh tiramisu",
      price: 45000,
      image:
        "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955485/B%C3%A1nh_tiramisu_mjr1rk.png",
      quantity: 2,
    },
    {
      sanpham_id: "SP0012",
      name: "Bánh bông lan trứng muối",
      price: 50000,
      image:
        "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955484/B%C3%A1nh_b%C3%B4ng_lan_tr%E1%BB%A9ng_mu%E1%BB%91i_vdi5hd.png",
      quantity: 1,
    },
  ],
  totalPrice: 140000,
};

const products = [{
  "sanpham_id":"SP0011",
  "name": "Bánh tiramisu",
  "price": 45000,
  "category": "Bánh ngọt",
  "image": "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955485/B%C3%A1nh_tiramisu_mjr1rk.png",
  "description": "Bánh tiramisu mềm mịn, hương vị cà phê và kem tươi hấp dẫn.",
  "rate": 4.8,
  "like": 170,
  "quantity": 10
},
{
  "sanpham_id":"SP0012",
  "name": "Bánh bông lan trứng muối",
  "price": 50000,
  "category": "Bánh ngọt",
  "image": "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955484/B%C3%A1nh_b%C3%B4ng_lan_tr%E1%BB%A9ng_mu%E1%BB%91i_vdi5hd.png",
  "description": "Bánh bông lan mềm xốp kết hợp với trứng muối béo ngậy.",
  "rate": 4.9,
  "like": 200,
  "quantity": 10
}
]

const CartScreen = ({ navigation }) => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const MockItemCart = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemDetail}>
          {/* Checkbox và imageimage */}
          <Checkbox />
          <Image source={{ uri: item.image }} style={styles.image} />

          {/* Thông tin sản phẩm */}
          <View>
            <Text style={styles.categoryText}>category</Text>

            {/* Tên sản phẩm */}
            {
              // Nếu tên sản phẩm quá dài thì cắt đi và thêm dấu "..."
              item.name.length > 15 ? (
                <Text style={styles.nameText}>
                  {item.name.substring(0, 15) + "..."}
                </Text>
              ) : (
                <Text style={styles.nameText}>{item.name}</Text>
              )
            }

            {/* Giá bán: */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>${item.price}</Text>
              <Text>Size: 100ml</Text>
            </View>

            {/* Số lượng */}
            <View style={styles.quanityContainer}>
              <TouchableOpacity style={styles.quanityButton}>
                <Text style={styles.quanityText}>-</Text>
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity style={styles.quanityButton}>
                <Text style={styles.quanityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Note */}
        </View>
        <View style={styles.noteContainer}>
          <Text>Note:</Text>
          <TextInput
            placeholder="Note"
            placeholderTextColor="#0000004D"
            style={styles.inputContainer}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editTexteditText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const MockItemOther = ({ item }) => {
    return (
      <View style={styles.otherItemContainer}>
        <Image source={{ uri: item.image }} style={styles.imageOther} />
       <View style={styles.otherNameContainerContainer}>
       {
        item.name.length > 12 ? (
          <Text style={styles.otherName}>
            {item.name.substring(0, 12) + "..."}
          </Text>
        ) : (
          <Text style={styles.otherName}>{item.name}</Text>
        )
       }
       <Text style={styles.otherName}>$ {item.price}</Text>
       </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header cố định */}
      <Navbar user={user} />

      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      {/* Nội dung có thể cuộn */}
      <ScrollView contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
      >


        <View style={styles.titleContainer}>
          <Feather name="shopping-cart" size={30} color="black" />
          <Text style={styles.title}>Cart (3)</Text>
        </View>

        {/* Danh sách sản phẩm */}
        {cart.SanPham.map((item) => (
          <MockItemCart item={item} key={item.sanpham_id} />
        ))}

        {/* Tổng tiền */}
        {/* check box chọn tất cả */}
        <View style={styles.totalPriceContainer}>
          <View style={styles.checkBoxAllContainer}>
            <Checkbox />
            <Text style={styles.priceText}>All</Text>
          </View>

          <View style={styles.totalPaymentContainer}>
            <Text>Total payment:</Text>
            <Text style={styles.priceTotalText}>${cart.totalPrice}</Text>
          </View>
        </View>

        {/* Button thanh toán */}
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy now ! (3)</Text>
        </TouchableOpacity>

        {/* Other recomentation: */}
        <View style={styles.otherContainer}>
          <View style={styles.titleOtherContainer}>
            <Text style={styles.titleSmall}>Other drinks we recommend</Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Danh sách sản phẩm */}
          <View style={styles.otherList}>

          {products.map((item) => (
            <MockItemOther item={item} key={item.sanpham_id} />
          ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer cố định */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEDCC6",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  // header:
  searchBarContainer: {
    marginTop: 100,
    width: "100%",
  },
  // content:
  scrollContent: {
    backgroundColor: "#FFF5E9",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
  },
  // item:
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#834D1E",
    paddingVertical: 10,
  },
  itemDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    gap: 20,
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#834D1E",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  quanityButton: {
    backgroundColor: "#834D1E",
    padding: 5,
    borderRadius: 5,
    width: 30,
    alignItems: "center",
  },
  quanityText: {
    color: "white",
  },
  quanityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputContainer: {
    backgroundColor: "#EEDCC6",
    borderRadius: 10,
    padding: 10,
    width: 200,
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginLeft: 50,
  },
  editButton: {
    backgroundColor: "#834D1E",
    padding: 5,
    borderRadius: 5,
    width: 50,
    alignItems: "center",
  },
  editTexteditText: {
    color: "white",
  },
  // total price:
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#834D1E",
    paddingVertical: 10,
  },
  checkBoxAllContainer: {
    flexDirection: "row",
    alignItems: "center",

    gap: 10,
  },
  totalPaymentContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  priceTotalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FB452D",
  },
  // buy now button:
  buyNowButton: {
    backgroundColor: "#AE0B0B",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,

    // marginBottom: 100,
  },
  buyNowText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  // other recommendation:
  otherContainer: {
    marginTop: 20,
    marginBottom: 100,
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  titleOtherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // other item:
  otherItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  imageOther: {
    width: 150,
    height: 90,
    borderRadius: 10,
  },
  otherNameContainerContainer: {
   
   position: "absolute",
   bottom: 10,
   // backgroundColor màu #EEDCC6 30%
    backgroundColor: "#EEDCC64D",
    
    borderRadius: 10,
   
  },
  otherName: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  otherList: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default CartScreen;
