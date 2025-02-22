import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { setForceBlur } from "../redux/useSlice";

const { width, height } = Dimensions.get("window");

export default function FavoritesScreen() {
  const dispatch = useDispatch();
  const forceBlur = useSelector((state) => state.focus.forceBlur);
  const favorites = useSelector((state) => state.favorites);

  const handleSearch = (query) => {
    console.log(`Searching for products related to: ${query}`);
    dispatch(setForceBlur(true));
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
    dispatch(setForceBlur(true));
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside} accessible={false}>
      <View style={styles.mainContainer}>
        <Navbar user={{ name: "Như Ý" }} />
        <Text style={styles.title}>What would you like to drink today?</Text>
        <SearchBar onSearch={handleSearch} forceBlur={forceBlur} />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.sectionTitle}>Favorites</Text>
          <Text style={styles.subtitle}>
            Your favorite drinks to lighten up your day
          </Text>

          {favorites.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Bạn chưa có sản phẩm yêu thích</Text>
            </View>
          ) : (
            favorites.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          )}
        </ScrollView>

        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#3D1B00",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexGrow: 1, // Ensure the scroll content takes full height
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3D1B00",
    marginBottom: 10,
    marginTop: 80,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#F9F6F0",
    marginVertical: 10,
    textAlign: "left", 
  },
  subtitle: {
    fontSize: 16,
    color: "#F9F6F0", 
    marginBottom: 20,
    textAlign: "left", 
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#F9F6F0",
    textAlign: "center",
    paddingBottom: 100,
  },
});