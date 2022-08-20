import axios from "axios";
import { toast } from "react-toastify";
import { setIsLoading } from "../reducers/ui.Reducer";

const URL_FOR_CONTACT_US = "http://localhost:4000/contactus";

export const contactUsFormSubmit = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_CONTACT_US, userInfo);
      const { message, success } = response.data;
      console.log(message, success);
      toast.success(message);
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
    }
    dispatch(setIsLoading(false));
  };
};