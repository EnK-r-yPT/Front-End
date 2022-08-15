import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = uiSlice.actions;

export default uiSlice.reducer;
