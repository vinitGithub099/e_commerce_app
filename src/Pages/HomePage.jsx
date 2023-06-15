import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsPage from "./ProductsPage";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}
