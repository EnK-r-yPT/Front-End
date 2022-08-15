import { createSlice } from "@reduxjs/toolkit";

const formInitialState = {
  username: "",
  email: "",
  category: "",
  pass_image: "",
  password: [],
  otp: "",
  isFormValid: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: formInitialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPassImage(state, action) {
      state.pass_image = action.payload;
    },
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setFormInitialState(state) {
      state.username = formInitialState.username;
      state.password = formInitialState.password;
      state.otp = formInitialState.otp;
      state.category = formInitialState.category;
      state.pass_image = formInitialState.otp;
      state.isFormValid = formInitialState.isFormValid;
      state.email = formInitialState.email;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setEmail,
  setIsFormValid,
  setOtp,
  setCategory,
  setPassImage,
  setFormInitialState,
} = formSlice.actions;

export default formSlice.reducer;
