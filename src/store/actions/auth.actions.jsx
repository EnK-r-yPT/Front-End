import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../reducers/auth.Reducer";

const URL_FOR_JWT_TOKEN_VERIFICATION =
  "https://sih-enkrypt.herokuapp.com/authentication";

export const jwtVerficationRequest = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_FOR_JWT_TOKEN_VERIFICATION, {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;
      console.log(data);
      return true;
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      dispatch(logout());
      return false;
    }
  };
};
