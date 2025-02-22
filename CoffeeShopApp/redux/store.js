import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice"; // Import reducer từ useSlice.js
import cartReducer from "./cartSlice"; // Import reducer từ cartSlice.js
const store = configureStore({
  reducer: {
    focus: useReducer,
    cart: cartReducer,
  },
});

export default store;
