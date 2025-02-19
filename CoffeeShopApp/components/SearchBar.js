import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ placeholder = "Search for the drink...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      console.log(`Searching for products related to: ${query}`); // Tạm thời log ra console
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={query}
        onChangeText={setQuery}
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
    borderColor: "#EADCC6",
    marginHorizontal: 20,
    
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
});
