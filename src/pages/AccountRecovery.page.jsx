import React, { useState } from "react";
import FormBody from "../components/AccountRecoverry/FormBody.component";
import FormButtons from "../components/AccountRecoverry/FormButtons.component";

let Url = "";

const AccountRecovery = ({ notification }) => {
  const [step, setStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    otp: "",
    category: "",
    pass_image: "",
  });

  const heading = step < 2 ? "Account Recovery" : "New Password";

  const isUserExistHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/otp/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
        }),
      });
      const { email, message } = await response.json();
      console.log(message, email);
      // if (!success) {
      //   notification("error", message);
      //   setIsLoading(false);
      //   return;
      // }
      nextStepHandler();
    } catch (error) {
      notification("error", "Something went wrong!");
    }
    setIsLoading(false);
  };

  const sendRequestForOTPHandler = async () => {
    try {
      console.log("req");
      const response = await fetch("http://localhost:4000/otp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          otp: formData.otp,
        }),
      });
      console.log("reqd");
      const {success, message} = await response.json();
      console.log(message, success);
      if (!success) {
        notification("error", "Something went wrong!");
        return;
      }
      nextStepHandler();
    } catch (error) {
      notification("error", error.message);
    }
  };

  const nextStepHandler = () => {
    if (!isFormValid || step >= 3) {
      return;
    }
    setStep((step) => step + 1);
  };

  const backStepHandler = () => {
    if (step <= 0) {
      return;
    }
    setStep((step) => step - 1);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });

    if (response.ok) {
      alert("Stored In DB");
    } else {
      alert("Some Error Occured");
    }
  };

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2">
            {heading}
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">
          <FormBody
            formData={formData}
            setFormData={setFormData}
            setIsFormValid={setIsFormValid}
            step={step}
            sendRequestForOTPHandler={sendRequestForOTPHandler}
          />
        </div>

        <div className="footer mt-8 flex justify-around">
          <FormButtons
            step={step}
            nextStepHandler={nextStepHandler}
            backStepHandler={backStepHandler}
            isUserExistHandler={isUserExistHandler}
            isFormValid={isFormValid}
            isLoading={isLoading}
            sendRequestForOTPHandler={sendRequestForOTPHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default AccountRecovery;
