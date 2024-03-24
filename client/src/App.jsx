import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import Problems from "./components/problem-list/Problems";
import Showprob from "./components/showprob/Showprob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problemslist" element={<Problems />} />
        <Route path="/problem" element={<Showprob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
