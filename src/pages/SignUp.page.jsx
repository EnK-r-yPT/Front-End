import React, { useState } from "react";
import ImageSelect from "../components/SignUp /ImageSelect.component";
import SingUpInfo from "../components/SignUp /SingUpInfo.component";

const SignUp = () => {
  const [step, setStep] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    category: "",
    password: "",
  });

  const BodyDisplay = () => {
    if (step === false) {
      return <SingUpInfo  />;
    }
    return <ImageSelect />;
  };

  const togglePageHandler = () => {
    setStep((step) => !step);
  };

  const FooterDisplay = () => {
    if (step === false) {
      return (
        <button
          type="button"
          onClick={togglePageHandler}
          className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
        >
          Continue
        </button>
      );
    }
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={togglePageHandler}
          className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-white text-[color:var(--color-primary)] rounded-full font-semibold hover:bg-[color:var(--color-primary)] hover:text-white"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
        >
          Submit
        </button>
      </React.Fragment>
    );
  };

  return (
    <div className="mt-32 mx-12 md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto">
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-2xl font-semibold mb-2">
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
