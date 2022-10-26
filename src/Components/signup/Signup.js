import classes from "./signup.module.css";
import useInput from "../../use-input";
import React, { useContext, useState } from "react";
import myContext from "../../Context";
import { useNavigate } from "react-router-dom";
import { signup } from "../../firebase-config";

const Login = () => {
  const ctx = useContext(myContext);
  const history = useNavigate();

  const [error, setError] = useState("");

  const {
    value: enteredFullname,
    isValid: enteredFullnameIsValid,
    hasError: fullnameInputHasError,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 6);

  const fullnameInputClasses = fullnameInputHasError
    ? `${classes.loginInput} ${classes.invalid}`
    : classes.loginInput;

  const emailInputClasses = emailInputHasError
    ? `${classes.loginInput} ${classes.invalid}`
    : classes.loginInput;

  const passwordInputClasses = passwordInputHasError
    ? `${classes.loginInput} ${classes.invalid}`
    : classes.loginInput;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    try {
      setError("");
      await signup(enteredEmail, enteredPassword);
      ctx.loginFunction();
      history("/home");
      resetFullnameInput();
      resetEmailInput();
      resetPasswordInput();
    } catch (err) {
      setError(err.message);
    }
  };

  const goToLogin = () => {
    history("/login");
  };

  return (
    <form className={classes.loginForm} onSubmit={submitHandler}>
      <div className={classes.alreadyMember}>
        <h1> Create Account </h1>
        <p>
          Already a member?
          <span className={classes.login} onClick={goToLogin}>
            Login
          </span>
        </p>
      </div>

      <div className={fullnameInputClasses}>
        <label htmlFor="fullname">first and last name</label>
        <input
          id="fullname"
          type="text"
          onChange={fullnameChangeHandler}
          onBlur={fullnameBlurHandler}
          value={enteredFullname}
        />
        {fullnameInputHasError && (
          <p className={classes["error-text"]}>Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes["error-text"]}>Email must include '@'</p>
        )}
      </div>

      <div className={passwordInputClasses}>
        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p className={classes["error-text"]}>
            Password must be at least 7 characters long.
          </p>
        )}
      </div>

      <div className={classes.loginInput}>
        <button disabled={!formIsValid}>register</button>
      </div>
      <div>{error}</div>
    </form>
  );
};

export default Login;
