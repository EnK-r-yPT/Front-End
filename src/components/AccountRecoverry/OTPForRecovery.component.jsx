import React, { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import Input from "../Inputs/Input.component";
import { useDispatch, useSelector } from "react-redux";
import { sendAnotherOtp } from "../../store/actions/accoutRecovery.actions";
import { setIsFormValid, setOtp } from "../../store/reducers/form.Reducer";

const OTPForRecovery = () => {
  const otp= useSelector((state) => state.form.otp);
  const email= useSelector((state) => state.form.email);
  const dispatch = useDispatch();
  const [isInputValid, setIsInputValid] = useState({
    otp: false,
  });

  useEffect(() => {
    dispatch(setIsFormValid(isInputValid.otp));
  }, [isInputValid, dispatch]);

  const deb = useMemo(
    () => debounce(() => sendAnotherOtp(), 5000),
    []
  );

  const onResendHandler = () => {
    deb();
  };

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div>
        <h3 className="text-sm text-gray-400 mb-4 ">
          One Time Password (OTP) has been sent to your registered email address{" "}
          <span className="text-[color:var(--color-primary)]">
            {email}
          </span>
        </h3>
      </div>

      <Input
        data={otp}
        setData={setOtp}
        type="number"
        inputFieldName="OTP"
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />

      <div className="flex gap-2 items-center justify-center">
        <h3 className="text-sm text-gray-400">Didn't recieve the OTP ?</h3>
        <button
          type="button"
          className="text-sm font-semibold text-[color:var(--color-primary)] outline-none"
          onClick={onResendHandler}
        >
          RESEND OTP
        </button>
      </div>
    </div>
  );
};

export default OTPForRecovery;
