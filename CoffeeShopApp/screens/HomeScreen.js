import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBar from "../components/SearchBar";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar user={{ name: "Như Ý" }} />
      <Text style= {styles.title } >What would you like to drink today?</Text>
      <SearchBar onSearch={(query) => console.log(`Searching for products related to: ${query}`)} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: 100 },
  title: { fontSize: 20,  marginBottom: 10, paddingTop: 10, color: "#3D1B00" },
});

export default HomeScreen;