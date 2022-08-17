import { createSlice } from "@reduxjs/toolkit";

const NO_OF_STEPS_IN_SIGN_IN = 1; // 0 based indexing

const signUpSliceInitialState = {
  username: "",
  email: "",
  category: "",
  pass_image: "",
  isFormValid: false,
  step: 0,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: signUpSliceInitialState,
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
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    setPassImage(state, action) {
      state.pass_image = action.payload;
    },
    nextSetStep(state) {
      if (state.step === NO_OF_STEPS_IN_SIGN_IN || !state.isFormValid) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setSignUpInitialState(state) {
      state.username = signUpSliceInitialState.username;
      state.category = signUpSliceInitialState.category;
      state.email = signUpSliceInitialState.email;
      state.isFormValid = signUpSliceInitialState.isFormValid;
      state.pass_image = signUpSliceInitialState.pass_image;
      state.step = signUpSliceInitialState.step;
    },
  },
});

export const {
  setUsername,
  setCategory,
  setEmail,
  setIsFormValid,
  setPassImage,
  nextSetStep,
  backSetStep,
  setSignUpInitialState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
