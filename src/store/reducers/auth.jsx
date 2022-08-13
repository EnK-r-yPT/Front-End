import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const authSliceInitialState = {
  isLoggedIn: false,
  authToken: "",
  userUniqueId: uuidv4(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: authSliceInitialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.authToken = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
