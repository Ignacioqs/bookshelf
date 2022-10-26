import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import myContext from "../../Context";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const ctx = useContext(myContext);
  const history = useNavigate();

  const logoutHandler = () => {
    setShowNav(false);
    history("/signup");
    ctx.loginFunction();
  };

  const hamburgerHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header>
      <div
        className={
          ctx.isLoggedIn
            ? classes.headerContainer
            : classes.headerContainerNotLoggedIn
        }
      >
        <NavLink to="/home" className={classes.logo}>
          <span className={classes.bold}>book</span>shelf
        </NavLink>

        {ctx.isLoggedIn && (
          <div
            className={!showNav ? classes.hamburger : classes.cross}
            onClick={hamburgerHandler}
          >
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
        )}

        {ctx.isLoggedIn && (
          <ul className={showNav ? classes.navMobile : classes.nav}>
            <NavLink
              to="/home"
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              onClick={hamburgerHandler}
            >
              <li>home</li>
            </NavLink>

            <NavLink
              to="/mybooks"
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              onClick={hamburgerHandler}
            >
              <li>my books</li>
            </NavLink>
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              onClick={() => {
                logoutHandler();
              }}
            >
              <li>logout</li>
            </NavLink>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
