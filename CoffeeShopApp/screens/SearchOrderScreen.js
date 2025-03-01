import React, { useState } from "react";
import { View, TextInput, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchOrderScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const data = ["Cà phê sữa đá", "Trà sữa", "Bánh Tiramisu", "Bánh Flan"]; // Dữ liệu giả lập

  const filteredData = data.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={styles.container}>
      {/* Ô nhập tìm kiếm */}
      <TextInput
        style={styles.searchInput}
        placeholder="Nhập từ khóa..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Danh sách kết quả */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchOrderScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  searchInput: { borderWidth: 1, padding: 10, marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1 },
  backButton: { marginTop: 20, backgroundColor: "#ccc", padding: 10, alignItems: "center" },
  backText: { fontSize: 16 },
});
