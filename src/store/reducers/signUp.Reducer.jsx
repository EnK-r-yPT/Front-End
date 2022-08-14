import { createSlice } from "@reduxjs/toolkit";

const NO_OF_STEPS_IN_SIGN_IN = 1; // 0 based indexing

const signUpSliceInitialState = {
  username: "",
  email: "",
  category: "",
  pass_image: "",
  isFormValid: false,
  step: 0,
  isLoading: false,
  images: [],
  categoryList: ["Cat", "Dog"],
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
    setPassImage(state, action) {
      state.pass_image = action.payload;
    },
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    nextSetStep(state) {
      if (state.step === NO_OF_STEPS_IN_SIGN_IN) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
    setInitialState(state) {
      state.username = signUpSliceInitialState.username;
      state.email = signUpSliceInitialState.email;
      state.category = signUpSliceInitialState.category;
      state.pass_image = signUpSliceInitialState.pass_image;
      state.isFormValid = signUpSliceInitialState.isFormValid;
      state.step = signUpSliceInitialState.step;
      state.isLoading = signUpSliceInitialState.isLoading;
      state.images = signUpSliceInitialState.images;
      state.categoryList = signUpSliceInitialState.categoryList;
    },
  },
});

export const {
  setUsername,
  setEmail,
  setCategory,
  setPassImage,
  setIsFormValid,
  nextSetStep,
  backSetStep,
  setIsLoading,
  setImages,
  setCategoryList,
  setInitialState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
