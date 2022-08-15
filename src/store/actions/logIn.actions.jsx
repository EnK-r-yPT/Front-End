import axios from "axios";
import { toast } from "react-toastify";

import {
  nextSetStep,
  setAllImages,
  setCategoryLength,
  setImageList,
  setLogInInitialState,
  setNoOfSteps,
} from "../reducers/logIn.Reducer";

import { setIsLoading } from "../reducers/ui.Reducer";
import {
  setCategory,
  setFormInitialState,
  setPassword,
} from "../reducers/form.Reducer";

const URL_OF_ALL_CATEGORY_IMAGES =
  "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages.json";

const URL_FOR_USER_EXIST = "http://localhost:4000/signin/check";

const URL_FOR_USER_VERIFICATION = "http://localhost:4000/signin";

export const fetchAllImages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_OF_ALL_CATEGORY_IMAGES);
      let categoryLen = [];
      let data = response.data;
      for (let cat in data) {
        categoryLen.push({
          category: cat,
          length: data[cat].length,
        });
      }
      dispatch(setCategoryLength(categoryLen));
      dispatch(setAllImages(data));
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
};

export const isUserExistHandler = (userInfo, allImages) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_EXIST, userInfo);
      const { pattern, category } = response.data;

      if (!allImages[category]) {
        throw new Error("category diff not in firebase db");
      }

      const categoryImage = allImages[category];
      const imagesWithUrl = [];

      for (let i = 0; i < pattern.length; i++) {
        const rows = [];
        for (let j = 0; j < pattern[0].length; j++) {
          rows.push({
            id: pattern[i][j],
            url: categoryImage[pattern[i][j]],
          });
        }
        imagesWithUrl.push(rows);
      }

      dispatch(setCategory(category));
      dispatch(setImageList(imagesWithUrl));
      dispatch(setNoOfSteps(imagesWithUrl.length));
      dispatch(setPassword(Array(imagesWithUrl.length).fill(null)));
      dispatch(nextSetStep());
    } catch (error) {
      console.log(error.message);
      toast.error(error);
    }
    dispatch(setIsLoading(false));
  };
};

export const verifyUserLogin = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_VERIFICATION, userInfo);
      const data = response.data;
      console.log(data);
      toast.success(data.message);
      dispatch(setLogInInitialState());
      dispatch(setFormInitialState());
    } catch (error) {
      console.log(error);
    }
    dispatch(setIsLoading(false));
  };
};

/*
 if (!success) {
        notification("error", message);
        setStep(1);
        isUserExistHandler();
        navigate("/login");
        setIsLoading(false);
        return;
      }
*/
