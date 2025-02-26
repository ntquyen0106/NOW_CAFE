import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CoffeeTypeTabs from "../components/CategoryCoffee";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { setForceBlur } from "../redux/useSlice";




const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const forceBlur = useSelector((state) => state.focus.forceBlur); // Lấy forceBlur từ Redux
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePressOutside = () => {
    Keyboard.dismiss(); 
    dispatch(setForceBlur(true)); // Ép SearchBar mất focus
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products"); // Đổi IP nếu chạy trên thiết bị thật
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("❌ Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectType = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type)); // Cập nhật state khi chọn loại nước
    handlePressOutside();
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedType ? product.category === selectedType : true;
    const regex = new RegExp(searchQuery.trim(), "i"); // "i" để không phân biệt hoa thường
    const matchesSearch = searchQuery
    ? regex.test(product.name) || regex.test(product.description)
    : true;
  
    return matchesCategory && matchesSearch;
  });
  

    const handleSearch = (query) => {
      setSearchQuery(query);
      handlePressOutside();
    }


  return (
    <TouchableWithoutFeedback 
      onPress={handlePressOutside} 
      accessible={false} // Ngăn chặn tương tác không mong muốn
    >
    <SafeAreaView style={styles.container}>
      <Navbar user={{ name: "Như Ý" }} />
      <Text style={styles.title}>What would you like to drink today?</Text>
      <SearchBar onSearch={handleSearch} forceBlur={forceBlur} />

      <View style ={styles.type}> 
        <CoffeeTypeTabs
        onSelect={handleSelectType}     
      />
    </View>
       
    <View style={styles.productContainer}>
        <ScrollView contentContainerStyle={styles.productList} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" > 
          {loading ? (
              <Text style={styles.loadingText}>Đang tải sản phẩm...</Text>
            ) : (
              filteredProducts.map((product) => <Product key={product.sanpham_id} product={product} />)
            )}
        </ScrollView>
      </View>

      <Footer />
    </SafeAreaView>
    </TouchableWithoutFeedback>
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
