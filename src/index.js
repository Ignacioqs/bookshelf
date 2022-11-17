import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Contexts/Context";
import { LoginContextProvider } from "./Contexts/LoginContext";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./Contexts/ModalContext";
import { MenuContextProvider } from "./Contexts/MenuContext";

ReactDOM.render(
  // <React.StrictMode>
  <ContextProvider>
    <LoginContextProvider>
      <ModalContextProvider>
        <MenuContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuContextProvider>
      </ModalContextProvider>
    </LoginContextProvider>
  </ContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
