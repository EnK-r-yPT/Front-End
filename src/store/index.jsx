import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.Reducer";
import signUpReducer from "./reducers/signUp.Reducer"

const store = configureStore({
  reducer: {
    auth: authReducer,
    signUp:signUpReducer,
  },
});

export default store;
