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
      if (state.step === state.noOfSteps || !state.isFormValid) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setCategoryLength(state, action) {
      state.categoryLength = action.payload;
    },
    setInitialState(state) {
      state.username = logInSliceInitialState.username;
      state.category = logInSliceInitialState.category;
      state.password = logInSliceInitialState.password;
      state.imageList = logInSliceInitialState.imageList;
      state.noOfSteps = logInSliceInitialState.noOfSteps;
      state.step = logInSliceInitialState.step;
      state.isFormValid = logInSliceInitialState.isFormValid;
      state.isLoading = logInSliceInitialState.isLoading;
      state.allImages = logInSliceInitialState.allImages;
      state.categoryLength = logInSliceInitialState.categoryLength;
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
  setCategoryLength,
  setInitialState,
} = logInSlice.actions;

export default logInSlice.reducer;
