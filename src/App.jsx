import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import RegisterUserPage from "./Pages/RegisterUserPage";
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
      </Routes>
    </main>
  );
}
