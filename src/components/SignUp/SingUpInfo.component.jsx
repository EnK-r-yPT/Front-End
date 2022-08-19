import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setEmail,
  setIsFormValid,
  setUsername,
} from "../../store/reducers/signUp.Reducer";
import CategoryInput from "../Inputs/CategoryInput.component";
import Input from "../Inputs/Input.component";

const SingUpInfo = () => {
  const username = useSelector((state) => state.signUp.username);
  const email = useSelector((state) => state.signUp.email);
  const category = useSelector((state) => state.signUp.category);

  const dispatch = useDispatch();
  const [isInputValid, setIsInputValid] = useState({
    username: false,
    email: false,
    category: false,
  });

  useEffect(() => {
    if (isInputValid.username && isInputValid.email && isInputValid.category) {
      dispatch(setIsFormValid(true));
    } else {
      dispatch(setIsFormValid(false));
    }
  }, [isInputValid,dispatch]);

  return (
    <div className="flex flex-col gap-8 mt-10">
      <Input
        inputFieldName={"Username"}
        data={username}
        setData={setUsername}
        type="text"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <Input
        data={email}
        setData={setEmail}
        inputFieldName={"Email"}
        type="email"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <CategoryInput
        data={category}
        setData={setCategory}
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />
    </div>
  );
};

export default SingUpInfo;
