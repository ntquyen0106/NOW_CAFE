import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const tabs = [
  { name: "Home", icon: "home", route: "Home" },
  { name: "Cart", icon: "shoppingcart", route: "Cart" },
  { name: "Favorites", icon: "hearto", route: "Favorites" },
  { name: "Profile", icon: "user", route: "Profile" },
];

export default function Footer() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <View style={[styles.footer, { bottom: 16 }]}> 
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tabButton}
          onPress={() => {
            setSelectedTab(tab.name);
            navigation.navigate(tab.route);
          }}
        >
          <AntDesign
            name={tab.icon}
            size={30}
            color={selectedTab === tab.name ? "#3D1B00" : "#8B5E3C"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#EADCC6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    alignItems: "center",
    width: width,
    paddingBottom: 10,
    position: "absolute",
  },
  tabButton: { alignItems: "center", flex: 1 },
});
