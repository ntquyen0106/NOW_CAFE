import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const tabs = [
  { name: "Home", icon: "home" },
  { name: "Cart", icon: "shoppingcart" },
  { name: "Favorites", icon: "hearto" },
  { name: "Profile", icon: "user"},
];

export default function Footer() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{selectedTab}</Text>
      </View>
      <View style={styles.footer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => setSelectedTab(tab.name)}
          >
            <AntDesign
              name={tab.icon}
              size={30}
              color={selectedTab === tab.name ? "#3D1B00" : "#8B5E3C"}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#EADCC6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabButton: { alignItems: "center" },
});
