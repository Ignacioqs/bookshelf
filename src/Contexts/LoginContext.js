import { createContext, useState } from "react";

const LoginContext = createContext();
export default LoginContext;

export const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginFunction = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <LoginContext.Provider
      value={{
        loginFunction,
        isLoggedIn,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
