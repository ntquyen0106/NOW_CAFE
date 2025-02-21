import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function ProductDetail() {
  const route = useRoute();
  const product = route.params.product;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("350 ml");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    { username: "NguyenVanA", comment: "Trà rất ngon, thơm và mát!", rating: 5, date: "02/20/2025" },
    { username: "TranThiB", comment: "Vị rất vừa miệng, sẽ mua lại!", rating: 4.8, date: "02/18/2025" },
    { username: "User123", comment: "Thức uống này rất tuyệt!", rating: 4.5, date: "02/15/2025" },
    { username: "CoffeeLover", comment: "Tôi thích món này!", rating: 5, date: "02/10/2025" },
    { username: "SweetTooth", comment: "Ngọt vừa phải, ngon lắm!", rating: 4.7, date: "02/05/2025" },
    { username: "TeaAddict", comment: "Hương vị độc đáo, đáng thử!", rating: 4.6, date: "01/30/2025" }
  ];

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 5);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesome
        key={i}
        name={i + 1 <= rating ? "star" : i + 0.5 === rating ? "star-half" : "star-o"}
        size={18}
        color="gold"
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Navbar user={{ name: "Như Ý", avatar: "https://example.com/avatar.jpg" }} />
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />

        <View style={styles.contentContainer}>
          <View style={styles.productCard}>
            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.price}>${product.price}</Text>
              <Text style={styles.sold}>Sold: {product.quantity}</Text>
            </View>
            
            <Text style={styles.label}>Size</Text>
            <View style={styles.sizeContainer}>
              {[
                { size: "250 ml", icon: "coffee" },
                { size: "350 ml", icon: "coffee" },
                { size: "450 ml", icon: "coffee" }
              ].map(({ size, icon }) => (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeButton, selectedSize === size && styles.selectedSize]}
                  onPress={() => setSelectedSize(size)}
                >
                  <FontAwesome name={icon} size={16} color="white" style={styles.sizeIcon} />
                  <Text style={styles.sizeText}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <View style={styles.cartContainer}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.reviewHeaderContainer}>
            <Text style={styles.reviewHeader}>User Reviews ({reviews.length})</Text>
            {reviews.length > 5 && (
              <TouchableOpacity onPress={() => setShowAllReviews(!showAllReviews)}>
                <Text style={styles.viewMoreText}>{showAllReviews ? "Ẩn bớt" : "Xem thêm"}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.reviewsContainer}>
            {visibleReviews.map((user, index) => (
              <View key={index} style={styles.reviewCard}>
                <Text style={styles.reviewUser}>{user.username}</Text>
                <View style={styles.starContainer}>{renderStars(user.rating)}</View>
                <Text style={styles.reviewComment}>{user.comment}</Text>
                <Text style={styles.reviewDate}>{user.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5EBDC" },
  scrollContainer: { paddingBottom: 16 },

  productImage: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },

  contentContainer: {
    backgroundColor: "#3B2211",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  productCard: {
    paddingBottom: 16,
  },
  productTitle: { fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 4 },
  description: { fontSize: 14, color: "#ccc", marginBottom: 8 },
  infoRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  price: { fontSize: 18, fontWeight: "bold", color: "white" },
  likes: { fontSize: 14, color: "#ccc" },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  ratingText: { fontSize: 16, color: "white", marginRight: 6 },

  divider: { height: 1, backgroundColor: "#fff", opacity: 0.3, marginVertical: 10 },

  reviewHeaderContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  reviewHeader: { fontSize: 16, fontWeight: "bold", color: "#E5B788" },
  viewMoreText: { fontSize: 14, color: "#E5B788", textDecorationLine: "underline" },

  reviewsContainer: { paddingBottom: 16 },
  reviewCard: { backgroundColor: "#3B2211", padding: 10, borderRadius: 8, marginBottom: 10 },
  reviewUser: { fontWeight: "bold", color: "white" },
  starContainer: { flexDirection: "row", marginVertical: 4 },
  reviewComment: { color: "white" },
  reviewDate: { fontSize: 10, color: "#aaa" },
  sizeContainer: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  sizeButton: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 5, backgroundColor: "#555" },
  selectedSize: { backgroundColor: "#E5B788" },
  sizeIcon: { marginRight: 5 },
  sizeText: { color: "white" },
  sold: { fontSize: 14, color: "#ccc" },
});
