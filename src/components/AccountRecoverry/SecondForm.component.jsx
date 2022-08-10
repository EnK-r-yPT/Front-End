import React, { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import Input from "../Inputs/Input.component";

const SecondForm = ({
  formData,
  setFormData,
  setIsFormValid,
  sendRequestForOTPHandler,
}) => {
  const [isInputValid, setIsInputValid] = useState({
    otp: false,
  });

  useEffect(() => {
    setIsFormValid(isInputValid)
  }, [isInputValid, setIsFormValid]);

  const deb = useMemo(
    () => debounce(() => sendRequestForOTPHandler(), 5000),
    [sendRequestForOTPHandler]
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
            vic...@gmail.com
          </span>
        </h3>
      </div>

      <Input
        formData={formData}
        setFormData={setFormData}
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

export default SecondForm;
