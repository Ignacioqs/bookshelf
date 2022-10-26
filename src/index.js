import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
