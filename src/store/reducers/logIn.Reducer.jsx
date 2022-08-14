import { createSlice } from "@reduxjs/toolkit";

const logInSliceInitialState = {
  username: "",
  password: [],
  category: "",
  imageList: [],
  step: 0,
  noOfSteps: 0,
  allImages: {},
  isLoading: false,
  isFormValid: false,
  categoryLength: [],
};

const logInSlice = createSlice({
  name: "logIn",
  initialState: logInSliceInitialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setNoOfSteps(state, action) {
      state.noOfSteps = action.payload;
    },
    setAllImages(state, action) {
      state.allImages = action.payload;
    },
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    nextSetStep(state) {
      if (state.step === state.noOfSteps) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setCategoryLength(state, action) {
      state.categoryLength = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setCategory,
  setImageList,
  setIsLoading,
  setNoOfSteps,
  setAllImages,
  setIsFormValid,
  nextSetStep,
  backSetStep,
  setCategoryLength
} = logInSlice.actions;

export default logInSlice.reducer;
