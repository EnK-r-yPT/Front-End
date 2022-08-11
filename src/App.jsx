import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs.page";
import ContactUs from "./pages/ContactUs.page";
import Home from "./pages/Home.page";
import LogIn from "./pages/LogIn.page";
import SignUp from "./pages/SignUp.page";
import AccountRecovery from "./pages/AccountRecovery.page";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";
import NewPassword from "./pages/NewPassword.page";

function App() {
  const notification = (messageType, textToShow) => {
    let element = "",
      icon = "";
    if (messageType === "success") {
      icon = (
        <FaCheckCircle className="text-green-400 sm:text-[1.2rem] md:text-[1.6rem]" />
      );
    } else if (messageType === "error") {
      icon = (
        <RiErrorWarningFill className="text-red-500 sm:text-[1.2rem] md:text-[1.6rem]" />
      );
    } else if (messageType === "warn") {
      icon = (
        <TiWarning className="text-red-400 sm:text-[1.2rem] md:text-[1.6rem]" />
      );
    } else if (messageType === "info") {
      icon = (
        <FaInfoCircle className="text-cyan-400 sm:text-[1.2rem] md:text-[1.6rem]" />
      );
    }
    element = (
      <div className="flex gap-3 items-center">
        {icon}
        <p className="">{textToShow}</p>
      </div>
    );
    toast(element, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/signup"
            element={<SignUp notification={notification} />}
          />
          <Route path="/login" element={<LogIn notification={notification} />} />
          <Route path="/accountrecovery" element={<AccountRecovery notification={notification} />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
      </Layout>
      <ToastContainer
        bodyClassName="text-gray-500 text-left"
        className=""
        progressClassName="bg-green-400"
        toastClassName="top-[5rem] md:right-[0.6rem]"
      />
    </div>
  );
}

export default App;
