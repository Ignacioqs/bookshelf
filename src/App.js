import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import myContext from "./Context";
import PrivateRoutes from "./PrivateRoutes";

import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Signup from "./Components/signup/Signup";
import Login from "./Components/login/Login";
import MyBooks from "./Components/myBooks/MyBooks";
import Footer from "./Components/footer/Footer";

import "./style.css";

const App = () => {
  const ctx = useContext(myContext);
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        {!ctx.isLoggedIn && (
          <div className="slogan">
            <h1>meet your next favorite book.</h1>
          </div>
        )}

        {!ctx.isLoggedIn && <div className="hero"></div>}

        <div className="container">
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
        <Footer />
      </div>
    </Fragment>
  );
};
export default App;
