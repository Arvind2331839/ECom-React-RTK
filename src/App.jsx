import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import FullData from "./components/FullData";
import LoginForm from "./components/LoginForm";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="FullData" element={<FullData/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
