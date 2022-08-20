import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const checkForLoggedIn = () => {
  if (localStorage.getItem("AUTH_TOKEN_ENKRYPT")) {
    return true;
  }
  return false;
};

const authSliceInitialState = {
  isLoggedIn: checkForLoggedIn(),
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
      localStorage.setItem("AUTH_TOKEN_ENKRYPT", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = "";
      localStorage.removeItem("AUTH_TOKEN_ENKRYPT");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
