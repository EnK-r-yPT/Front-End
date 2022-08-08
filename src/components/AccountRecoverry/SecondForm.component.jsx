import React, { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import useInput from "../../hooks/useInput.hook";

import { RiLockPasswordLine } from "react-icons/ri";

import { debounce } from "lodash";

const SecondForm = ({
  formData,
  setFormData,
  setIsFormValid,
  sendRequestForOTPHandler,
}) => {
  const {
    value: enteredOtp,
    isValid: enteredOtpIsValid,
    hasError: otpInputHasError,
    valueChangeHandler: otpChangeHandler,
    inputBlurHandler: otpBlurHandler,
  } = useInput((value) => value.trim() !== "", formData, setFormData, "otp");

  useEffect(() => {
    if (enteredOtpIsValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [enteredOtpIsValid, setIsFormValid]);

  const deb = useMemo(() => debounce(() => sendRequestForOTPHandler(), 5000),[sendRequestForOTPHandler]);

  const onResendHandler = () => {
    deb();
  };

  const invalidInput = "bg-red-100";

  const invalidContainer = " border border-red-400 bg-red-100 py-[0.6rem]";

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div>
        <div>
          <h3 className="text-sm text-gray-400 mb-4 ">
            One Time Password (OTP) has been sent to your registered email
            address{" "}
            <span className="text-[color:var(--color-primary)]">
              vic...@gmail.com
            </span>
          </h3>
        </div>
        <div
          className={twMerge(
            `flex items-center bg-gray-100 px-2 py-3`,
            `${otpInputHasError ? invalidContainer : ""}`
          )}
        >
          <RiLockPasswordLine className="text-gray-400  mx-1 text-xl" />
          <input
            name="userId"
            className={twMerge(
              ` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`,
              `${otpInputHasError ? invalidInput : ""}`
            )}
            type="number"
            placeholder="Enter OTP"
            minLength="6"
            maxLength="6"
            onChange={otpChangeHandler}
            onBlur={otpBlurHandler}
            value={enteredOtp}
          />
        </div>
        {otpInputHasError && (
          <p className="text-red-400 text-sm text-left py-1">
            OTP must not be empty.
          </p>
        )}
      </div>
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
