import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const tabs = [
  { name: "Home", icon: "home", route: "Home" },
  { name: "Cart", icon: "shoppingcart", route: "Cart" },
  { name: "Favorites", icon: "hearto", route: "Favorites" },
  { name: "Profile", icon: "user", route: "Profile" },
];

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedTab, setSelectedTab] = useState(route.name);
  const scaleAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    setSelectedTab(route.name);
  }, [route.name]);

  const handlePress = (tab) => {
    if (route.name !== tab.route) {
      setSelectedTab(tab.name);
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.2, duration: 150, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
      navigation.navigate(tab.route);
    }
  };

  return (
    <View style={[styles.footer, { bottom: 0 }]}> 
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tabButton}
          onPress={() => handlePress(tab)}
        >
          <Animated.View style={{ transform: [{ scale: selectedTab === tab.route ? scaleAnim : 1 }] }}>
            <AntDesign
              name={tab.icon}
              size={30}
              color={selectedTab === tab.route ? "#3D1B00" : "#8B5E3C"}
            />
          </Animated.View>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 80,
    alignItems: "center",
    width: width,
    position: "absolute",
  },
  tabButton: { alignItems: "center", flex: 1, paddingBottom: 10 },
});
