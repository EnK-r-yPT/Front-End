import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormBody from "../components/SignUp/FormBody.component";
import FormButtons from "../components/SignUp/FormButtons.component";
import { userRegistration } from "../store/actions/signUp.actions";
import { setInitialState } from "../store/reducers/signUp.Reducer";

const SignUp = () => {
  const username = useSelector((state) => state.signUp.username);
  const email = useSelector((state) => state.signUp.email);
  const category = useSelector((state) => state.signUp.category);
  const pass_image = useSelector((state) => state.signUp.pass_image);
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(setInitialState());
    }
  },[dispatch]);
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const userInfo = {
      username,
      email,
      category,
      pass_image:pass_image.id,
    };
    console.log(userInfo);
    dispatch(userRegistration(userInfo));
  };

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
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
