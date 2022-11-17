import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import LoginContext from "./Contexts/LoginContext";
import PrivateRoutes from "./router/PrivateRoutes";

import Header from "./Components/header/Header";
import Home from "./Views/home/Home";
import Signup from "./Views/signup/Signup";
import Login from "./Views/login/Login";
import MyBooks from "./Views/myBooks/MyBooks";
import Footer from "./Components/footer/Footer";
import Hero from "./assets/images/hero.jpg";

import "./assets/styles/style.css";

const App = () => {
  const ctx = useContext(LoginContext);
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        {!ctx.isLoggedIn && (
          <div className="slogan">
            <h1>meet your next favorite book.</h1>
          </div>
        )}

        {!ctx.isLoggedIn && (
          <div className="hero">
            <img src={Hero} alt="hero" />
          </div>
        )}

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/mybooks" element={<MyBooks />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};
export default App;
