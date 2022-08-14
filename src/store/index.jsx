import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.Reducer";
import logInReducer from "./reducers/logIn.Reducer";
import signUpReducer from "./reducers/signUp.Reducer"

const store = configureStore({
  reducer: {
    auth: authReducer,
    signUp:signUpReducer,
    logIn: logInReducer
  },
});

export default store;
