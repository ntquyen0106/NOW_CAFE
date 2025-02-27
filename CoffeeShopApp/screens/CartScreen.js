import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CartScreen({ navigation }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Navbar user={{ name: "Như Ý" }} />
      <ScrollView contentContainerStyle={styles.cartList}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.sanpham_id} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price} x {item.quantity}</Text>
                <TouchableOpacity onPress={() => dispatch(removeFromCart(item.sanpham_id))}>
                  <Text style={styles.removeText}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Giỏ hàng trống</Text>
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Tổng cộng: ${totalAmount}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={() => alert("Thanh toán thành công!")}>
            <Text style={styles.checkoutText}>Thanh toán</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(clearCart())}>
            <Text style={styles.clearCartText}>Xóa giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      )}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF5E9", padding: 10 },
  cartList: { paddingVertical: 10 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  image: { width: 80, height: 80, borderRadius: 10 },
  details: { marginLeft: 15, flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "#834D1E" },
  removeText: { color: "red", marginTop: 5 },
  emptyCart: { textAlign: "center", marginTop: 20, fontSize: 18 },
  footer: { paddingVertical: 15, alignItems: "center" },
  totalText: { fontSize: 18, fontWeight: "bold" },
  checkoutButton: { backgroundColor: "#AE0B0B", padding: 10, borderRadius: 10, marginTop: 10 },
  checkoutText: { color: "white", fontSize: 18, fontWeight: "bold" },
  clearCartText: { color: "red", marginTop: 10 },
});
