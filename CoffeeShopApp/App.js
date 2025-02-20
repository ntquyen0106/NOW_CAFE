import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen.js";
import CartScreen from "./screens/CartScreen.js";
import FavoritesScreen from "./screens/FavoritesScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SigninScreen from "./screens/SigninScreen.js";
import SignupScreen from "./screens/SignupScreen.js";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} />

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

        <Stack.Screen name="Login"  
          component={LoginScreen} 
          options={{ headerShown: false }} />

        <Stack.Screen name="Signin"
          component={SigninScreen} 
          options={{ headerShown: false }} />

        <Stack.Screen name="Signup"
          component={SignupScreen} 
          options={{ headerShown: false }} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}