import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice"; 
import favoritesReducer from "./favoritesSlice"; 

const store = configureStore({
  reducer: {
    focus: useReducer, 
    favorites: favoritesReducer, 
  },
});

export default store;