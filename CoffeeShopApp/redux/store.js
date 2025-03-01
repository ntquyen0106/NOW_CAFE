import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice"; 
import favoritesReducer from "./favoritesSlice"; 
import cartReducer from "./cartSlice";
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    focus: useReducer, 
    favorites: favoritesReducer,
    cart: cartReducer, 
    user: userReducer,
  },
});

export default store;