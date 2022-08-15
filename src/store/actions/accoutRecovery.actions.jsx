import axios from "axios";
import { toast } from "react-toastify";
import {
  nextSetStep,
  setEmailOtp,
  setAccountRecoveryInitialState,
} from "../reducers/accountRecovery.Reducer";

import { setCateogryInitialState } from "../reducers/category.Reducer";

import { setIsLoading } from "../reducers/ui.Reducer";

const URL_FOR_OTP_GENERATION = "http://localhost:4000/otp/generate";
const URL_FOR_OTP_VERIFICATION = "http://localhost:4000/otp/verify";
const URL_FOR_RESET_PASSWORD = "http://localhost:4000/otp/resetpass";
const URL_FOR_OTP_RESEND = "http://localhost:4000/otp/resend";

export const isUserExistHandler = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const response = await axios.post(URL_FOR_OTP_GENERATION, userInfo);
      const data = response.data;
      console.log(data);
      const { email } = data;
      dispatch(setEmailOtp(email));

      dispatch(nextSetStep());
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
    dispatch(setIsLoading(false));
  };
};

export const sendAnotherOtp = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const response = await axios.post(URL_FOR_OTP_RESEND, userInfo);
      const data = response.data;
      console.log("otp resend : ", data);
      const email = { data };
      dispatch(setEmailOtp(email));
      toast.success(data.message);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
    dispatch(setIsLoading(false));
  };
};

export const sendRequestForOTPVerification = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_FOR_OTP_VERIFICATION, userInfo);
      const data = response.data;
      console.log(data);
      dispatch(nextSetStep());
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
};

export const passwordResetRequest = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_FOR_RESET_PASSWORD, userInfo);
      const data = response.data;
      console.log(data);
      dispatch(setAccountRecoveryInitialState());
      dispatch(setCateogryInitialState());
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
};
