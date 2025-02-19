import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen.js";
import CartScreen from "./screens/CartScreen.js";
import FavoritesScreen from "./screens/FavoritesScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} />

        <Stack.Screen name="Cart"
        component={CartScreen} 
        options={{ headerShown: false }} />
    
        <Stack.Screen name="Favorites" 
        component={FavoritesScreen} 
        options={{ headerShown: false }} />
    
        <Stack.Screen name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}