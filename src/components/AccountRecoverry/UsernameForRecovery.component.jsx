import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../store/reducers/form.Reducer";
import { setIsFormValid } from "../../store/reducers/form.Reducer";
import Input from "../Inputs/Input.component";

const UsernameForRecovery = () => {
  const username = useSelector((state) => state.form.username);
  const dispatch = useDispatch();

  const [isInputValid, setIsInputValid] = useState({
    username: false,
  });

  useEffect(() => {
    dispatch(setIsFormValid(isInputValid.username));
  }, [isInputValid,dispatch]);

  return (
    <div className="mt-12">
      <Input
        setData={setUsername}
        data={username}
        inputFieldName="Username"
        type="text"
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    </div>
  );
};

export default UsernameForRecovery;
