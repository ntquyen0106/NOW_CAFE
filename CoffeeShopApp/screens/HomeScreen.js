import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView } from "react-native";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CoffeeTypeTabs from "../components/CategoryCoffee";
import Product from "../components/Product";

const mockProducts = [
  {
    sanpham_id: "SP0002",
    name: "Trà đào cam sả",
    price: 35000,
    category: "Trà",
    image: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955549/Tr%C3%A0_%C4%91%C3%A0o_cam_s%E1%BA%A3_t7frww.png",
    description: "Trà đào cam sả thơm ngon, thanh mát, giải nhiệt hiệu quả.",
    rate: 4.9,
    like: 200,
    quantity: 10,
  },
  {
    sanpham_id: "SP0003",
    name: "Cà phê sữa đá",
    price: 25000,
    category: "Cà phê",
    image: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955549/Cafe_sua_da.png",
    description: "Cà phê sữa đá truyền thống, vị đậm đà, thơm ngon.",
    rate: 4.8,
    like: 150,
    quantity: 8,
  },
  {
    sanpham_id: "SP0004",
    name: "Matcha đá xay",
    price: 40000,
    category: "Matcha",
    image: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955549/Matcha_da_xay.png",
    description: "Matcha đá xay thơm ngon, béo ngậy, mát lạnh sảng khoái.",
    rate: 4.7,
    like: 180,
    quantity: 12,
  },
  {
    sanpham_id: "SP0005",
    name: "Matcha đá xay",
    price: 40000,
    category: "Matcha",
    image: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955549/Matcha_da_xay.png",
    description: "Matcha đá xay thơm ngon, béo ngậy, mát lạnh sảng khoái.",
    rate: 4.7,
    like: 180,
    quantity: 12,
  },
  {
    sanpham_id: "SP0006",
    name: "Matcha đá xay",
    price: 40000,
    category: "Matcha",
    image: "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955549/Matcha_da_xay.png",
    description: "Matcha đá xay thơm ngon, béo ngậy, mát lạnh sảng khoái.",
    rate: 4.7,
    like: 180,
    quantity: 12,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar user={{ name: "Như Ý" }} />
      <Text style={styles.title}>What would you like to drink today?</Text>
      <SearchBar
        onSearch={(query) =>
          console.log(`Searching for products related to: ${query}`)
        }
      />
      <View style ={styles.type}> 
        <CoffeeTypeTabs
        onSelect={(type) => console.log(`Selected type: ${type}`)}
      />
    </View>
       
    <View style={styles.productContainer}>
        <ScrollView contentContainerStyle={styles.productList} showsVerticalScrollIndicator={false}>
          {mockProducts.map((product) => (
            <Product key={product.sanpham_id} product={product} />
          ))}
        </ScrollView>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    //paddingTop: 100,
  },
  type: { height: 70},
  title: { fontSize: 20, marginBottom: 10, paddingTop: 50, color: "#3D1B00" },
  productContainer: { height:800, width: "100%", paddingHorizontal: 10, paddingTop: 5 , backgroundColor: "#3D1B00", borderTopLeftRadius: 30, borderTopRightRadius: 30 , },
  productList: { width: "100%", paddingBottom: 200 },
});

export default HomeScreen;
