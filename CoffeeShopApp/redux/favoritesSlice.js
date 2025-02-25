import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const index = state.findIndex(item => item.sanpham_id === product.sanpham_id);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(product);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;