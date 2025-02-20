import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice"; // Import reducer từ useSlice.js

const store = configureStore({
  reducer: {
    focus: useReducer, // Đăng ký reducer vào store
  },
});

export default store;
