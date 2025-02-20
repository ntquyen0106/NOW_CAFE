import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setForceBlur } from "../redux/useSlice";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>${(product.price * 1.2).toFixed(2)}</Text>
          <Text style={styles.newPrice}>${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.buyButton} onPress={() => dispatch(setForceBlur(true))}>
            <Text style={styles.buyText}>Buy now!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(setForceBlur(true))}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{ setLiked(!liked); dispatch(setForceBlur(true)); }}>
            <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "#D7263D" : "black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row-reverse",
    backgroundColor: "#F5EDE0",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
 
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  category: {
    fontSize: 14,
    color: "#7A5C3D",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#555",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: 5,
  },
  newPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D7263D",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
  buyButton: {
    backgroundColor: "#D7263D",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
