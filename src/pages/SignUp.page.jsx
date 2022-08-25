import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormBody from "../components/SignUp/FormBody.component";
import FormButtons from "../components/SignUp/FormButtons.component";
import { userRegistration } from "../store/actions/signUp.actions";
import { setSignUpInitialState } from "../store/reducers/signUp.Reducer";

const SignUp = () => {
  const username = useSelector((state) => state.signUp.username);
  const personalEmail = useSelector((state) => state.signUp.personalEmail);
  const professionalEmail = useSelector(
    (state) => state.signUp.professionalEmail
  );
  const phoneNumber = useSelector((state) => state.signUp.phoneNumber);
  const category = useSelector((state) => state.signUp.category);
  const pass_image = useSelector((state) => state.signUp.pass_image);
  const isFormValid = useSelector((state) => state.signUp.isFormValid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setSignUpInitialState());
    };
  }, [dispatch]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    const userInfo = {
      username,
      personalEmail,
      profEmail: professionalEmail,
      phoneNumber,
      category,
      pass_image: pass_image.id,
    };
    console.log(userInfo);
    const isSuccess = await dispatch(userRegistration(userInfo));
    if (isSuccess) {
      navigate("/login");
    }
  };

  return (
    <div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
            Create an Account
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">
          <FormBody />
        </div>

        <div className="footer mt-8 flex justify-around">
          <FormButtons />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
