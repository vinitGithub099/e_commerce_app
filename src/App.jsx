import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import RegisterUserPage from "./Pages/RegisterUserPage";
import SignUpForm from "./components/SignUpForm";
import "./index.css";
export default function App() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <Routes>
        <Route exact path="/*" element={<HomePage></HomePage>}></Route>
        <Route
          index
          path="/login"
          element={<RegisterUserPage></RegisterUserPage>}
        ></Route>
        <Route
          index
          path="/register"
          element={<SignUpForm></SignUpForm>}
        ></Route>
      </Routes>
    </main>
  );
}
