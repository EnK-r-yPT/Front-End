import axios from "axios";
import { toast } from "react-toastify";
import { setCategoryList, setImages } from "../reducers/category.Reducer";
import { setIsLoading } from "../reducers/ui.Reducer";

let URL_FOR_CATEGORIES =
  "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/Categories.json";

export const fetchImages = (category) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      let url = `https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages/${category}.json`;
      const response = await axios.get(url);
      const data = response.data;
      let listData = [];
      for (let id in data) {
        listData.push({
          id: id,
          url: data[id],
        });
      }
      dispatch(setImages(listData));
    } catch (error) {
      toast.error(error);
    }
    dispatch(setIsLoading(false));
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_FOR_CATEGORIES);
      const data = response.data;
      dispatch(setCategoryList(data));
    } catch (error) {
      toast.error(error.message);
    }
  };
};
