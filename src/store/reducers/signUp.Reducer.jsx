import { createSlice } from "@reduxjs/toolkit";

const NO_OF_STEPS_IN_SIGN_IN = 1; // 0 based indexing

const signUpSliceInitialState = {
  step: 0,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: signUpSliceInitialState,
  reducers: {
    nextSetStep(state) {
      if (state.step === NO_OF_STEPS_IN_SIGN_IN) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setSignUpInitialState(state) {
      state.step = signUpSliceInitialState.step;
    },
  },
});

export const {
  nextSetStep,
  backSetStep,
  setSignUpInitialState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
