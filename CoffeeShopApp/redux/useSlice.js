import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forceBlur: false, // Thêm state forceBlur vào Redux
};

const useSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    setForceBlur: (state, action) => {
      state.forceBlur = action.payload;
    },
  },
});

export const { setForceBlur } = useSlice.actions;
export default useSlice.reducer;
