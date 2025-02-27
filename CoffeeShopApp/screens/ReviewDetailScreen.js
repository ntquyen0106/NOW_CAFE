import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { Octicons, Ionicons } from "@expo/vector-icons";
import Footer from "../components/Footer";

const product = {
  sanpham_id: "SP0012",
  name: "Bánh bông lan trứng muối",
  price: 50000,
  category: "Bánh ngọt",
  image:
    "https://res.cloudinary.com/dgqppqcbd/image/upload/v1739955484/B%C3%A1nh_b%C3%B4ng_lan_tr%E1%BB%A9ng_mu%E1%BB%91i_vdi5hd.png",
  description: "Bánh bông lan mềm xốp kết hợp với trứng muối béo ngậy.",
  rate: 4.9,
  like: 200,
  quantity: 10,
};

const ReviewDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar user={{ name: "Hiep Hinh" }} />
      <Text style={styles.titleText}>Review</Text>
      <ScrollView>
        

      <View>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.imageStyle}></View>

        <View style={styles.orderContainer}>
          <Text style={styles.orderText}>Order: 123AA123AA</Text>
          <Text style={styles.dateText}>Date: 20/02/2025</Text>
        </View>

        <View style={styles.completeContainer}>
          <Octicons name="check-circle-fill" size={40} color="#00EC4B" />
          <Text style={styles.text}>Completed</Text>
        </View>

      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.categoryText}>{product.category}</Text>
        <Text style={styles.itemName}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$ {product.price}</Text>
          <View style={styles.shareContainer}>
            <Text style={styles.soldText}>Sold: 500</Text>
            <Octicons name="heart" size={28} color={'#967259'} />
            <Octicons name="share-android" size={28} color={'#967259'} />
          </View>
        </View>

        <Text>Size: 100ml</Text>

        <View style={styles.starContainer}>
          <Text>Star:</Text>
          <View style={styles.star}>
            <Ionicons name="star-outline" size={20} color="#FFD700" />
            <Ionicons name="star-outline" size={20} color="#FFD700" />
            <Ionicons name="star-outline" size={20} color="#FFD700" />
            <Ionicons name="star-outline" size={20} color="#FFD700" />
            <Ionicons name="star-outline" size={20} color="#FFD700" />
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Text>Status:</Text>
          <TextInput style={styles.input} placeholder="Status" placeholderTextColor="#0000004D" multiline={true} />
        </View>

        <View style={styles.imageContainer}>
          <Text>Image:</Text>
          <TouchableOpacity style={styles.addImageContainer}>
            <Ionicons name="camera" size={40} color="#967259" />
            <Text style={styles.textAddImage}>Add image</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Review</Text>
        </TouchableOpacity>

        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default ReviewDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEDCC6",
    paddingTop: 120,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: "#834D1E",
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageStyle: {
    width: "100%",
    height: 250,
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
  },
  orderText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: "#EEDCC6",
  },
  dateText: {
    fontSize: 14,
    marginHorizontal: 20,
    color: "#EEDCC6",
  },
  orderContainer: {
    position: "absolute",
    top: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EEDCC6",
  },
  completeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 85,
    left: 130,
  },
  // Item
  itemContainer:{
    backgroundColor: "#FFF5E9",
    padding: 20,
    borderRadius: 10,
    
    width:'100%'
  },
  categoryText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#834D1E'
  },
  itemName:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#834D1E',
    marginTop: 5
  },
  description:{
    fontSize: 12,
    color: '#967259',
  },
  priceText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#834D1E',
    marginTop: 10
  },
  soldText:{
    fontSize: 14,
    color: '#834D1E',
    fontWeight: 'bold'
  },
  shareContainer:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  priceContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  star:{
    flexDirection: 'row',
    gap: 5,
  },
  starContainer:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  input:{
    backgroundColor: '#967259',
    padding: 10,
    borderRadius: 10,
    width: 250,
    height: 80,
  },
  statusContainer:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5
  },
  textAddImage:{
    color: '#967259',
    fontSize: 12
  },
  addImageContainer:{
    backgroundColor: '#EEDCC6',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F2994A'
  },
  imageContainer:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 10
  },
  button:{
    backgroundColor: '#F2994A',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 100
  }
});
