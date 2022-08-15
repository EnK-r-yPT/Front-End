import { createSlice } from "@reduxjs/toolkit";

const NO_OF_STEPS_IN_ACCOUNT_RECOVERY = 3;

const accountRecoveryInitialState = {
  step: 0,
  emailOtp: "",
};

const accountRecoverySlice = createSlice({
  name: "accountRecovery",
  initialState: accountRecoveryInitialState,
  reducers: {
    setEmailOtp(state, action) {
      state.emailOtp = action.payload;
    },
    nextSetStep(state,{isFormValid}) {
      if (state.step === NO_OF_STEPS_IN_ACCOUNT_RECOVERY)
        return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setAccountRecoveryInitialState(state) {
      state.step = accountRecoveryInitialState.step;
      state.emailOtp = accountRecoveryInitialState.emailOtp;
    },
  },
});

export const { nextSetStep, backSetStep, setAccountRecoveryInitialState, setEmailOtp } =
  accountRecoverySlice.actions;

export default accountRecoverySlice.reducer;
