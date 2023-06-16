import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { getToken } from "./helper/SessionHelper";
import MasterLayout from "./components/masterLayout/MasterLayout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
const App = () => {
  // if(getToken()){
  //   return (
  //     <BrowserRouter>
  //       <Toaster />
  //       <Routes>
  //         <Route exact path="/" element={<HomePage />} />
  //         <Route exact path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }else{
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
