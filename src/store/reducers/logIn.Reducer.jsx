import { createSlice } from "@reduxjs/toolkit";

const logInSliceInitialState = {
  imageList: [],
  step: 0,
  noOfSteps: 0,
  allImages: {},
  categoryLength: [],
};

const logInSlice = createSlice({
  name: "logIn",
  initialState: logInSliceInitialState,
  reducers: {
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setNoOfSteps(state, action) {
      state.noOfSteps = action.payload;
    },
    setAllImages(state, action) {
      state.allImages = action.payload;
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
    setLogInInitialState(state) {
      state.imageList = logInSliceInitialState.imageList;
      state.noOfSteps = logInSliceInitialState.noOfSteps;
      state.step = logInSliceInitialState.step;
      state.allImages = logInSliceInitialState.allImages;
      state.categoryLength = logInSliceInitialState.categoryLength;
    },
  },
});

export const {
  setImageList,
  setNoOfSteps,
  setAllImages,
  nextSetStep,
  backSetStep,
  setCategoryLength,
  setLogInInitialState,
} = logInSlice.actions;

export default logInSlice.reducer;
