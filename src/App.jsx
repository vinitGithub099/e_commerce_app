import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import RegisterUserPage from "./Pages/RegisterUserPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";
export default function App() {
  return (
    <div className={`border w-full min-h-screen bg-white flex flex-col`}>
      <Header></Header>
      <Navbar></Navbar>
      <main className="mx-auto w-full">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/products"
            element={<ProductsPage></ProductsPage>}
          ></Route>
          <Route
            path="/login"
            element={<RegisterUserPage></RegisterUserPage>}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}
