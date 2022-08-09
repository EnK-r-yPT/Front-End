import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button.component";

import ImageSelect from "../components/SignUp /ImageSelect.component";
import SingUpInfo from "../components/SignUp /SingUpInfo.component";
import LoadingSpinner from "../components/UI/LoadingSpinner.component";

const SignUp = ({ notification }) => {
  const [step, setStep] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    category: "",
    pass_image: "",
  });

  const navigate = useNavigate();

  const BodyDisplay = () => {
    if (step === false) {
      return (
        <SingUpInfo
          formData={formData}
          setFormData={setFormData}
          setIsFormValid={setIsFormValid}
        />
      );
    }
    return (
      <ImageSelect
        setFormData={setFormData}
        formData={formData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  };

  const togglePageHandler = async () => {
    if (!isFormValid && !step) {
      return;
    }
    if (!step) {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:4000/signup/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
          }),
        });
        const { isExist, message } = await response.json();
        console.log(message);
        if (isExist) {
          notification("error", message);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        notification("error", "Something went wrong!");
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
    setStep((step) => !step);
  };

  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";

  const FooterDisplay = () => {
    if (isLoading && !step) {
      return <LoadingSpinner containerClass="" />;
    }
    if (step === false) {
      return (
        <Button
          type="button"
          onClick={togglePageHandler}
          className="btn-base px-4 py-2"
          disabled={!isFormValid || isLoading}
          title={buttonTitle}
        >
          Continue
        </Button>
      );
    }
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={togglePageHandler}
          className="btn-inverted px-4 py-2"
        >
          Back
        </Button>

        <Button
          type="submit"
          className="btn-base px-4 py-2"
          disabled={isLoading}
        >
          Submit
        </Button>
      </React.Fragment>
    );
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/signup/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const { isCreated, message } = await response.json();
      if (isCreated) {
        notification("success", message);
        navigate("/login");
      } else {
        notification("warn", message);
      }
    } catch (error) {
      notification("error", "Something went wrong!");
    }
  };

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2">
            Create an Account
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">{BodyDisplay()}</div>

        <div className="footer mt-8 flex justify-around">{FooterDisplay()}</div>
      </form>
    </div>
  );
};

export default SignUp;
