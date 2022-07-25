import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn.page";
import SignUp from "./pages/SignUp.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
