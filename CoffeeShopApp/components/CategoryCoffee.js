import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const coffeeTypes = [
  "Popular",
  "Black coffee",
  "Winter special",
  "Decaf",
  "Espresso",
  "Latte",
  "Cappuccino",
  "Mocha"
];

export default function CoffeeTypeTabs({ onSelect }) {
  const [selectedType, setSelectedType] = useState("Popular");

  const handleSelect = (type) => {
    setSelectedType(type);
    if (onSelect) onSelect(type);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} > 
      {coffeeTypes.map((type) => (
        <TouchableOpacity
          key={type}
          style={[styles.tab, selectedType === type && styles.activeTab]}
          onPress={() => handleSelect(type)}
        >
          <Text style={[styles.tabText, selectedType === type && styles.activeTabText]}>
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    paddingTop: 5,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#F5EDE0",
    marginRight: 10,
    height: 40,
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#3D1B00",
  },
  tabText: {
    fontSize: 16,
    color: "#3D1B00",
  },
  activeTabText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
