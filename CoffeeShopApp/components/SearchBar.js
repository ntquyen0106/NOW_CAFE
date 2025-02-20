import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ placeholder = "Search for the drink...", onSearch }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (onSearch) {
      console.log(`Searching for products related to: ${query}`); 
      onSearch(query);
      setQuery("");
      Keyboard.dismiss(); // 👈 Bỏ focus khỏi TextInput
      setIsFocused(false); // 👈 Cập nhật state để viền mất đi
    }
  };

  return (
    <View style={[styles.container, isFocused && styles.focused]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={query}
        onChangeText={setQuery}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Feather name="search" size={24} color="#A0A0A0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#EADCC6", // Màu viền mặc định
    marginHorizontal: 20,
  },
  focused: {
    borderColor: "#8B5E3C", // Màu viền khi focus (tùy chỉnh)
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
});
