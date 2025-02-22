import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice"; 
import favoritesReducer from "./favoritesSlice"; 
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    focus: useReducer, 
    favorites: favoritesReducer,
    cart: cartReducer, 
  },
});

export default store;