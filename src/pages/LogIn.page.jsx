import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormBody from "../components/LogIn/FormBody.component";
import FormButtons from "../components/LogIn/FormButtons.component";

let url =
  "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages.json";
let categoryLen = [];

const LogIn = ({ notification }) => {
  const [step, setStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [logInData, setLogInData] = useState({
    category: "",
    imagesList: [],
    noOfList: 1,
  });

  const [formData, setFormData] = useState({
    username: "",
    password: [],
  });

  const [allImages, setAllImages] = useState({});

  // const slideResponse = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      for (let cat in data) {
        categoryLen.push({
          category: cat,
          length: data[cat].length,
        });
      }
      setAllImages(data);
    };
    fetchData();
  }, [setAllImages]);

  const nextStepHandler = () => {
    if (!isFormValid || step >= logInData.noOfList) {
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

  const isUserExistHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/signin/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          loginId: 3332,
          timestamp: Date.now(),
          categoriesLength: categoryLen,
        }),
      });
      const { isExist, pattern, category } = await response.json();
      if (!isExist) {
        notification("error", "User Not Exist");
        setIsLoading(false);
        return;
      }

      if (!allImages[category]) {
        console.log("category diff not in firebase db");
        return;
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
      setLogInData({
        category: category,
        imagesList: imagesWithUrl,
        noOfList: imagesWithUrl.length,
      });
      setFormData((formData)=>{
        return {
          ...formData,
          password:[]
        }
      });
    } catch (error) {
      notification("error", error);
    }
    setIsLoading(false);
    nextStepHandler();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const heading = step === 0 ? "LogIn To Account" : "Password";

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8 relative">
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
            setStep={setStep}
            logInData={logInData}
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
            logInData={logInData}
          />
        </div>
      </form>
      {!step && (
        <div className="text-center mt-6">
          <Link to="/accountrecovery">
            <p className="text-[color:var(--color-primary)] text-sm">
              Forgotten passowrd?
            </p>
          </Link>
        </div>
      )}
      {step !== 0 && (
        <div className=" px-3 py-1 text-white absolute top-2 right-2 text-sm font-bold bg-[color:var(--color-primary)] rounded-lg">
          {step}
          <span> / </span>
          {logInData.noOfList}
        </div>
      )}
    </div>
  );
};

export default LogIn;
